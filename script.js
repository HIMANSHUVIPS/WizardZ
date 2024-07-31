const tl = gsap.timeline();


tl.from('.nav_content h1,.nav_content h4, .nav_content button',{
    y:-20,
    opacity:0,
    duration:0.3,
    delay:0.6,
    // stagger:0.3
})
tl.from('nav img',{
    y:-20,
    opacity:0,
    rotate:360,
    duration:1,
    delay:0.6
},"-=1")

tl.from('.center_part1 h1',{
    x:-200,
    opacity:0,
    duration:0.2
});
tl.from(".center_part1 p",{
    x:-100,
    opacity:0,
    duration:0.2
});
tl.from(".center_part1 button",{
    y:-100,
    opacity:0,
    duration:0.3
});
tl.from(".center_part2 img",{
    x:500,
    opacity:0,
    duration:0.4
},"-=0.2");

gsap.from('.section1_bottom img', {
    opacity: 0,
    duration: 0.2,
    stagger: 0.2,
    scrollTrigger: {
        trigger: '.section1_bottom img',
        scroller: 'body',
        markers: false,
        start: 'top 95%',
        end:'top 60%',
        scrub: 2
    }
});
const tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:".section2",
        scroller:"body",
        markers:false,
        start:'top 25%',
        end:'10%',
        scrub:1
    }
});

tl2.from('.elem.line1.left',{
    x:-300,
    duration:0.1,
    opacity:0,
},"first")
tl2.from('.elem.line1.right ',{
    x:300,
    duration:0.1,
    opacity:0,
    
},"first")
tl2.from('.elem.line2.left',{
    x:-300,
    duration:0.2,
    opacity:0,
},'second')
tl2.from('.elem.line2.right ',{
    x:300,
    duration:0.2,
    opacity:0,
    
},'second')