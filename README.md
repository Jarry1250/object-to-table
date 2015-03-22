# object-to-table
Convert an two dimensional JS object to a table

Usage: $.toTable( object arr, bool showTotals );
Status: Experimental
Note: If showTotals is used, object-to-table with attempt a parseFloat() during addition, so could get funky if non-numeric
strings are used.