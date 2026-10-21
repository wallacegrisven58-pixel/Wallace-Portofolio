/* ===== EMAIL JS ===== */
if (window.emailjs) emailjs.init("TGLrwVDcFsUaKOIdz");

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const statusEl = document.getElementById("form-status");
  const submitBtn = this.querySelector("button[type='submit']");

  submitBtn.disabled = true;
  submitBtn.textContent = "Mengirim...";
  statusEl.textContent = "";

  if (!window.emailjs) {
    statusEl.textContent = "Layanan email belum termuat. Periksa koneksi lalu muat ulang halaman.";
    statusEl.style.color = "#b91c1c";
    submitBtn.disabled = false;
    submitBtn.textContent = "Kirim pesan";
    return;
  }

  emailjs.sendForm("service_anuhlmd", "template_mq5tf9i", this)
    .then(() => {
      statusEl.textContent = "Pesan terkirim. Terima kasih, saya segera balas.";
      statusEl.style.color = "#15803d";
      this.reset();
    })
    .catch((error) => {
      statusEl.textContent = "Pesan gagal terkirim. Coba lagi, atau hubungi lewat WhatsApp di bawah.";
      statusEl.style.color = "#b91c1c";
      console.error(error);
    })
    .finally(() => {
      submitBtn.disabled = false;
      submitBtn.textContent = "Kirim pesan";
    });
});

/* ===== MENU MOBILE ===== */
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navLinks.classList.toggle("active");
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    menuToggle.classList.remove("active");
    navLinks.classList.remove("active");
  });
});

/* ===== HERO: DESIGN / CODE ===== */
const frame = document.getElementById("frame");
const frameSize = document.getElementById("frame-size");
const codeView = frame.querySelector(".view-code");

document.querySelectorAll(".seg button").forEach(btn => {
  btn.addEventListener("click", () => {
    const isCode = btn.dataset.view === "code";
    frame.classList.toggle("code", isCode);
    codeView.setAttribute("aria-hidden", String(!isCode));
    frameSize.textContent = isCode ? "Code view" : "Design view";
    document.querySelectorAll(".seg button").forEach(b => {
      const on = b === btn;
      b.classList.toggle("on", on);
      b.setAttribute("aria-pressed", String(on));
    });
  });
});