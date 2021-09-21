ScrollReveal().reveal('.card-1', { delay: 500 })
ScrollReveal().reveal('.footer', { delay: 500 })
ScrollReveal().reveal('.carousel', { delay: 500 })
ScrollReveal().reveal('.clients', { delay: 500 })
// When the user clicks on the button, toggle between hiding and showing the dropdown content
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}
//close the dropdown if the user clicks outside of it 

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i=0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('shows')) {
                openDropdown.classList.remove('show')
            }
        }
    }
}