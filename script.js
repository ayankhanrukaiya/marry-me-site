document.addEventListener("DOMContentLoaded", () => {
    const noBtn = document.getElementById("noBtn");
    const yesBtn = document.getElementById("yesBtn");
    const proposalPage = document.getElementById("proposalPage");
    const resultPage = document.getElementById("resultPage");

    function moveNoButton() {
        const x = Math.random() * (window.innerWidth - 150);
        const y = Math.random() * (window.innerHeight - 80);

        noBtn.style.position = "fixed";
        noBtn.style.left = x + "px";
        noBtn.style.top = y + "px";
    }

    noBtn.addEventListener("mouseenter", moveNoButton);
    noBtn.addEventListener("click", moveNoButton);

    yesBtn.addEventListener("click", () => {
        proposalPage.style.display = "none";
        resultPage.classList.remove("hidden");
    });
});
