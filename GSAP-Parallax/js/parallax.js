const tl = gsap.timeline({
	scrollTrigger: {
		trigger: "#hero",
		start: "top top",
		end: "bottom top",
		scrub: true,
		invalidateOnRefresh: true
	}
});

const paraElements = document.querySelectorAll("#hero > *")

for (let index = 0; index < paraElements.length; index++) {
	// layer is each layer one at a time [background/middleground/foreground/h1]
	const layer = paraElements[index]
	// grab the dataset info
	const depth = layer.dataset.depth;
	// add the tween to the timeline
	tl.to(layer, { 
		y: function() { 
			return -(layer.offsetHeight * depth);
		}, 
		ease: "none" 
	}, 0);
}

/*
This code was posted to the GSAP Forums by Jack Doyle, the creator of GSAP (it's in the embedded CodePen's "Babel" tab)
https://gsap.com/forums/topic/28309-scrolltrigger-parallax-header-recalculating-incorrectly-on-window-resize/?do=findComment&comment=140003
*/