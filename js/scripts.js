document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
    const showRegisterLink = document.getElementById('showRegister');
    const showLoginLink = document.getElementById('showLogin');
    const loginBtn = document.getElementById('loginBtn');
    const registerBtn = document.getElementById('registerBtn');

    // Toggle between login and register forms
    showRegisterLink.addEventListener('click', function(e) {
        e.preventDefault();
        loginForm.style.display = 'none';
        registerForm.style.display = 'block';
    });

    showLoginLink.addEventListener('click', function(e) {
        e.preventDefault();
        registerForm.style.display = 'none';
        loginForm.style.display = 'block';
    });

    // Register button functionality
    registerBtn.addEventListener('click', function(e) {
        e.preventDefault();
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

        // Save registered user data to localStorage (for simulation purposes)
        const user = {
            username: username,
            email: email,
            password: password
        };
        localStorage.setItem('user', JSON.stringify(user));
        console.log('User registered:', user); // Debugging log
        alert('Registration successful!');
        registerForm.style.display = 'none';
        loginForm.style.display = 'block'; // Go back to login form after successful registration
    });

    // Login button functionality
    loginBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;
    
        if (username === '' || password === '') {
            alert('Please fill in both fields');
            return;
        }
    
        // Fetch the stored user data from localStorage
        const storedUser = JSON.parse(localStorage.getItem('user'));
    
        if (storedUser && storedUser.username === username && storedUser.password === password) {
            alert('Login successful!');
            
            // Redirect to the next page (e.g., dashboard.html)
            window.location.href = 'interface.html';
        } else {
            alert('Invalid login credentials!');
        }
    });
    
