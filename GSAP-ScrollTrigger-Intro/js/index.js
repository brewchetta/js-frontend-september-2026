gsap.from('h2', {
    scrollTrigger: {
        trigger: 'h2',
        toggleActions: 'restart pause play reset',
//       onEnter onLeave onEnterBack onLeaveBack
        // markers: true,
        start: 'top 80%',
        end: 'bottom 20%',
        // element || screen
        scrub: 2
    },
    duration: 3,
    opacity: 0,
    scale: 0.2
})

// get all sections
const sections = document.querySelectorAll('section')

function isItEven(num) {
    return num % 2 === 0
}

// loop through all sections
for (let index = 0; index < sections.length; index++) {
    const currentSection = sections[index];

    // change X depending on if it's even or odd
    let x

    if (isItEven(index)) {
        x = -200
    } else {
        x = 200
    }

    // apply animation to each section
    gsap.from(currentSection, {
        duration: 2,
        x: x,
        opacity: 0,
        scrollTrigger: {
            trigger: currentSection,
            // trigger on individual section
            toggleActions: 'restart pause restart pause'
        }
    })
    
}
