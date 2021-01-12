const flightPath = {
    curviness:1.25,//describes the straightness
    autoRotate: true,
    values:[
        {x:100 ,y:-20 },
        // {x:300 ,y:10 },
        // {x:500 ,y:100 },
        // {x:750 ,y:-100 },
        // {x:350 ,y:-50 },
        // {x:600, y:100},
        // {x:700, y:0},
       
        {x:window.innerWidth, y:-350},

    ],

}

const tween = new TimelineLite();
tween.add(
    TweenLite.to('.rocket',5,
    
    {
        bezier:flightPath,
        ease: Power1.easeInOut
    }
    
    )
)

const controller = new ScrollMagic.Controller()


const scene = new ScrollMagic.Scene({
    triggerElement: '.animation',
    duration:500,
    triggerHook:0

})
.setTween(tween)
// .addIndicators()
.setPin(".animation")
.addTo(controller);



