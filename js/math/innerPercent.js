// Calculates the percent through a segment of a larger segment
// Returns 0 before start of segment and one after end of segment
// a = global percentage value
// b = segment start
// c = segment end

var innerPercent = function(a,b,c) {	
		
	if ( a < b ) { var d = 0; }
	else if ( a >= c ) { var d = 1; }
	else { var d =  ( a - b ) / ( c - b ); }
	return d;

}
