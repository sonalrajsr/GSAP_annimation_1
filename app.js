// making the variable which will store the all documents
const nav_buttons = document.querySelectorAll('nav a')
const nav_img = document.querySelectorAll('nav img')
const title = document.querySelector('h1')
const verticalLine = document.querySelector('.middle-line')
const grapesLogo = document.querySelector('.home-content img')
const btn_discover = document.querySelector('.home-content button')


const gsap_timeline = gsap.timeline();

gsap_timeline
.from(title, {autoAlpha: 0, y: -50, duration: 1})
.to(verticalLine, {height: 200}, '-=0.3')
.from(grapesLogo, {autoAlpha :0, y: -50,}, "-=.2")
.from(btn_discover, {autoAlpha :0, y: -50,}, "-=.2")
.from(nav_buttons, {autoAlpha : 0, y:-20, duration: 1, stagger: 0.1})
.from(nav_img, {autoAlpha : 0, y: -20, stagger : 0.1})
