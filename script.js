// ============================
// JavaScript Boilerplate
// ============================

// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
  
    // Initialize app
    initApp();
  });
  
  // ========== App Initialization ==========
  function initApp() {
    // Example: Attach events, fetch data, etc.
    setupEventListeners();
    // fetchData(); // Example function if you plan to use APIs
  }
  
  // ========== Event Listeners ==========
  function setupEventListeners() {
    const button = document.getElementById('myButton');
  
    if (button) {
      button.addEventListener('click', () => {
        alert('Button clicked!');
      });
    }
  }
  
  // ========== Example Utility Function ==========
  function greetUser(name = 'Guest') {
    console.log(`Hello, ${name}!`);
  }
  
  // Uncomment to test
  // greetUser('Jane');
  