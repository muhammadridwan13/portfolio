// navbar fixed
window.onscroll = function () {
    const header = document.querySelector('header')
    const fixedNav = header.offsetTop

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed')
    } else {
        header.classList.remove('navbar-fixed')
    }
}

// hamburger

const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu')

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// link blog
const notAvailable = document.querySelector('#button')
notAvailable.addEventListener('click', function() {
    console.log("tombol di klik")
    alert("Ridwan belum membuat sebuah blog")
})

// portfolio [3]
const eCommerce = document.querySelector('#eCommerce') 

eCommerce.addEventListener('click', function() {
    alert("Mohon maaf website yang akan anda kunjungi belum sepenuhnya selesai/sempurna.")
})
