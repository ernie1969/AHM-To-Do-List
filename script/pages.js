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


//     Scroll Reveal Script

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


//     Filter Gallery Script
document.addEventListener('DOMContentLoaded', function() {
  // 1. Select the necessary elements
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.t-card');

  // 2. Add an event listener to each filter button
  filterButtons.forEach(button => {
      button.addEventListener('click', (e) => {
          e.preventDefault(); // Stop the link from jumping the page

          // Get the filter value (e.g., 'graphic-design' or 'all')
          const filterValue = e.target.getAttribute('data-filter');

          // 3. Update the 'active' state of the buttons
          filterButtons.forEach(btn => btn.classList.remove('active'));
          e.target.classList.add('active');

          // 4. Loop through all project cards and show/hide them
          projectCards.forEach(card => {
              const cardCategory = card.getAttribute('data-category');

              if (filterValue === 'all' || cardCategory === filterValue) {
                  // Show the card (using display: grid/block or clearing inline style)
                  card.style.display = 'figure'; // Assuming 'figure' or 'block' works with your grid
                  
                  // Since we used CSS Grid on .project-gallery, let's just clear the display
                  card.style.display = ''; 

              } else {
                  // Hide the card
                  card.style.display = 'none';
              }
          });
      });
  });
});  


