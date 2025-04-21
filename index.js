const hamburger = document.querySelector("#hamburger");
const nav = document.querySelector("nav");

hamburger.addEventListener("click", () => {
  if (nav.style.display === "none") {
    return nav.style.display = "block"
  }else {
    return nav.style.display = "none"
  }
})
