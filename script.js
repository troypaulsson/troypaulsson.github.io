
// Profile Photo Interactivity
let profileWrapper = document.querySelector(".profile_photo_wrapper");

profile_photo.addEventListener('mouseover', function() {
    profileWrapper.style.cursor = "pointer";
    profileWrapper.style.border = "1.5rem solid #3E7B27";    
});

profile_photo.addEventListener('mouseout', function() {
    profileWrapper.style.border = "1.5rem solid #123524";
    profileWrapper.style.cursor = "default";
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

    // On Scroll Nav Bar with mobile menu hiding
    const nav = document.querySelector('.nav');
    const scrollNav = document.getElementById('nav_bar_onscroll');
    const navTop = nav.offsetTop + nav.offsetHeight;

    const scrollMobileMenu = document.getElementById('mobile_menu');
    const staticMobileMenu = document.getElementById('mobile_menu_static');

    window.addEventListener('scroll', () => {
    if (window.scrollY > navTop) {
        scrollNav.style.top = '0';
        // hide static mobile menu if open
        staticMobileMenu?.classList.remove('show');
    } else {
        scrollNav.style.top = '-84px';
        // hide scroll mobile menu if open
        scrollMobileMenu?.classList.remove('show');
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


// Profile Photo Cycling
const defaultImage = './images/san_jose_photo_troy_cropped.png';
// List of alternate profile photos (not including the default)
const alternateImages = [
  './images/image_2.png',
  './images/image_3.png',
  './images/image_4.png',
  './images/image_5.png',
  './images/image_6.png',
  './images/image_7.png'
];

// Shuffle once on load
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffle(alternateImages);

let imageIndex = 0;
let inCycle = false;

profile_photo.addEventListener('click', function () {
  profile_photo.style.opacity = 0;

  setTimeout(() => {
    if (!inCycle) {
      profile_photo.setAttribute('src', alternateImages[imageIndex]);
      inCycle = true;
    } else {
      imageIndex++;

      if (imageIndex < alternateImages.length) {
        profile_photo.setAttribute('src', alternateImages[imageIndex]);
      } else {
        // Reached end of cycle — return to default and reset
        profile_photo.setAttribute('src', defaultImage);
        imageIndex = 0;
        inCycle = false;
        shuffle(alternateImages); // optional: re-shuffle each cycle
      }
    }

    profile_photo.style.opacity = 1;
  }, 300); // matches your CSS transition time (0.3s)
});

//Nav on smaller screens:
function setupHamburgerToggle(hamburgerId, menuId, projectBtnId) {
  const hamburger = document.getElementById(hamburgerId);
  const mobileMenu = document.getElementById(menuId);
  const projectBtn = document.getElementById(projectBtnId);

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('show');
    });
  }

  if (projectBtn) {
    projectBtn.addEventListener('click', () => {
      document.getElementById('featured').scrollIntoView({ behavior: 'smooth' });
      mobileMenu.classList.remove('show');
    });
  }
}

// Apply to both navs
setupHamburgerToggle('hamburger_menu', 'mobile_menu', 'mobile_proj_button');
setupHamburgerToggle('hamburger_menu_static', 'mobile_menu_static', 'mobile_proj_button_static');