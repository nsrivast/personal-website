// Returns all hotwords specified in div classes
var divHotwords = function(thisdiv) {
	var classList = thisdiv.attr("class").split(/\s+/);
	var hotwords = [];
	for (var i = 0; i < classList.length; i++) {
	   if (classList[i].lastIndexOf("hotword") === 0) {
			 hotwords.push(classList[i].substr(7));
	   }
	}
	return hotwords;
};


// Adds tile and description dropdown to row at specified offset
function addTileAndDropdown(rowID, tile, currOffset) {

	var tileID = rowID + tile.name
	var tileClass = "col-" + tile.size + "-12 ";
	if (typeof tile.offset !== "undefined") {
		tileClass += "push-" + tile.offset + "-12 ";
		currOffset += tile.offset
	}
	
	var hotwordClass = " ";
	if (typeof tile.tags !== "undefined") {
		for (var i = 0; i < tile.tags.length; i++) {
			hotwordClass += "hotword" + tile.tags[i] + " ";
		}
	}
	
	// Create tile
	$("#" + rowID).append(
		$("<div/>", {'class': tileClass}).append(
			$("<div/>", {'class': 'tileContent tileColor' + currOffset + hotwordClass, 'id': tileID, 'tileRow': rowID})
				.append($("<div/>", {'class': 'tileHeading', html: tile.heading}))
				.append($("<div/>", {'class': 'tileBlurb', html: tile.blurb}))
				.append($("<div/>", {'class': 'tileRole', html: tile.role}))
		)
	);
	
	// Create dropdown with extra content (initially hidden)
	descWidth = 7;
	descOffset = currOffset + ((currOffset < (12 - descWidth)) ? 0 : (tile.size - descWidth));
	descClass = 'col-' + descWidth + '-12 push-' + descOffset + '-12';
	
	$("#gridContainer").append(
		$("<div/>", {'class': 'grid grid-pad', css: {'display': 'none'}, 'id': "desc" + tileID, 'descRow': rowID }).append(
			$("<div/>", {'class': descClass}).append(
				$("<div/>", {'class' : "descContent" } )
					.append($("<div/>", {html: tile.descHeader, 'class': "descHeader" }))
					.append($("<div/>", {html: tile.descContent}))
			)
		)
	);
	
	currOffset += tile.size	
	return(currOffset);
};

// Create grid with header, rows of tiles, and rows of dropdown content
function createGrid() {

	// Header row
	$("#gridContainer").append($("<div/>", {'class': 'grid grid-pad grid-bottom', 'id': 'yeargrid' }));
	sizeText = [[2, '&nbsp;'], [4, '&larr; More Recent'], [4, "Older &rarr;"]];
	for (var i = 0; i < sizeText.length; i++) {
		$('#yeargrid').append($("<div/>", {'class': 'col-' + sizeText[i][0] + '-12 colHead', html: sizeText[i][1] }));
	}

	// Content row: row header and tiles
	for (var i = 0; i < rows.length; i++) {
		
		// Row header (left column)
		$("#gridContainer").append(
			$("<div/>", {'class': 'grid grid-pad', 'id': rows[i].id }).append(
				$("<div/>", {'class': 'col-2-12 rowHead'}).append(
					$("<div/>", {'class': rows[i].class, text: rows[i].name })
				)
			)
		);
		
		// Row tiles
		var rowTiles = rows[i].tiles;
		var currOffset = 2;
		for (var j = 0; j < rowTiles.length; j++) {
			currOffset = addTileAndDropdown(rows[i].id, rowTiles[j], currOffset);			
		}
	}
	
	setEvents();	
};


function setEvents() {
	
	// Clicking on a tile
	$(".tileContent").click(function() {
		thisRow = $(this).attr('tileRow');
		thisID = $(this).attr('id');
		
		// Hide other dropdowns, de-select other tiles in this row
		$("[descRow='" + thisRow + "']").not("#desc" + thisID).hide();
		$("[tileRow='" + thisRow + "']").not("#" + thisID).removeClass("tileSelect");
		
		// Toggle this dropdown, toggle this tile, scroll into view
		$("#desc" + thisID).toggle(300);
		$(this).toggleClass("tileSelect");
		this.scrollIntoViewIfNeeded();
		
	});
	
	// On tile hover, 1) change to pointer cursor, 2) change color, 3) hover for linked hotwords
	$(".tileContent").css('cursor', 'pointer')
	$(".tileContent").hover(
		function() {
			$(this).addClass("tileHover");
			// === hover ON linked wotwords
			var hotwords = divHotwords($(this));
			for (var i = 0; i < hotwords.length; i++) {
				$(".hotword[word=" + hotwords[i] + "]").addClass("tileHover");
			}
		}, function() {
			$(this).removeClass("tileHover");
			// === hover OFF linked wotwords
			var hotwords = divHotwords($(this));
			for (var i = 0; i < hotwords.length; i++) {
				$(".hotword[word=" + hotwords[i] + "]").removeClass("tileHover");
			}
		}
	);
	
	// On hotword hover, induce hover for linked tiles
	$(".hotword").hover(
		function() {
			var hotword = $(this).attr('word')
			$(".hotword" + hotword).addClass("tileHover");
		}, function() {
			$(".hotword" + $(this).attr('word')).removeClass("tileHover");
		}
	)
}