// Create grid by appending rows: each having a header and tiles/dropdowns or texts
function createGrid() {
  var grid = $("#gridContainer");

  for ( var rowContent of gridContent ) {
    var row$ = rowFromContent(rowContent);

    // add row header
    grid.append(row$);

    // add all TILE and DROPDOWN objects to row, tracking current offset
    if ( typeof rowContent.tiles !== "undefined" ) {
      var currOffset = 2;
      for ( var tileContent of rowContent.tiles ) {

        tileContent.rowID = rowContent.id;
        if ( typeof tileContent.offset !== "undefined" ) {
          currOffset += tileContent.offset;
        }
        tileContent.currOffset = currOffset;

        row$.append( tileFromContent( tileContent ) );
        grid.append( dropdownFromContent( tileContent ) );

        currOffset += tileContent.size;
      }
    };

    // add all TEXT objects
    if ( typeof rowContent.texts !== "undefined" ) {
      for ( var text of rowContent.texts ) {
        row$.append( 
          $( "<div/>", {'class': 'col-' + text.size + '-12 colHead', html: text.html } )
        );
      }
    };

  };

};

// Create row div (with header) from content object
function rowFromContent( rC ) {
  return( 
    $("<div/>", {'class': 'grid grid-pad ' + rC.gridClass, 'id': rC.id } ).append(
      $( "<div/>", {'class': 'col-2-12 rowHead'} ).append(
        $( "<div/>", {'class': rC.class, html: rC.name } )
      )
    )
  );
};

// Create tile div from content object
function tileFromContent( tC ) {
  tC.class = "col-" + tC.size + "-12 ";
  if ( typeof tC.offset !== "undefined" ) {
    tC.class += "push-" + tC.offset + "-12 ";
  }

  tC.color = 'tileColor' + tC.currOffset;
  tC.hotword = " ";
  if ( typeof tC.tags !== "undefined" ) {
    for ( var i = 0; i < tC.tags.length; i++ ) {
      tC.hotword += "hotword" + tC.tags[i] + " ";
    }
  }
	
  return(
    $( "<div/>", {'class': tC.class} ).append(
      $( "<div/>", {'class': 'tileContent ' + tC.color + tC.hotword, 'id': tC.rowID + tC.name, 'tileRow': tC.rowID} )
        .append($( "<div/>", {'class': 'tileImg', html: tC.img ? "<img src='images/" + tC.img + "_sm.png' />" : ""} ))
        .append($( "<div/>", {'class': 'tileHeading', html: tC.heading} ))
        .append($( "<div/>", {'class': 'tileBlurb', html: tC.blurb} ))
        .append($( "<div/>", {'class': 'tileRole', html: tC.role} ))
    )
  );
};

// Create dropdown row div from content object
function dropdownFromContent( tC ) {
  width = 7;
  offset = tC.currOffset + ((tC.currOffset < (12 - width)) ? 0 : (tC.size - width));
  dropdownClass = 'col-' + width + '-12 push-' + offset + '-12';

  return(
    $( "<div/>", {'class': 'grid grid-pad', css: {'display': 'none'}, 'id': "desc" + tC.rowID + tC.name, 'descRow': tC.rowID } ).append(
      $( "<div/>", {'class': dropdownClass} ).append(
        $( "<div/>", {'class' : "descContent" } )
					.append($( "<div/>", {'class': 'descImg', html: tC.img ? "<img src='images/" + tC.img + ".png' />" : ""} ))
	        .append($( "<div/>", {html: tC.descHeader, 'class': "descHeader" } ))
          .append($( "<div/>", {html: tC.descContent} ))
      )
    )
  );
};