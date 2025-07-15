// ============================
// JavaScript Code
// ============================

// Function to sanitize input fields
  function sanitizeInput(str) {
    return str.replace(/<[^>]*>?/gm, '')
              .replace(/&/g, "&amp;")
              .replace(/"/g, "&quot;")
              .replace(/'/g, "&#x27;")
              .replace(/</g, "&lt;")
              .replace(/>/g, "&gt;");
  }
// Event listener to the contact form and sanitize inputs on submit
  document.getElementById('contactForm').addEventListener('submit', function (e) {
    const form = e.target;
    form.name.value = sanitizeInput(form.name.value);
    form.email.value = sanitizeInput(form.email.value);
    form.subject.value = sanitizeInput(form.subject.value);
    form.message.value = sanitizeInput(form.message.value);
  });