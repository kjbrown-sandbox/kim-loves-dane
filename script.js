document.addEventListener("DOMContentLoaded", () => {
  const pastelBackgrounds = [
    "#f6e7e6",
    "#e2f0cb",
    "#d8e2dc",
    "#ead7e8",
    "#f1f7ed",
    "#f5e6cc"
  ];

  const messages = [
    "Kim loves Dane.",
    "Together is our favorite place.",
    "Every day is sweeter with you.",
    "Adventure feels better side by side.",
    "Love looks a lot like us."
  ];

  const pickRandom = (items) => items[Math.floor(Math.random() * items.length)];

  const selectedBackground = pickRandom(pastelBackgrounds);
  const selectedMessage = pickRandom(messages);

  document.body.style.backgroundColor = selectedBackground;

  const messageElement = document.getElementById("message");
  if (messageElement) {
    messageElement.textContent = selectedMessage;
  }
});
