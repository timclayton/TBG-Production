// Useful when not using a framework like jQuery.
// Takes an array of browser-specific properties and 
// returns the proper prefix for the current browser

function getsupportedprop(proparray){
	var root=document.documentElement // reference root element of document
	for (var i=0; i<proparray.length; i++){ // loop through possible properties
		if (typeof root.style[proparray[i]]=="string"){ // if the property value is a string (versus undefined)
			return proparray[i] // return that string
		}
	}
}