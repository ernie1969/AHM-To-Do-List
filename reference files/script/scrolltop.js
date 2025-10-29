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

