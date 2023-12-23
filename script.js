let tl = gsap.timeline();

tl.from("#nav img, #nav h3 , #nav button",{
        duration: 0.2,
        delay : 0.1,
        y : -100,
        stagger : 0.5,
        opacity : 0,
    })

tl.from(".main h1",{
    y: 150,
    opacity: 0,
    stagger: 0.3
})    

tl.from(".main>img",{
    scale : 0,
    opacity : 0
})

tl.from("h5",{
    opacity: 0,
    scale : 0,
})

tl.to("h5",{
    y : 20,
    repeat : -1,
    duration: 0.7,
    yoyo : true,   
})