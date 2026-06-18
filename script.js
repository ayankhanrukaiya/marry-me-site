const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

const proposalBox = document.getElementById("proposalBox");
const resultBox = document.getElementById("resultBox");

function moveNoButton() {
    const maxX = window.innerWidth - 150;
    const maxY = window.innerHeight - 100;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.position = "fixed";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}

noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("click", moveNoButton);

yesBtn.addEventListener("click", () => {
    proposalBox.classList.add("hidden");
    resultBox.classList.remove("hidden");
});