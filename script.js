gsap.registerPlugin(ScrollTrigger)


// gsap.from("#nav img, #nav h3 , #nav button",{
//     duration: 0.2,
//     delay : 0.1,
//     y : -200,
//     stagger : 0.5,
//     opacity : 0,
// })

let tl = gsap.timeline();

tl.from("#nav img, #nav h3 , #nav button",{
        duration: 0.2,
        delay : 0.1,
        y : -200,
        stagger : 0.5,
        opacity : 0,
    })

tl.from(".main h1",{
    y: -15,
    opacity: 0
})    

tl.from("#left-pic",{
    opacity: 0,
    yoyo:true,
    y : 100,
})