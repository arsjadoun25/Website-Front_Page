 // Get the email and datetime elements
 var emailElement = document.getElementById("email");
//  var datetimeElement = document.getElementById("datetime");
 
//  // Function to format the date and time
//  function formatDateTime() {
//    var currentDate = new Date();
//    var options = { 
//      weekday: 'long', 
//      year: 'numeric', 
//      month: 'long', 
//      day: 'numeric', 
//      hour: 'numeric', 
//      minute: 'numeric' 
//    };
//    var formattedDateTime = currentDate.toLocaleDateString('en-US', options);
//    return formattedDateTime;
//  }
 
 // Update the email and datetime elements with current date and time
 emailElement.textContent = "example@gmail.com";
//  datetimeElement.textContent = formatDateTime();


// Dot Slider

const slideContainer = document.querySelector('.slide-container');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

let currentSlide = 0;

// Function to show the current slide and update the active dot
function showSlide(index) {
    const slideWidth = slides[index].offsetWidth;
    slideContainer.style.transform = `translateX(-${index * 106}%)`;

    dots.forEach((dot) => {
        dot.classList.remove('active');
    });
    dots[index].classList.add('active');
}

// Initial slide display
showSlide(currentSlide);

// Event listener for clicking on dots
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
    });
});