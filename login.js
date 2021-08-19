document.getElementById('submit-button').addEventListener('click', function () {
    //get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    //get user password
    const userPassword = document.getElementById('user-password');


    const passwordField = userPassword.value;

    if (userEmail == 'rasha2021@gmail.com' && passwordField == 'secret') {

        window.location.href = 'banking.html';
    }
})
