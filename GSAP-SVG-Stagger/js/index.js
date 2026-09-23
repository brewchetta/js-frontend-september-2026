// tl stands for timeline
const tl = gsap.timeline()

tl
.from('#noble-desktop > g > *', {
    duration: 1,
    scale: 0,
    transformOrigin: 'left center',
    x: -50,
    stagger: 0.2,
    ease: "bounce.out"
})
.from('#n-background', {
    duration: 0.6,
    scale: 0,
    transformOrigin: "right center",
    x: 10
})
.from('#n > *', {
    duration: 0.5,
    scale: 0,
    rotation: 180,
    transformOrigin: "center center",
    stagger: 0.05,
})