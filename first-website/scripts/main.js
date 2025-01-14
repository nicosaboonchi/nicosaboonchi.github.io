const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/porshe-black.jpg") {
    myImage.setAttribute("src", "images/porshe-white.jpg");
  } else {
    myImage.setAttribute("src", "images/porshe-black.jpg");
  }
});
