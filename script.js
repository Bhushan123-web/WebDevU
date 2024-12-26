//  // Select the button and message elements
//  const getStartedBtn = document.getElementById("getStartedBtn");
//  const messageDiv = document.getElementById("message");

//  // Add click event listener
//  getStartedBtn.addEventListener("click", function () {
//      // Add animation to the button
//      getStartedBtn.textContent = "Starting...";
//      getStartedBtn.style.transition = "all 0.3s ease";
//      getStartedBtn.style.transform = "scale(1.2)";
//      getStartedBtn.style.backgroundColor = "#2ecc71"; // Change to green

//      // Show message after a delay
//      setTimeout(() => {
//          getStartedBtn.textContent = "Started";
//          getStartedBtn.style.transform = "scale(1)";
//          getStartedBtn.style.backgroundColor = "#3498db"; // Reset to blue
//          messageDiv.classList.add("visible");
//      }, 1000); // Delay for 1 second
//  });

 const carousel = document.getElementById("carousel");
 const indicators = document.querySelectorAll(".indicator");
 const feedbackCards = document.querySelectorAll(".feedback-card");
 let currentIndex = 0;

 // Function to update the carousel's position
 function updateCarousel() {
     const offset = -currentIndex * 100 / feedbackCards.length; // Calculate offset percentage
     carousel.style.transform = `translateX(${offset}%)`;

     // Update active indicator
     indicators.forEach((indicator, index) => {
         indicator.classList.toggle("active", index === currentIndex);
     });
 }

 // Function to slide to the next card
 function nextCard() {
     currentIndex = (currentIndex + 1) % feedbackCards.length; // Loop back to the first card
     updateCarousel();
 }

 // Automatically slide every 3 seconds
 setInterval(nextCard, 3000); // Adjust timing here (e.g., 3000ms = 3 seconds)


 document.getElementById("feedbackForm").addEventListener("submit", function (e) {
     e.preventDefault(); // Prevent the default form submission behavior

     const submitButton = document.getElementById("submitButton");
     const message = document.getElementById("submittedMessage");

     // Add loading class to the submit button
     submitButton.classList.add("loading");
     submitButton.disabled = true;

     // Simulate a delay for the form submission (e.g., saving data to a server)
     setTimeout(() => {
         // Show the submitted message
         message.style.display = "block";

         // Clear form fields
         document.getElementById("name").value = "";
         document.getElementById("email").value = "";
         document.querySelector(".message1").value = "";

         // Remove loading class and enable the button
         submitButton.classList.remove("loading");
         submitButton.disabled = false;
     }, 2000); // Simulating a 2-second delay
 });
 const menuToggle = document.querySelector('.menu-toggle');
 const mobileMenu = document.querySelector('.mobile-menu');

 menuToggle.addEventListener('click', () => {
   menuToggle.classList.toggle('active');
   mobileMenu.classList.toggle('show');
 });


 const cards = document.querySelectorAll('.step-and-card');

 const revealCards = () => {
   const triggerHeight = window.innerHeight * 0.8;
   cards.forEach(card => {
     const cardTop = card.getBoundingClientRect().top;

     if (cardTop < triggerHeight) {
       card.classList.add('show');
     } else {
       card.classList.remove('show');
     }
   });
 };

 window.addEventListener('scroll', revealCards);
 document.addEventListener('DOMContentLoaded', revealCards);

 const cards1 = document.querySelectorAll('.step-and-card1');

 const revealCards1 = () => {
   const triggerHeight1 = window.innerHeight * 0.9;
   cards1.forEach(card1 => {
     const cardbottom = card1.getBoundingClientRect().bottom;

     if (cardbottom < triggerHeight1) {
       card1.classList.add('show1');
     } else {
       card1.classList.remove('show1');
     }
   });
 };

 window.addEventListener('scroll', revealCards1);
 document.addEventListener('DOMContentLoaded', revealCards1);

 document.addEventListener("scroll", () => {
  const aboutSection = document.querySelector("#about-us");
  const position = aboutSection.getBoundingClientRect();

  if (position.top < window.innerHeight && position.bottom >= 0) {
    aboutSection.classList.add("visible");
  }
});

const backgrounds = document.querySelectorAll('.carousel-bg');
    let current = 0;

    function slideShow() {
      backgrounds[current].classList.add('hidden');
      current = (current + 1) % backgrounds.length;
      backgrounds[current].classList.remove('hidden');
    }

    setInterval(slideShow, 5000);

document.addEventListener('DOMContentLoaded', () => {
      const formContainer = document.getElementById('auth-form-container');
      const closeButton = document.getElementById('close-form');
      const form = document.getElementById('auth-form');

      // Show the form after 10 seconds
      setTimeout(() => {
        formContainer.style.display = 'flex'; // Make the form visible
      }, 5000);

      // Close the form when the close button is clicked
      closeButton.addEventListener('click', () => {
        formContainer.style.display = 'none'; // Hide the form
      });

      // Prevent default form submission and hide the form
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for submitting your details!');
        formContainer.style.display = 'none';
      });
});

// Placement for carousel2
const carousel2 = document.querySelector('.carousel2'); // Reference to the second carousel container
const items1 = document.querySelectorAll('.carousel2-item'); // Select all items1 in the second carousel
const totalItems1 = items1.length;
let currentIndex2 = 0;
const slideInterval1 = 3000; // 3 seconds

// Get the width of a carousel item dynamically
const getItemWidth1 = () => items1[0].offsetWidth; 

// Function to move the carousel to the next slide
const moveSlide1 = () => {
    currentIndex2 = (currentIndex2 + 1) % totalItems1; // Loop the index
    updateCarousel1();
};

// Function to update the carousel position
const updateCarousel1 = () => {
    const itemWidth1 = getItemWidth1();  // Get dynamic item width
    carousel2.style.transform = `translateX(${-currentIndex2 * itemWidth1}px)`; // Correct reference to carousel2
};

// Automatically move the carousel every few seconds
setInterval(moveSlide1, slideInterval1);
