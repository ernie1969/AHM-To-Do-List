/*  Author: AdHubManila
    Contact No: +63 0995 001 6415
    Email: adhubmanila@gmail.com
    Web URL: https://adhubmanila.onamaeweb.jp 
*/


// Scroll to top Script
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


//     Dropdown Menu Script
const toggleBtn = document.querySelector('.toggle-btn')
const toggleBtnIcon = document.querySelector('.toggle-btn i')
const dropMenu = document.querySelector('.dropMenu')

toggleBtn.onclick = function () {
dropMenu.classList.toggle('open')
const isOpen = dropMenu.classList.contains('open')

toggleBtnIcon.classList = isOpen
? 'fa fa-close'
: 'fa fa-bars'
}


//      Slider Script    
let slideIndex = 0; 
let autoTimeout;

showSlides(slideIndex); 
startAutoAdvance(); 

function currentSlide(n) {
  clearTimeout(autoTimeout); // Stop the auto-advance when manually navigating
  slideIndex = n;            // Set the slide index to the dot's number (1, 2, 3, or 4)
  showSlides(slideIndex);    // Call the main engine to display the chosen slide
  startAutoAdvance();        // Restart the timer
}

// 2. The Main Engine (handles display logic and boundaries)
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slides");
  let dots = document.getElementsByClassName("dot");

  // Handle index wrapping (e.g., if you click next after the last slide)
  if (n > slides.length) { slideIndex = 1 } 
  if (n < 1) { slideIndex = slides.length }

  // Hiding Logic: Hide all slides and remove the 'active' class from all dots
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      dots[i].className = dots[i].className.replace(" active", "");
  }
  
  // Display Logic: Show the correct slide and set the 'active' class on the dot
  // We use slideIndex - 1 because JavaScript arrays start counting at 0.
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// 3. Function for the Automatic Cycle
function startAutoAdvance() {
  slideIndex++; 
  showSlides(slideIndex);
  
  // Set a new timeout and save the ID
  autoTimeout = setTimeout(startAutoAdvance, 10000); // Change image every 10 seconds
}


//     Accordion Script
var acc = document.getElementsByClassName("ahm-accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}


// script/scroll-reveal.js

document.addEventListener("DOMContentLoaded", function() {
  // 1. Select all the elements you want to animate
  // We select the Mission, Vision, and all Value items
  const revealElements = document.querySelectorAll('.ahm-header, .f-card, .ahm-card, .t-card');
  
  // 2. Define the callback function for the observer
  const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
          // Check if the element is currently visible in the viewport
          if (entry.isIntersecting) {
              // If visible, add the 'reveal' class to start the CSS animation
              entry.target.classList.add('reveal');
              
              // Stop observing this element once it has been revealed
              observer.unobserve(entry.target);
          }
      });
  };
  
  // 3. Define the observer options (when to trigger the callback)
  const observerOptions = {
      root: null, // use the viewport as the container
      rootMargin: '0px 0px -150px 0px', // Trigger 150px before the bottom edge of the screen
      threshold: 0.1 // Triggers when 10% of the item is visible
  };
  
  // 4. Create and start the Intersection Observer
  const observer = new IntersectionObserver(observerCallback, observerOptions);
  
  // 5. Tell the observer to watch all the selected elements
  revealElements.forEach(element => {
      observer.observe(element);
  });
  
  // Note: You can add staggered delays back into the CSS, 
  // but the simple reveal is usually cleaner and more reliable with JS control.
});


