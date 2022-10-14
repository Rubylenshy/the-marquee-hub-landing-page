const hamburger = document.querySelector('.hamburger')
const mobileNav = document.querySelector('.mobile-nav')


hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('active')
    mobileNav.classList.toggle('active')
})


// Animate On Scroll (AOS)

function scroll() {
    var reveals = document.querySelectorAll(".scroll");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
    //   console.log(reveals.length);
    //   console.log(windowHeight - 400)
      if (elementTop < windowHeight - 300) {
        reveals[i].classList.add("scrolled");
      }else {
        reveals[i].classList.remove("scrolled");
      }
    }
    
  }

window.addEventListener("scroll", scroll);