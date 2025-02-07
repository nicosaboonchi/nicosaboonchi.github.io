const header = document.querySelector("h1");
const yesBtn = document.querySelector(".yes");
const noBtn = document.querySelector(".no");
const img = document.querySelector("img");

yesBtn.addEventListener("click", () => {
  img.src = "images/blowing-kiss.gif";
  img.alt = "a cartoon heart blowing a kiss";

  yesBtn.remove();
  noBtn.remove();

  header.innerHTML = "YAY! ❤️<br>Happy Valentines Day!";
});
