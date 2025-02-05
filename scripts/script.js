const header = document.querySelector("h1");
const yesBtn = document.querySelector(".yes");
const noBtn = document.querySelector(".no");
const img = document.querySelector("img");

yesBtn.addEventListener("click", () => {
  img.src = "images/blowing-kiss.gif";
  img.alt = "a cartoon heart blowing a kiss";

  yesBtn.remove();
  noBtn.remove();

  header.textContent = "YAY";
});

noBtn.addEventListener("mouseover", (e) => {
  img.src = "images/angry-cat.gif";
  header.textContent = "wyd????";
});

noBtn.addEventListener("mouseout", () => {
  img.src = "images/excited.gif";
  header.textContent = "Thats what I thought, now will you be my Valentine?";
});
