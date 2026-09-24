const timeline = gsap.timeline({ 
    // repeat: 3, 
    // repeatDelay: 3
})

timeline
// MAKE ANIMATION VISIBLE
// was hidden to avoid flash of unstyled content
.set('#banner', {
    display: 'block'
})
// START PANEL 1
.from('#panel1-text', {
    duration: 0.5,
    opacity: 0.5,
    scale: 0.5,
    ease: 'back.out'
})
// START PANEL 2
.set('#panel2', { top: 0 })
.from('#panel2', {
    duration: 0.2,
    opacity: 0,
    scale: 1.5
}, '+=1')
.from('#panel2-text', {
    duration: 0.5,
    yPercent: 100
}, "+=0.5")
.to('#panel2-text', {
    duration: 0.5,
    yPercent: 100
}, "+=1")
// PANEL 3
.set('#panel3', { top: 0 })
.from('#panel3', {
    duration: 0.5,
    yPercent: 100,
})
.to('#panel2', {
    duration: 0.5,
    yPercent: -25,
}, "-=0.25")
// INFO
.from('#info li', {
    duration: 0.3,
    x: 50,
    opacity: 0,
    stagger: 0.1
}, "+=0.2")
.from('#order-now', {
    opacity: 0,
    scale: 1.5,
    duration: 0.2
})