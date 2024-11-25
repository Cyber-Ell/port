
let headerNav = document.querySelector('.header-nav-2');
let fadeOut = document.querySelector('.fade-out1');
let rotateBtn = document.querySelector('.js-button');
let deg = true;

window.onscroll = function() {
    headerNav.style.transition = '.6s ease-in-out';
    if (window.scrollY > 700){
        headerNav.style.display = 'block';
        
    }else if (window.scrollY < 700){
        headerNav.style.display = 'none';
    };

};

document.querySelector('.js-button').addEventListener('click',() => {
    deg;
    rotateBtn.style.transition = '.5s ease-in-out';
    if (deg === true){
        rotateBtn.style.transform = 'rotate(90deg)';
        deg = false;
    } else if (deg === false) {
        rotateBtn.style.transform = 'rotate(0deg)';
        deg = true;
        
    }

console.log(deg)
})

console.log(rotateBtn);


const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){
            entry.target.classList.add('shown') }
        }
    )
})

const hiddenElements = document.querySelectorAll('.anima-fade-in');
hiddenElements.forEach((el) => observer.observe(el));

console.log(submitBtn)