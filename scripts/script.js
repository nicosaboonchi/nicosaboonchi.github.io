const header = document.querySelector("h1");
const yesBtn = document.querySelector(".yes");
const noBtn = document.querySelector(".no");
const img = document.querySelector("img");
const images = ["blowing-kiss.gif", "i-love-you.gif", "bear-love.gif"];

yesBtn.addEventListener("click", () => {
  img.src = "images/bear-love.gif";
  img.alt = "a cartoon heart blowing a kiss";

  yesBtn.remove();
  noBtn.remove();

  header.innerHTML = "YAY! ❤️<br>Happy Valentines Day!";
});

noBtn.addEventListener("click", () => {
  img.src = "images/angry-cat.gif";
  img.alt = "grumpy looking cat";

  header.textContent = "Did you really just hit no...?";
});
