// script.js
document.addEventListener("DOMContentLoaded", function() {
    const mamelucosLink = document.querySelector("a[href='Mamelucos.html']");
    const mamelucosSubmenu = document.getElementById("mamelucos-submenu");

    mamelucosLink.addEventListener("click", function(event) {
        event.preventDefault(); // Evitar que el enlace redireccione
        
        if (mamelucosSubmenu.style.display === "none") {
            mamelucosSubmenu.style.display = "block";
        } else {
            mamelucosSubmenu.style.display = "none";
        }
    });
});
