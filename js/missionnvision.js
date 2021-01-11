const flightPath = {
    curviness:1.25,//describes the straightness
    autoRotate: true,
    values:[
        {x:100 ,y:-100 },
        {x:300, y:100},
        {x:-100,y:-50},
        {
            x:-50, y:200
        }
        

    ],

}

const tween = new TimelineLite();
tween.add(
    TweenLite.to('.rocket',4,
    
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