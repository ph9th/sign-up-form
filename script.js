document.addEventListener('DOMContentLoaded', function () {
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('password-confirm');
    const message = document.getElementById('password-msg');

    function validatePassword() {
        if (password.value !== confirmPassword.value) {
            message.textContent = '*Passwords do not match';
            message.classList.remove("hidden");
        } else {
            message.classList.add('hidden');
            message.textContent = 'msg';
        }
    }

    password.addEventListener('input', validatePassword);
    confirmPassword.addEventListener('input', validatePassword);
});
