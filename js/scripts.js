document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const showRegisterLink = document.getElementById('showRegister');
    const showLoginLink = document.getElementById('showLogin');
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');

    // Toggle between login and register forms
    showRegisterLink.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default link behavior
        loginForm.style.display = 'none';
        registerForm.style.display = 'block'; // Show register form
    });

    showLoginLink.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default link behavior
        registerForm.style.display = 'none';
        loginForm.style.display = 'block'; // Show login form
    });

    // Login button functionality
    loginBtn.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent form from submitting
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;

        if (username === '' || password === '') {
            alert('Please fill in both fields');
            return;
        }

        // Add your logic for login here (e.g., API call)
        console.log('Logging in with', username, password);
        alert('Login successful!');
    });

    // Register button functionality
    registerBtn.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent form from submitting
        const username = document.getElementById('registerUsername').value;
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;
        const confirmPassword = document.getElementById('confirmPassword').value;

        if (username === '' || email === '' || password === '' || confirmPassword === '') {
            alert('Please fill in all fields');
            return;
        }

        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }

        // Add your logic for registering here (e.g., API call)
        console.log('Registering with', username, email, password);
        alert('Registration successful!');
    });
});
