/*  Author: AdHubManila
    Contact No: +63 0995 001 6415
    Email: adhubmanila@gmail.com
    Web URL: https://adhubmanila.onamaeweb.jp 
*/

// Back to top button
const backToTop = document.getElementById("topBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 200) {
    backToTop.classList.add("show", "bounce"); // show + animate
  } else {
    backToTop.classList.remove("show", "bounce");
  }
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


/*      Dropdown Menu Script    */
const toggleBtn = document.querySelector('.toggle-btn')
const toggleBtnIcon = document.querySelector('.toggle-btn i')
const dropMenu = document.querySelector('.dropmenu')

toggleBtn.onclick = function () {
dropMenu.classList.toggle('open')
const isOpen = dropMenu.classList.contains('open')

toggleBtnIcon.classList = isOpen
? 'fa fa-close'
: 'fa fa-bars'
}

/*      Modal Script    */
function openModal() {
    document.getElementById("dwn-modal").style.display = "block";
  }

  function closeModal() {
    document.getElementById("dwn-modal").style.display = "none";
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("dwn-box");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementsByClassName("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }