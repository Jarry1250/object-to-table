/*
 The MIT License (MIT)

 Copyright (c) 2015 Harry Burt

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all
 copies or substantial portions of the Software.
 */
(function ( $ ) {
	$.toTable = function ( arr, showTotals ) {
		var rowKeys = Object.keys( arr ).sort(),
			columnKeys = [],
			$table = $( "<table>" );
		showTotals = (typeof showTotals === 'undefined') ? true : showTotals;

		// Prepare "Total" row at bottom
		if ( showTotals ) {
			arr.Total = {};
			rowKeys.push( "Total" );
		}

		// Extract column keys
		for ( var key in arr ) {
			if ( !arr.hasOwnProperty( key ) ) continue;
			$.extend( columnKeys, arr[key] );
		}
		columnKeys = Object.keys( columnKeys ).sort();

		// Start with header row
		var headerRow = $( "<tr>" ).append( $( "<th>" ) );
		for ( var i = 0; i < columnKeys.length; i++ ) {
			headerRow.append( $( "<th>" ).text( columnKeys[i] ) );
		}
		if ( showTotals ) {
			headerRow.append( $( "<th>" ).text( "Total" ) );
		}
		$table.append( headerRow );

		for ( var j = 0; j < rowKeys.length; j++ ) {
			var row = $( "<tr>" ).append( $( "<th>" ).text( rowKeys[j] ) ),
				rowTotal = 0;
			for ( i = 0; i < columnKeys.length; i++ ) {
				var text = "-",
					number = arr[rowKeys[j]][columnKeys[i]];
				if ( number ) {
					text = number;
					if ( showTotals ) {
						rowTotal += parseFloat( number );
						if ( !arr.Total[columnKeys[i]] ) arr.Total[columnKeys[i]] = 0;
						arr.Total[columnKeys[i]] += parseFloat( number );
					}
				}
				row.append( $( "<td>" ).text( text ) );
			}
			if ( showTotals ) {
				row.append( $( "<td>" ).text( rowTotal ) );
			}
			$table.append( row );
		}
		return $table;
	};
}( jQuery ));