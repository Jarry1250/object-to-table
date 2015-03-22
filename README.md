# object-to-table
Convert an two dimensional JS object to a table

## Attribution
Copyright (c) 2015 Harry Burt. You may use this code under the MIT License. If that doesn't mean much to you, see [Wikipedia](http://en.wikipedia.org/wiki/MIT_License) for details.

## Dependencies
Requires jQuery (no particular version)

## Usage
$.toTable( object arr, bool showTotals );

## Status
Experimental

## Note
If showTotals is used, object-to-table with attempt a parseFloat() during addition, so could get funky if non-numeric
strings are used.