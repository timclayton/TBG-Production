// Function takes an image and constains its proportions
// to fit within a desired width and height and centers the long
// side within its container.

function thumbSqueeze(dw,dh,w,h) {
	var	r = Math.max(dw/w,dh/h),
			w = w*r,
			h = h*r,
			ox = -((w - dw) / 2),
			oy = -((h - dh) / 2);
	return [w,h,ox,oy];
}

// Must be ran on load so that actual image sizes can be read

$(window).load(function() {
	$("img.cs-thumb").each(function() {
		var a = thumbSqueeze(114,76,this.width,this.height);
		$(this).css({
			'width': a[0],
			'height': a[1],
			'margin-left': a[2],
			'margin-top': a[3]
		});
	});
});