
// Profile Photo Interactivity
const wrapper = document.querySelector('.profile_photo_wrapper');

wrapper.addEventListener('mouseover', function () {
  wrapper.style.border = "1.5rem solid #3E7B27";
  wrapper.style.cursor = "pointer";
});

wrapper.addEventListener('mouseout', function () {
  wrapper.style.border = "1.5rem solid #123524";
  wrapper.style.cursor = "default";
});

// Page Load Stuff

// Nav bar, intro text, profile photo
document.addEventListener('DOMContentLoaded', function() {
    let navAppearElements = document.querySelectorAll(".static_nav");
    let introAppearElements = document.querySelectorAll(".intro_text");
    const profileWrapper = document.querySelector(".profile_photo_wrapper"); // NEW
    const profilePhoto = document.querySelector(".p_photo");

    console.log(profilePhoto)
    
      // Fade in wrapper (border + image)
    setTimeout(() => {
        profileWrapper.classList.add("static_nav_show"); // fade in wrapper
    }, 700);

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
const alternateImages = [
  './images/image_2.png',
  './images/image_3.png',
  './images/image_4.png',
  './images/image_5.png',
  './images/image_6.png',
  './images/image_7.png'
];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffle(alternateImages);

let imageIndex = 0;
let inCycle = false;

function crossfadeToNewImage(newSrc) {
  const newImg = document.createElement("img");
  newImg.src = newSrc;
  newImg.className = "p_photo";
  newImg.style.opacity = 0;

  wrapper.appendChild(newImg);

  // Fade-in
  requestAnimationFrame(() => {
    newImg.style.opacity = 1;
  });

  // Remove old image after transition
  setTimeout(() => {
    const images = wrapper.querySelectorAll(".p_photo");
    if (images.length > 1) wrapper.removeChild(images[0]);
  }, 400);
}

wrapper.addEventListener("click", () => {
  let newSrc;
  if (!inCycle) {
    newSrc = alternateImages[imageIndex];
    inCycle = true;
  } else {
    imageIndex++;
    if (imageIndex < alternateImages.length) {
      newSrc = alternateImages[imageIndex];
    } else {
      newSrc = defaultImage;
      imageIndex = 0;
      inCycle = false;
      shuffle(alternateImages);
    }
  }

  crossfadeToNewImage(newSrc);
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