
document.addEventListener('DOMContentLoaded', () => {
    const togglerMenuEl = document.querySelector('.toggler-menu');
    const linkEl = document.querySelector('.link');
    
    togglerMenuEl.addEventListener('click', () => {
        linkEl.classList.toggle('dropdown_menu');
    });
    
});

// function toggleFranchisecontainer(){
//     window.location.href = "franchise.html";
//     window.open("franchise.html", "_blank");
// }

// function navgateToContact(){
//     window.location.href = "index.html#contact";
// }


// // franchise.html navigate section
// // function toggleFranchisecontainer() {
// //     if (window.matchMedia("(max-width: 700px)").matches) {
// //         // If the screen width is 600px or less, open in a new tab
// //         window.open("franchise.html", "_blank");
// //     } else {
// //         // Otherwise, redirect in the same tab
// //         window.location.href = "franchise.html";
// //     }
// // }

// document.querySelector(".partnerbtn").addEventListener("click", toggleFranchisecontainer);
// document.querySelector(".partnerbtn").addEventListener("touchstart", toggleFranchisecontainer);

// document.querySelector(".requestBtn").addEventListener("click", navgateToContact);
// document.querySelector(".requestBtn").addEventListener("touchstart", navgateToContact);


 