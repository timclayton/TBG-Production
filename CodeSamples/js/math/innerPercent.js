// Calculates the percent through a segment of a larger segment
// Returns 0 before start of segment and one after end of segment
// a, b, and c can either be all percentages or all integers
// a = global value
// b = segment start
// c = segment end

var calcPercent = function(a,b,c) {	
		
	if ( a <= b ) { return 0 }
	else { return a >= c ? 1 : ( a - b ) / ( c - b ) }

}