document.addEventListener("DOMContentLoaded", () => {
   const pastelBackgrounds = ["#f6e7e6", "#e2f0cb", "#d8e2dc", "#ead7e8", "#f1f7ed", "#f5e6cc"];

   const messages = [
      "Kim loves Dane.",
      "I'm pretty sure D&D stands for Dane and more Dane.",
      "Dane is the best thing that ever happened to Kim.",
      "I think your hair is sexy.",
      "Copilot is trying to write my love letters for me, help.",
      "Dane is my Daneboy.",
      "Dane makes me good food even when he's tired.",
      "I love you more than programming.",
      "You've got the rizzm, if you know what I mean.",
      "Dane brings me chargers when I don't want to get out of bed.",
      "Dane carries me to bed when I'm too tired.",
      "Kim needs Dane to reach the top shelves.",
      "Kim needs Dane to reach the middle shelves.",
      "Dane is patient as Kim tries out all the new clothes.",
   ];

   const pickRandom = (items) => items[Math.floor(Math.random() * items.length)];

   const selectedBackground = pickRandom(pastelBackgrounds);
   const selectedMessage = pickRandom(messages);

   document.body.style.backgroundColor = selectedBackground;

   const messageElement = document.getElementById("message");
   if (!messageElement) {
      return;
   }

   const HEART_EMOJI = "💚";
   const FADE_DURATION_MS = 900;
   const HEART_VISIBILITY_MS = 1000;
   const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

   const reveal = (text) => {
      messageElement.textContent = text;
      requestAnimationFrame(() => {
         messageElement.classList.add("is-visible");
      });
   };

   const conceal = () => {
      messageElement.classList.remove("is-visible");
   };

   if (prefersReducedMotion) {
      messageElement.textContent = selectedMessage;
      messageElement.classList.add("is-visible");
      return;
   }

   messageElement.textContent = HEART_EMOJI;
   messageElement.classList.add("is-visible");

   window.setTimeout(() => {
      conceal();
      window.setTimeout(() => {
         reveal(selectedMessage);
      }, FADE_DURATION_MS);
   }, HEART_VISIBILITY_MS);
});
