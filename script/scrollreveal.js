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