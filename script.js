
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

    // On Scroll Nav Bar
    const nav = document.querySelector('.nav');
    const scrollNav = document.getElementById('nav_bar_onscroll');
    const navTop = nav.offsetTop + nav.offsetHeight;

    window.addEventListener('scroll', () => {
        if (window.scrollY > navTop) {
        scrollNav.style.top = '0';
        } else {
        scrollNav.style.top = '-84px';
        }
    });


    // Projects button scrolls to the featured works part (on scroll nav)
    document.getElementById('scroll_nav_proj_button').addEventListener('click', () => {
        document.getElementById('featured').scrollIntoView({ behavior: 'smooth' }); // Scrolls smoothly to the element with ID "myContent"
    });

    // Same as above but static nav
    document.getElementById('static_nav_proj_button').addEventListener('click', () => {
        document.getElementById('featured').scrollIntoView({ behavior: 'smooth' }); // Scrolls smoothly to the element with ID "myContent"
    });
});


