// zone de telecharger le fichier
const box = document.getElementById("downloadBox");
const ripple = box.querySelector(".ripple");

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

  // Téléchargement
  const fileUrl = "communique.pdf"; // adapte le chemin
  const link = document.createElement("a");
  link.href = fileUrl;
  link.download = "communique.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  // Message
  document.getElementById("download-message").classList.remove("hidden");
});
