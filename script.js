document.addEventListener('DOMContentLoaded', function () {
  const sendBtn = document.getElementById('contact-send-btn');
  const callBtn = document.getElementById('contact-call-btn');
  const ownerEmail = document.querySelector('.contact-email').textContent.trim();
  const phoneNumber = '+998946175115';

  // Gmail ochish funksiyasi
  function openEmailCompose(to, subject, body) {
    const gmailURL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const mailtoURL = `mailto:${encodeURIComponent(to)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    try {
      window.open(gmailURL, '_blank');
      setTimeout(() => { window.location.href = mailtoURL; }, 600);
    } catch {
      window.location.href = mailtoURL;
    }
  }

  // Xabar yuborish tugmasi
  sendBtn.addEventListener('click', function (e) {
    e.preventDefault();
    const userMessage = prompt('Xabaringizni yozing (qisqacha):', '');
    if (userMessage === null) return;

    const wantCall = confirm('Sizga hozir telefon qilishni xohlaysizmi?');
    if (wantCall) {
      const confirmCall = confirm(`Sizni ${phoneNumber} raqamiga qo'ng'iroq qilaymi?`);
      if (confirmCall) window.location.href = `tel:${phoneNumber}`;
    }

    const wantEmail = confirm('Gmail orqali xabar yuborilsinmi?');
    if (wantEmail) {
      openEmailCompose(ownerEmail, 'Saytdan murojaat', 'Assalomu alaykum,\n\n' + userMessage);
      alert('Gmail ochildi. Iltimos, "Send" tugmasini bosing.');
    }
  });

  // Qo'ng'iroq tugmasi
  callBtn.addEventListener('click', function (e) {
    e.preventDefault();
    const confirmCall = confirm(`Sizni ${phoneNumber} raqamiga qo'ng'iroq qilaymi?`);
    if (confirmCall) window.location.href = `tel:${phoneNumber}`;
  });
});
