document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm');
  
  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Simple validation (optional, as HTML5 required attributes are used)
    const formData = new FormData(form);
    const firstName = formData.get('firstName');
    const lastName = formData.get('lastName');
    const email = formData.get('email');
    const phone = formData.get('phone');
    const message = formData.get('message');
    const schedule = formData.get('schedule');

    if (!firstName || !lastName || !email || !phone || !message || !schedule) {
      alert('Please fill in all required fields.');
      return;
    }

    // Display the thank you popup
    const popup = document.getElementById('popup');
    popup.style.display = 'block';  // Make the popup visible
    popup.classList.remove('fade-out');
    popup.classList.add('fade-in');

    // Reset the form after showing the popup
    form.reset();
  });
});

// Function to close the thank you popup
function closePopup() {
  const popup = document.getElementById('popup');
  popup.classList.remove('fade-in');
  popup.classList.add('fade-out');
  
  // Hide the popup after the fade-out animation
  setTimeout(() => {
    popup.style.display = 'none';
  }, 500); // Match this timing with the CSS transition
}

// Call button functionality
document.getElementById("callButton").addEventListener("click", function () {
  window.location.href = "tel:+919178898880"; // Replace with the desired phone number
});
