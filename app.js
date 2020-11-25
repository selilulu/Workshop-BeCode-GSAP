// TUTORIAL ONE

// links
gsap.from('ul li', {
  delay: 0.4,
  y: 100,
  rotation: 400,
  opacity: 0,
  stagger: 0.2 // 0.1 seconds between when each ".box" element starts animating
});

// text
gsap.from('.body-text h1', 1.8, {
  delay: 1.3,
  opacity: 0,
  x: 600,
  ease: 'circ.out'
});

gsap.from('.body-text p', 1.8, {
  delay: 1.6,
  opacity: 0,
  x: 600,
  ease: 'circ.out'
});

gsap.from('.body-text button', 1.5, {
  delay: 2,
  opacity: 0,
  y: 200,
  ease: 'circ.out'
});

// planet
gsap.from('.planet-one img', 2, {
  delay: 2,
  opacity: 0,
  scale: 0.3,
  ease: 'back.out(1.7)'
});

gsap.from('.planet-two img', 3, {
  delay: 2.2,
  opacity: 0,
  scale: 0.3,
  ease: 'back.out(1.7)'
});

gsap.from('.planet-four img', 2, {
  delay: 2.6,
  opacity: 0,
  scale: 0.3,
  ease: 'back.out(1.7)'
});

// Tutorial two
const screenWidth = window.innerWidth;
const svgWidth = document.querySelector('.astronaut').offsetWidth;
const distance = screenWidth - svgWidth;

function moveAstronaut() {
  var tl = gsap.timeline({
    repeat: 0,
    defaults: { duration: 15, ease: 'none' },
  });
  tl.to("svg", {x: 800, y:-500});
};

gsap.set('#right-arm', {
  transformOrigin: "0% 50%",
  rotation: 10
})

function waving() {
  var tl = gsap.timeline({
    repeat: 11,
    defaults: { duration: 0.68 }
  })
  tl.add('arm')
    .to('#right-arm', {rotation: -10})
    .to('#right-arm', {rotation: 10}, 'arm+=0.68')
}

document.getElementById('explore').addEventListener('click', function(e) {
  console.log('yaaaaay');
  document.querySelector('.astronaut-container').style.display = "block";
  moveAstronaut();
  waving();
});