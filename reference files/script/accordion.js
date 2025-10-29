/*  Author: AdHubManila
    Contact No: +63 0995 001 6415
    Email: adhubmanila@gmail.com
    Web URL: https://adhubmanila.onamaeweb.jp 
*/

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