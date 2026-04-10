const welcomeTitle = document.getElementById("welcome-title");
const subtitle = document.getElementById("subtitle");
const dynamicText = document.getElementById("dynamic-text");
const button = document.getElementById("change-message");

const messageList = [
  "Un diario reflexivo es un espacio para pensar en lo vivido y en lo que viene.",
  "Cada día puede ser una nueva oportunidad para descubrir una emoción diferente.",
  "Las pequeñas ideas que escribas pueden convertirse en grandes aprendizajes.",
  "Aquí comparto pensamientos, sonidos y momentos de mi jornada creativa.",
];

function createColoredTitle(text) {
  welcomeTitle.innerHTML = "";
  const colors = ["#ff5b5b", "#f9c74f", "#90be6d", "#43aa8b", "#577590", "#9d4edd", "#f9844a", "#f94144", "#277da1", "#4d908e", "#cdb4db"];
  const letters = text.split("");

  letters.forEach((letter, index) => {
    const span = document.createElement("span");
    span.textContent = letter;
    span.style.color = colors[index % colors.length];
    span.style.animationDelay = `${index * 0.08}s`;
    welcomeTitle.appendChild(span);
  });
}

function rotateMessage() {
  const nextIndex = Math.floor(Math.random() * messageList.length);
  subtitle.textContent = messageList[nextIndex];
}

function refreshDynamicText() {
  const current = messageList[Math.floor(Math.random() * messageList.length)];
  dynamicText.textContent = current;
}

createColoredTitle("Diario_reflexivo");
setInterval(rotateMessage, 4500);
button.addEventListener("click", refreshDynamicText);

const video = document.getElementById("diary-video");
const videoStatus = document.getElementById("video-status");
video.addEventListener("play", () => {
  videoStatus.textContent = "¡Disfruta el video mientras exploro nuevas ideas!";
});
video.addEventListener("pause", () => {
  videoStatus.textContent = "El video está en pausa. Puedes reanudarlo cuando quieras.";
});
video.addEventListener("ended", () => {
  videoStatus.textContent = "Has llegado al final del video. Gracias por mirar.";
});
