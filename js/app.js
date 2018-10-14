$(document).ready(function () {
    // Check for click events on the navbar burger icon
    $('.navbar-burger').click(function () {
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $('.navbar-burger').toggleClass('is-active');
        $('.navbar-menu').toggleClass('is-active');
    });

    $('#toggle-sidebar').click(() => {
        let sidebar = $('.main-sidebar');
        let navbar = $('.main-navbar');
        let main = $('.main-wrapper');
        let icons = $('.main-sidebar .sidebar-inner .icon-menu li a');
        let isActive = $('.icon-menu .is-active');

        if (sidebar.hasClass('is-active')) {
            sidebar.width('0px');
            icons.hide();
            isActive.css({'border-right': '0'});
            navbar.width('100%');
            navbar.css({'margin-left': '0px'});
            main.width('auto');
            main.css({'margin': '60px 0 0 0'});
            sidebar.removeClass('is-active');
        }
        else {
            navbar.width('calc(100% - 60px)');
            navbar.css({'margin-left': '60px'});
            main.width('calc(100% - 60px)');
            main.css({'margin': '60px 0 0 60px'});
            sidebar.width('60px');
            icons.show();
            isActive.css({'border-right': '2px solid #0023FF'});
            sidebar.addClass('is-active');
        }
    });
});

function setTabLogin(event, tabName) {
    for (form of $('.form')) {
        form.style.display = 'none';
    }
    for (tab of $('.tab')) {
        tab.className = tab.className.replace(' is-active', '');
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
    let name = document.querySelector('#nameRegister');
    let email = document.querySelector('#emailRegister');
    let password = document.querySelector('#passwordRegister');
    let confirmPassword = document.querySelector('#confirmPassword');

    if (name.value != '' && email.value != '' && password.value != '' && confirmPassword.value != '') {
        alert('User registered.');
        window.open('login.html', '_self');
    }
    else {
        if (name.value == '') {
            name.classList.add('is-danger');
            document.querySelector('#field-name').innerHTML += '<p class="help is-danger">This name cannot be empty!</p>';
        }
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

function uploadFile() {
    let file = document.querySelector('#cover');
    if (file.files.length > 0) {
        document.querySelector('#file-name').innerHTML = file.files[0].name;
    }
}