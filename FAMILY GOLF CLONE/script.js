var crsr = document.querySelector("#cursor")
var blur = document.querySelector("#cursor-blur")

document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+30 + "px"
    crsr.style.top = dets.y + "px"
    blur.style.left = dets.x-200+"px"
    blur.style.top = dets.y-200+"px"
})

var h4all = document.querySelectorAll("#nav, #fot2, #fot3 > h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 3.5
        crsr.style.border = "0.5px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid yellow"
        crsr.style.backgroundColor = "yellow"
    })
})
var fh4all = document.querySelectorAll("#fot4-a")
fh4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 3.5
        crsr.style.border = "0.5px solid #fff"
        crsr.style.backgroundColor = "transparent"
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1
        crsr.style.border = "0px solid yellow"
        crsr.style.backgroundColor = "yellow"
    })
})

gsap.to("#nav",{
    backgroundColor : "black",
    height:"90px",
    duration : 0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"Top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("#main",{
    backgroundColor: "black",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -25%",
        end:"top -70%",
        scrub:2
    }
})

gsap.from("#about-us",{
    y:50,
    opacity:0,
    duration:1.5,
    scrollTrigger:{
        trigger: "#about-us",
        scroller: "body",
        // markers: true,
        start: "top 60%",
        end: "top 50%",
        scrub: 3
    }
})
gsap.from(".card",{
    scale: 0.8,
    opacity:0,
    // delay: 1,
    duration:1,
    scrollTrigger:{
        trigger: ".card",
        scroller: "body",
        // markers: true,
        start: "top 80%",
        end: "top 75%",
        scrub: 3
    }
})
gsap.from("#col1",{
    y:-70,
    x:-70,
    duration:1,
    scrollTrigger:{
        trigger: "#col1",
        scroller: "body",
        // markers: true,
        start: "top 60%",
        end: "top 50%",
        scrub: 4
    }
})
gsap.from("#col2",{
    y:70,
    x:70,
    duration:1,
    scrollTrigger:{
        trigger: "#col1",
        scroller: "body",
        // markers: true,
        start: "top 75%",
        end: "top 65%",
        scrub: 4
    }
})
gsap.to(".page-last-big-h",{
    y:-15,
    duration:0.5,
    scrollTrigger:{
        trigger: ".page-last-big-h",
        scroller: "body",
        // markers: true,
        start: "top 85%",
        end: "top 80%",
        scrub: 1,
    }
})