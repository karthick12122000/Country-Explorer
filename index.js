/////////////----------------API
var cont = document.querySelector(".container");
fetch(
  "https://restcountries.com/v3.1/independent?status=true&fields=name,flags,population,region,capital",
  {
    method: "GET",
  }
)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    data.forEach((n) => {
      let card = document.createElement("div");
      let aTag = document.createElement("a");
      let subcard = document.createElement("div");
      card.setAttribute("class", "card");
      aTag.setAttribute("href", "./detail_view.html?name=" + n.name.common);
      let img = document.createElement("img");
      let name = document.createElement("h2");
      let population = document.createElement("p");
      let region = document.createElement("p");
      let capital = document.createElement("p");
      img.src = n.flags.png;
      name.innerText = n.name.common;
      population.innerHTML = "<b>Population:</b> " + n.population;
      region.innerHTML = "<b>Region:</b> " + n.region;
      capital.innerHTML = "<b>Capital:</b> " + n.capital;

      subcard.appendChild(name);
      subcard.appendChild(population);
      subcard.appendChild(region);
      subcard.appendChild(capital);
      aTag.appendChild(img);
      aTag.appendChild(subcard);
      card.appendChild(aTag);
      cont.appendChild(card);
    });
  })
  .catch((error) => console.error("Error : " + error));

////------------mode
var btn = document.querySelector(".btn");
let body = document.querySelector("body");
let header = document.querySelector("header");
let icon = btn.querySelector(".btn__icon");
let btnText = btn.querySelector(".btn__text");

btn.addEventListener("click", () => {
  if (btnText.innerText != "Light Mode") {
    body.style.background = "var(--Very_Dark_Blue)";
    header.style.background = "var(--DarkBlue)";
    body.style.color = "var(--White)";
    icon.name = "sunny-outline";
    btnText.innerText = "Light Mode";
    btn.style.color = "var(--White)";
    cont.classList.add("dark");
    var isDarkModeEnabled = true;
  } else {
    body.style.background = "var(--Very_Light_Gray)";
    header.style.background = "var(--White)";
    body.style.color = "var(--Very_Dark_Blue1)";
    icon.name = "moon-outline";
    btnText.innerText = "Dark Mode";
    btn.style.color = "var(--Very_Dark_Blue1)";
    cont.classList.remove("dark");
    var isDarkModeEnabled = false;
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
  cont.classList.add("dark");
}
