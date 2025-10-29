/*  Author: AdHubManila
    Contact No: +63 0995 001 6415
    Email: adhubmanila@gmail.com
    Web URL: https://adhubmanila.hstn.me  
*/

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



