document.getElementById("reset-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let emailOrPhone = document.getElementById("emailOrPhone").value;

    if (emailOrPhone.trim() === "") {
        alert("يرجى إدخال بريدك الإلكتروني أو رقم هاتفك.");
        return;
    }

    alert("تم إرسال رمز التحقق إلى " + emailOrPhone);
    window.location.href = "verify-code.html";
});