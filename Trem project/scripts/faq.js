// Simple form validation
document.getElementById("contactForm").addEventListener("submit", function (e) {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !message) {
    e.preventDefault();
    alert("Please fill in all required fields (Name, Email, Message)");
  }

  // Additional validation could be added here
});

// Enhance FAQ accordion behavior
document.querySelectorAll(".faq-item").forEach((item) => {
  item.addEventListener("toggle", function () {
    if (this.open) {
      // Close other open items if desired
      document.querySelectorAll(".faq-item").forEach((otherItem) => {
        if (otherItem !== this && otherItem.open) {
          otherItem.open = false;
        }
      });
    }
  });
});
