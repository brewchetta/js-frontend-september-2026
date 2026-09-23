const timeline = gsap.timeline({
    repeat: -1,
    repeatDelay: 1,
    yoyo: true
})

timeline
.from('#logo', {
    duration: 1,
    x: 300,
    y: 300,
    ease: "none"
})
.to('#logo', {
    duration: 1,
    x: 300,
    y: -300,
    ease: "none"
})
.from('#tagline', {
    duration: 4,
    rotation: 3600,
}, '-=4')