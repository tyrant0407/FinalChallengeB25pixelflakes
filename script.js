function page1 (){
    const tl = gsap.timeline({
        scrollTrigger:{
            trigger:".main",
            scroller:"body",
            // markers:true,
            start:"top top",
            end:"100% 60%",
            scrub:1.2,
         
          }
    })
    tl.to(".main-text h1",{
        opacity:0,
        scale:0.8,
    },"opa")
    tl.to(".texticon",{
        opacity:0,
        scale:0.8,
        x:20,
    },"opa")
    tl.to(".logo1,.nav-inner",{
        opacity:0,
        duration:0.1,
    },"opa")
    tl.to(".icon",{
        display: "initial",
        opacity:1,
        duration:0.1,
    },"opa")
}
function animateSpans() {
    const spans = document.querySelectorAll(".text h1 span span");
    
    gsap.to(spans, {
        yPercent: -200,  
        duration: 3, 
        // delay:2,    
        ease: "linear",  
        repeat: -1,      
    });
}
function page3(){
    const tl = gsap.timeline({
        scrollTrigger:{
            trigger:".page3-inside",
            scroller:"body",
            markers:true,
            start:"-10% top",
            end:"100% 60%",
            scrub:1.2,
         
          }
    })

    tl.to(".image1 img ,.image2 img",{
        scale:1.2,
    })
   
}

animateSpans();
page1 ();
page3();