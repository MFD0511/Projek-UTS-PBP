document.addEventListener("DOMContentLoaded", () => {
  // === Toggle Info Section di Home ===
  const infoButton = document.getElementById("infoButton");
  const infoText = document.getElementById("infoText");

  if (infoButton && infoText) {
    infoButton.addEventListener("click", () => {
      const isHidden = infoText.style.display === "none" || !infoText.style.display;
      infoText.style.display = isHidden ? "block" : "none";
      infoButton.textContent = isHidden ? "Sembunyikan Info" : "Tampilkan Info";
    });
  }

  // === Validasi Form Kontak ===
  const contactForm = document.getElementById("contactForm");
  const hasilForm = document.getElementById("hasilForm");

  if (contactForm && hasilForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const nama = contactForm.querySelector("#nama")?.value.trim();
      const email = contactForm.querySelector("#email")?.value.trim();
      const pesan = contactForm.querySelector("#pesan")?.value.trim();

      if (!nama || !email || !pesan) {
        alert("Harap isi semua kolom sebelum mengirim pesan!");
        return;
      }

      hasilForm.style.display = "block";
      hasilForm.scrollIntoView({ behavior: "smooth" });
      contactForm.reset();
    });
  }
});
