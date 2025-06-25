
// Profile Photo Interactivity
let profile_photo = document.getElementById("profile_photo");

profile_photo.addEventListener('mouseover', function() {
    profile_photo.style.border = "1.5rem solid #3E7B27";
    profile_photo.style.cursor = "pointer";
});

profile_photo.addEventListener('mouseout', function() {
    profile_photo.style.border = "1.5rem solid #123524";
    profile_photo.style.cursor = "default";
});


// Page Load Stuff

// Nav bar
document.addEventListener('DOMContentLoaded', function() {
    let appearElements = document.querySelectorAll(".static_nav");

    appearElements.forEach((element,index) => {
        setTimeout(() => {
            element.classList.add("static_nav_show");
        }, index*200);
        
    });
});