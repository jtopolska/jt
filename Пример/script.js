const showMenuItem = document.querySelectorAll('.side-link img');
const itemText = document.querySelectorAll('.side-link li');

showMenuItem.forEach(item => {
    item.addEventListener('mouseover', () => {
        
            remove();
            item.classList.add('active');
        
    })
})

function remove() {
    showMenuItem.forEach(item => {
        item.classList.remove('active');
    })
}




// const showMenuHome = document.querySelector('.home img');
// const showMenuAbout = document.querySelector('.about img');
// const showMenuProject = document.querySelector('.project img');
// const showMenuCV = document.querySelector('.cv img');

// showMenuHome.addEventListener('mouseover', () => {
//     gsap.to(".home li", {x: 5, opacity: 1})
// });
// showMenuHome.addEventListener('mouseleave', () => {
//     gsap.to(".home li", {x: -5, opacity: 0})
// });

// showMenuAbout.addEventListener('mouseover', () => {
//         gsap.to(".about li", {x: 5, opacity: 1})
//     });
// showMenuAbout.addEventListener('mouseleave', () => {
//         gsap.to(".about li", {x: -5, opacity: 0})
//     });

// showMenuProject.addEventListener('mouseover', () => {
//         gsap.to(".project li", {x: 5, opacity: 1})
//     });
// showMenuProject.addEventListener('mouseleave', () => {
//         gsap.to(".project li", {x: -5, opacity: 0})
//     });

// showMenuCV.addEventListener('mouseover', () => {
//         gsap.to(".cv li", {x: 5, opacity: 1})
//     });
// showMenuCV.addEventListener('mouseleave', () => {
//         gsap.to(".cv li", {x: -5, opacity: 0})
//     });
