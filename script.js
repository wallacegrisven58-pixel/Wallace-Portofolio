// Inisialisasi EmailJS pakai Public Key kamu

/* ===== EMAIL JS===== */
emailjs.init("TGLrwVDcFsUaKOIdz");

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const statusEl = document.getElementById("form-status");
  const submitBtn = this.querySelector("button[type='submit']");

  submitBtn.disabled = true;
  submitBtn.textContent = "Mengirim...";
  statusEl.textContent = "";

  emailjs.sendForm("service_anuhlmd", "template_mq5tf9i", this)
    .then(() => {
      statusEl.textContent = "Pesan berhasil dikirim!";
      statusEl.style.color = "green";
      this.reset();
    })
    .catch((error) => {
      statusEl.textContent = "Gagal mengirim pesan, coba lagi.";
      statusEl.style.color = "red";
      console.error(error);
    })
    .finally(() => {
      submitBtn.disabled = false;
      submitBtn.textContent = "Kirim Pesan";
    });
});

/* ===== TOGGLE SIDE BAR ===== */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", function () {
  menuToggle.classList.toggle("active");
  navLinks.classList.toggle("active");
});

// Tutup menu otomatis kalau salah satu link diklik
navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("active");
    navLinks.classList.remove("active");
  });
});