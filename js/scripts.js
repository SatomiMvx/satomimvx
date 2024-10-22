// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    // Get form elements
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const showRegisterLink = document.getElementById('showRegister');
    const showLoginLink = document.getElementById('showLogin');
    
    // Toggle between login and registration forms
    showRegisterLink.addEventListener('click', function() {
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    });

    showLoginLink.addEventListener('click', function() {
        registerForm.style.display = 'none';
        loginForm.style.display = 'block';
    });

    // Handle login
    document.getElementById('loginBtn').addEventListener('click', function() {
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;

        // Dummy login validation
        if (username === "user" && password === "password") {
            window.location.href = "interface.html"; // Redirect to main interface
        } else {
            alert("Invalid login credentials!");
        }
    });

    // Handle registration
    document.getElementById('registerBtn').addEventListener('click', function() {
        const username = document.getElementById('registerUsername').value;
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        // Simple validation for demonstration
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        if (username && email && password) {
            alert("Registration successful! You can now log in.");
            // Here, you would typically save this data to the server
            registerForm.style.display = 'none';
            loginForm.style.display = 'block';
        } else {
            alert("Please fill in all fields.");
        }
    });
});

