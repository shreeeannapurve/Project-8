let tl = gsap.timeline({
    repeat: -1,
});


tl.to('.imagecontainer',{
    ease: Expo.easeInOut,
    width: "100%",
    duration: 2,
    stagger: 2,
    top: 0,
},"a")

.to(".text h1",{
    ease: Expo.easeInOut,
    stagger: 2,
    left:0
},"a")

.to(".text h1",{
    delay: 2,
    ease: Expo.easeInOut,
    stagger: 2,
    left:"100%"
},"a")

.to(".paragraph p",{
    ease: Expo.easeInOut,
    stagger: 2,
    top:0
},"a")

.to(".paragraph p",{
    delay:2,
    ease: Expo.easeInOut,
    stagger: 2,
    left:"100%",
},"a")


