// Set all grid events
function setEvents() {
	
	// Clicking on a tile
	$( ".tileContent" ).click(function() {
		thisRow = $( this ).attr( 'tileRow' );
		thisID = $( this ).attr( 'id' );
		
		// Hide other dropdowns, de-select other tiles in this row
		$( "[descRow='" + thisRow + "']" ).not( "#desc" + thisID ).hide();
		$( "[tileRow='" + thisRow + "']" ).not( "#" + thisID ).removeClass( "tileSelect" );
		
		// Toggle this dropdown, toggle this tile, scroll into view
		$( "#desc" + thisID ).toggle( 300 );
		$( this ).toggleClass( "tileSelect" );
		this.scrollIntoViewIfNeeded();
	});
	
	// On tile hover, 1) change to pointer cursor, 2) change color, 3) hover for linked hotwords
	$( ".tileContent" ).css( 'cursor', 'pointer' )
	$( ".tileContent" ).hover(
		function() {
			$( this ).addClass( "tileHover" );
			var hotwords = myHotwords.call($( this ));
			for ( var i = 0; i < hotwords.length; i++ ) {
				$( ".hotword[word=" + hotwords[i] + "]" ).addClass( "tileHover" );
			}
		}, function() {
			$( this ).removeClass( "tileHover" );
			var hotwords = myHotwords.call($( this ));
			for ( var i = 0; i < hotwords.length; i++ ) {
				$( ".hotword[word=" + hotwords[i] + "]" ).removeClass( "tileHover" );
			}
		}
	);
	
	// On hotword hover, induce hover for linked tiles
	$( ".hotword" ).hover(
		function() {
			var hotword = $( this ).attr( 'word' )
			$( ".hotword" + hotword ).addClass( "tileHover" );
		}, function() {
			$( ".hotword" + $( this ).attr( 'word' )).removeClass( "tileHover" );
		}
	);
};

// Returns list of hotwords specified in class string
function myHotwords() {
	var classList = this.attr( "class" ).split(/\s+/);
	var hotwords = [];
	for ( var i = 0; i < classList.length; i++ ) {
	   if ( classList[i].lastIndexOf( "hotword" ) === 0 ) {
			 hotwords.push( classList[i].substr(7) );
	   }
	}
	return hotwords;
};
