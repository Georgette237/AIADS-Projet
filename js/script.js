document.addEventListener("DOMContentLoaded", function () {
  const box = document.getElementById("downloadBox");
  const ripple = box.querySelector(".ripple");
  const message = document.getElementById("download-message");

  box.addEventListener("click", function (e) {
    // Ripple animation
    const rect = box.getBoundingClientRect();
    ripple.style.left = `${e.clientX - rect.left}px`;
    ripple.style.top = `${e.clientY - rect.top}px`;
    ripple.style.transform = "scale(12)";
    ripple.style.opacity = "1";

    setTimeout(() => {
      ripple.style.transform = "scale(0)";
      ripple.style.opacity = "0";
    }, 500);

    // Téléchargement du fichier
    const fileUrl = "communique.pdf"; // chemin du PDF
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "communique.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Affichage du message
    message.classList.remove("hidden");

    // Optionnel : cacher le message après 4 secondes
    setTimeout(() => {
      message.classList.add("hidden");
    }, 4000);
  });
});
