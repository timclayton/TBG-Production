// Function takes an image and constains its proportions
// to fit within a desired width and height and centers the long
// side within its container.

function thumbSqueeze(dw,dh,w,h) {
	var	r = Math.max(dw/w,dh/h), // ratio needed to fill dimensions
			w = w*r, // new width
			h = h*r, // new height
			ox = -((w - dw) / 2), // horizontal offset
			oy = -((h - dh) / 2); // vertical offset
	return [w,h,ox,oy]; // returns array 
}

// Must be ran on load so that actual image sizes can be read
// Example usage:

// 	$(window).load(function() {
//		$("img.thumb").each(function() {
//			var a = thumbSqueeze(desired width, desired height, this.width, this.height);
//			$(this).css({
//				'width': a[0],
//				'height': a[1],
//				'margin-left': a[2],
//				'margin-top': a[3]
//			});
//		});
// 	});