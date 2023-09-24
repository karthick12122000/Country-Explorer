function back() {
  window.location.href = "./index.html";
}

////------------mode
var cont = document.querySelector(".container");
var btn = document.querySelector(".btn");
let body = document.querySelector("body");
let header = document.querySelector("header");
let icon = btn.querySelector(".btn__icon");
let btnText = btn.querySelector(".btn__text");
let bBtn = document.querySelector(".back");
btn.addEventListener("click", () => {
  if (btnText.innerText != "Light Mode") {
    body.style.background = "var(--Very_Dark_Blue)";
    header.style.background = "var(--DarkBlue)";
    body.style.color = "var(--White)";
    icon.name = "sunny-outline";
    btnText.innerText = "Light Mode";
    btn.style.color = "var(--White)";
    bBtn.style.background = "var(--DarkBlue)";
    bBtn.style.color = "var(--White)";
    var isDarkModeEnabled = true;
    cont.classList.add("dark");
  } else {
    body.style.background = "var(--Very_Light_Gray)";
    header.style.background = "var(--White)";
    body.style.color = "var(--Very_Dark_Blue1)";
    icon.name = "moon-outline";
    btnText.innerText = "Dark Mode";
    btn.style.color = "var(--Very_Dark_Blue1)";
    bBtn.style.color = "var(--Very_Dark_Blue1)";
    bBtn.style.background = "var(--White)";
    var isDarkModeEnabled = false;
    cont.classList.remove("dark");
  }
  /////////store the mode value in local storage
  localStorage.setItem("dark-mode", isDarkModeEnabled);
});
// Check if the user previously enabled dark mode and apply it on page load
if (localStorage.getItem("dark-mode") === "true") {
  body.style.background = "var(--Very_Dark_Blue)";
  header.style.background = "var(--DarkBlue)";
  body.style.color = "var(--White)";
  icon.name = "sunny-outline";
  btnText.innerText = "Light Mode";
  btn.style.color = "var(--White)";

  bBtn.style.background = "var(--DarkBlue)";
  bBtn.style.color = "var(--White)";
  cont.classList.add("dark");
}

const searchParams = new URLSearchParams(window.location.search);
var name = searchParams.get("name");
fetch("https://restcountries.com/v3.1/name/name", {
  method: "GET",
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.error("Error : " + error));
