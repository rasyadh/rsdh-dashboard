document.addEventListener('DOMContentLoaded', () => {
    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
        // Add a click event on each of them
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {
                // Get the target from the "data-target" attribute
                const target = el.dataset.target;
                const $target = document.getElementById(target);
                // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');
            });
        });
    }
});

function setTabLogin(event, tabName) {
    for (f of $('.form')) {
        f.style.display = 'none';
    }
    for (t of $('.tab')) {
        t.className = t.className.replace(' is-active', '');
    }
    $('#' + tabName).show();
    event.currentTarget.className += ' is-active';
}

function login(event) {
    event.preventDefault();
    let email = document.querySelector('#email');
    let password = document.querySelector('#password');

    if (email.value != '' && password.value != '') {
        window.open('index.html', '_self');
    }
    else {
        if (email.value == '') {
            email.classList.add('is-danger');
            document.querySelector('#field-email').innerHTML += '<p class="help is-danger">This email cannot be empty!</p>';
        }
        if (password.value == '') {
            password.classList.add('is-danger');
            document.querySelector('#field-password').innerHTML += '<p class="help is-danger">This password cannot be empty!</p>';
        }
    }
}

function register(event) {
    event.preventDefault();
    let email = document.querySelector('#emailRegister');
    let password = document.querySelector('#passwordRegister');
    let confirmPassword = document.querySelector('#confirmPassword');

    if (email.value != '' && password.value != '' && confirmPassword.value != '') {
        alert('User registered.');
        window.open('login.html', '_self');
    }
    else {
        if (email.value == '') {
            email.classList.add('is-danger');
            document.querySelector('#field-email-register').innerHTML += '<p class="help is-danger">This email cannot be empty!</p>';
        }
        if (password.value == '') {
            password.classList.add('is-danger');
            document.querySelector('#field-password-register').innerHTML += '<p class="help is-danger">This password cannot be empty!</p>';
        }
        if (confirmPassword.value == '') {
            confirmPassword.classList.add('is-danger');
            document.querySelector('#field-confirm-password').innerHTML += '<p class="help is-danger">This confirm password cannot be empty!</p>';
        }
    }
}

function forgotPassword(event) {
    event.preventDefault();
    let email = document.querySelector('#email');

    if (email.value != '') {
        alert('We just send link to your email to reset your password.');
        window.open('login.html', '_self');
    }
    else {
        if (email.value == '') {
            email.classList.add('is-danger');
            document.querySelector('#field-email').innerHTML += '<p class="help is-danger">This email cannot be empty!</p>';
        }
    }
}