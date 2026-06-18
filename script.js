const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

const proposalPage = document.getElementById("proposalPage");
const resultPage = document.getElementById("resultPage");

function moveNoButton() {
    const maxX = 250;
    const maxY = 100;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}

noBtn.addEventListener("mouseenter", moveNoButton);
noBtn.addEventListener("click", moveNoButton);

yesBtn.addEventListener("click", () => {
    proposalPage.classList.add("hidden");
    resultPage.classList.remove("hidden");
});