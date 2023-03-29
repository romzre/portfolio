gsap.registerPlugin(ScrollTrigger);

// const WidthQuote = window.innerWidth - gsap.getProperty(".quote", "width") 
// document.querySelector('.quote').style.left = WidthQuote+"px"
// if (window.matchMedia("min-width:600px")) {
// gsap.from(".quote", {
//     x: window.innerWidth  + gsap.getProperty(".quote", "width"),
//     duration: 5,
//     scrollTrigger: {
//         trigger: ".quote",
//         start: "bottom 100%",
//         end: "top 10%",
//         scrub: 15,
//         toggleActions: "restart none none none",
//     }
// })
// }
gsap.to(".box-scroll ", {
  opacity: 0,
  duration: .3,
  ease: "power4.inOut" ,
  scrollTrigger: {
    trigger: ".box-scroll",
    start: "top 70%",
    end: "top 50%",
    scrub: 5,
    toggleActions: "restart none none none",
}
})

const titleLetters = gsap.utils.toArray('.aboutTitleLetter');
titleLetters.forEach(titleLetter => {
    
    gsap.from(titleLetter, {
        duration: .3,
        y: 100,
        stagger: .2,
        ease: "power4.out",
        scrollTrigger: {
            trigger: titleLetter,
            start: "top 60%",
            end: "+=50px",
            scrub: 3,
            toggleActions: "restart none none none",
        }
    })
});

const AboutLetterH = gsap.utils.toArray('.LetterH3');
AboutLetterH.forEach(LetterH3 => {
    
    gsap.from(LetterH3, {
        duration: 2,
        y: 200,
        // stagger: .2,
        ease: "power4.out",
        scrollTrigger: {
            trigger: LetterH3,
            start: "top 80%",
            end: "+=150px",
            scrub: 7,
            toggleActions: "play resume none restart",
            //   onEnter , onLeave, onEnterBack , onLeaveBack
        }
    });
})

const quotesH4 = gsap.utils.toArray('.quotesH4');
quotesH4.forEach(quotesH4 => {
    
    gsap.from(quotesH4, {
        duration: 2,
        y: 200,
        // stagger: .2,
        ease: "power4.out",
        scrollTrigger: {
            trigger: quotesH4,
            start: "top 90%",
            end: "+=150px",
            scrub:7,
            toggleActions: "play resume none restart",
            //   onEnter , onLeave, onEnterBack , onLeaveBack
        }
    });
})


const containerImgs = gsap.utils.toArray('.containerImg');
containerImgs.forEach(containerImg => {
    
    gsap.from(containerImg, {
        duration: 1.5,
        x: -window.innerWidth,
        ease: "power4.out",
        scrollTrigger: {
            trigger: containerImg,
            start: "top 90%",
            end: "+=150px",
            scrub:3,
            toggleActions: "play resume none restart",
            //   onEnter , onLeave, onEnterBack , onLeaveBack
        }
    });
})

const Imgs = gsap.utils.toArray('.containerImg img');
Imgs.forEach(Img => {
    
    gsap.from(Img, {
        duration: 1,
        x: window.innerWidth + 2000,
        ease: "power5.out",
        scrollTrigger: {
            trigger: Img,
            start: "top 80%",
            end: "+=150px",
            scrub:2,
            toggleActions: "play resume none restart",
            //   onEnter , onLeave, onEnterBack , onLeaveBackme none restart",
            
        }
    })

})
const paragraphs = gsap.utils.toArray('.contAboutP');
paragraphs.forEach(para => {
    
    gsap.from(para, {
        duration: 1,
        opacity : 0,
        ease: "power5.out",
        scrollTrigger: {
            trigger: para,
            start: "top 70%",
            end: "+=150px",
            scrub:2,
            toggleActions: "play resume none restart",
            //   onEnter , onLeave, onEnterBack , onLeaveBackme none restart",
            
        }
    })

})

const slides = gsap.utils.toArray('.slide');

const heightSlide = window.innerWidth - gsap.getProperty(".slide", "height") 

slides.forEach(slide => {

    gsap.from(slide, {
        duration: 3,
        scaleY:0.5,
        transformOrigin: "-50% 100% -1000px",
        rotateX: 90,
        scrollTrigger: {
            trigger: slide,
            start: "0% 180%",
            toggleActions: "resume resume none none",
            //   onEnter , onLeave, onEnterBack , onLeaveBack 
            
        }
    })

})
