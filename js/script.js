let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navlist.classList.toggle('open');
};

const sr = ScrollReveal ({
	distance: '65px',
	duration: 2600,
	delay: 450,
	reset: true
});

sr.reveal('.hero-text', { delay: 200, origin: 'top' });
sr.reveal('.hero-text2', { delay: 300, origin: 'bottom' });
sr.reveal('.center', { delay: 200, origin: 'bottom' });
sr.reveal('.card', { delay: 200, origin: 'bottom' });
sr.reveal('.hero-img',{delay:450, origin:'top'});
sr.reveal('.icons',{delay:500, origin:'left'});
sr.reveal('.scroll-down',{delay:500, origin:'right'});


// Scroll hover on header

window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.style.background = 'rgba(0, 0, 0, 0.5)';
  } else {
    header.style.background = 'transparent';
  }
});





// Function to handle smooth scrolling
function smoothScrollToSection(event) {
  event.preventDefault(); // Prevent default anchor click behavior

  // Check if the up class is present
  if (this.classList.contains("up")) {
    // Scroll to the top of the page smoothly
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    // Get the target section element based on the href attribute of the anchor
    const targetSection = document.querySelector(this.getAttribute("href"));

    // Check if the target section exists
    if (targetSection) {
      // Scroll to the target section smoothly
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  }
}

function handleScroll() {
  const scrollDownButton = document.querySelector(".scroll-down a");

  // Show/hide the scroll-down button based on the scroll position
  if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
    scrollDownButton.parentElement.classList.add("up"); // Add "up" class to parent element
    scrollDownButton.classList.add("hide");
  } else {
    scrollDownButton.parentElement.classList.remove("up"); // Remove "up" class from parent element
    scrollDownButton.classList.remove("hide");
  }
}

// Add event listener to the scroll-down button
const scrollDownButton = document.querySelector(".scroll-down a");
scrollDownButton.addEventListener("click", smoothScrollToSection);

// Add event listener to handle scrolling and button visibility
window.addEventListener("scroll", handleScroll);



// Function to handle smooth scrolling to the "joinus" section
function smoothScrollToJoinUs(event) {
  event.preventDefault(); // Prevent default anchor click behavior

  const joinUsSection = document.getElementById("joinus");

  // Check if the target section exists
  if (joinUsSection) {
    // Scroll to the "joinus" section smoothly
    joinUsSection.scrollIntoView({ behavior: "smooth" });
  }
}

// Add event listener to the link/button that triggers the smooth scroll
const scrollToJoinUsButton = document.getElementById("scrollToJoinUs");
scrollToJoinUsButton.addEventListener("click", smoothScrollToJoinUs);



