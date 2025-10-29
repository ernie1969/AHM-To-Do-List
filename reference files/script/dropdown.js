/*  Author: AdHubManila
    Contact No: +63 0995 001 6415
    Email: adhubmanila@gmail.com
    Web URL: https://adhubmanila.onamaeweb.jp 
*/

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