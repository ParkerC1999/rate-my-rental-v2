// Intro Animation
const tl = gsap.timeline({defaults:{ease:'power1.out'}});

tl.to('.text', { y:'0%', duration:1, stagger:0.25 });
tl.to('.slider',{ x: '-100%', duration: 1, delay:0.5 });
tl.to('.intro', { x:'-100%', duration: 1 }, '-=1');
tl.fromTo('nav', {opacity: 0}, {opacity: 1, duration:1});
tl.fromTo('.big-text', {opacity: 0}, {opacity: 1, duration:1}, '-=1');
tl.fromTo('.big-text2', {opacity: 0}, {opacity: 1, duration:1}, '-=1');
// End of Intro Animation
// renters
let listItems = [...document.querySelectorAll('li')];

let options = {
    rootMargin: '-10%',
    threshold:0.0
}
let observer = new IntersectionObserver(showItem, options);
function showItem(entries) {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.children[0].classList.add('active')
        }
    })
}

listItems.forEach(item =>{
observer.observe(item);
})
