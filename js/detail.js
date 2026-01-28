document.addEventListener("DOMContentLoaded", () => {
    const card = document.querySelector(".domain-card");

    if (card) {
        card.addEventListener("click", () => {
            window.location.href = "detail.html";
        });
    }
});
