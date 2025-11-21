const images = [
    "./image/photo-1471922694854-ff1b63b20054.jpg",
    "./image/p1.jpg",
    "./image/p2.jpg",
    "./image/p3.jpg"
];

let currentIndex = 0;
const hero = document.querySelector(".hero");

hero.style.backgroundImage =  `url(${images[currentIndex]})`;

setInterval(() =>{
    currentIndex = (currentIndex +1)% images.length;
    hero.style.backgroundImage = `url(${images[currentIndex]})`;
},5000);