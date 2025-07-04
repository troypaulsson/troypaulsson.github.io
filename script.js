
// Profile Photo Interactivity
let profile_photo = document.getElementById("profile_photo");

profile_photo.addEventListener('mouseover', function() {
    profile_photo.style.cursor = "pointer";
    profile_photo.style.border = "1.5rem solid #3E7B27";    
});

profile_photo.addEventListener('mouseout', function() {
    profile_photo.style.border = "1.5rem solid #123524";
    profile_photo.style.cursor = "default";
});


// Page Load Stuff

// Nav bar, intro text, profile photo
document.addEventListener('DOMContentLoaded', function() {
    let navAppearElements = document.querySelectorAll(".static_nav");
    let introAppearElements = document.querySelectorAll(".intro_text");
    let profilePhoto = document.getElementById("profile_photo");

    console.log(profilePhoto)
    
    setTimeout(() => {
        profilePhoto.classList.add("static_nav_show");
    }, 700);

    navAppearElements.forEach((element,index) => {
        setTimeout(() => {
            element.classList.add("static_nav_show");
        }, (index+1)*150);
        
    });

    introAppearElements.forEach((element,index) => {
        setTimeout(() => {
            element.classList.add("static_nav_show");
        }, (index + 1)*200);
        
    });
});
