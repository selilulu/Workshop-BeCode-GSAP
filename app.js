gsap.to(".planet-one img ", 10, {x:500, scale:0.5});
gsap.to(".planet-two img" , 50, {y:200, rotate:360 });
//gsap.to(".planet-three img" , 4, {y:100 ,ease:"bounce" });
gsap.fromTo(".planet-three img" , 4, { opacity:0 },{opacity:1 , x:800,y:-100 ,delay:2.5 });


document.querySelector("#explore").addEventListener("click", function(){

    document.querySelector(".astronaut").style.display = "block";

    gsap.fromTo("#Layer_1" , 4,{ x:800,y:-100 ,delay:2.5 });
    gsap.fromTo("#right-arm" , 4, { rotate:30});

})