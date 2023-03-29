AOS.init();
let tl = gsap.timeline()
tl.from('.letterFN', {
    duration: .3,
    y: 100,
    stagger: .1,
    ease: "power4.out",
  })
tl.from('.letterLN', {
  duration: .7,
  y: 100,
  stagger: .1,
  ease: "power4.out",
}, "=-.4")

tl.from('.letterBQ', {
    duration: 1,
    y: 100,
    stagger: {
        grid: "auto",
        from: "random",
        axis: "x",
        ease: "power3.inOut",
        amount: .3
    },
    ease: "power4.out",
  }, "=-.8")
tl.from('.letterLQ', {
  duration: 1,
  y: 100,
  stagger: {
    grid: "auto",
    from: "random",
    axis: "x",
    ease: "power3.inOut",
    amount: .2
},
  ease: "power4.out",
}, "=-1")
tl.from('.resume', {
    duration: .7,
    ease: "power4.inOut",
    x: -window.innerWidth,
}, "=-.5")
tl.from('.circle', {
  duration: 4.,
  opacity: 0,
})


