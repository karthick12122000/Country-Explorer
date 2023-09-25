function back() {
  window.location.href = "./index.html";
}

////------------mode
var cont = document.querySelector(".dwcontainer");
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

//////////--------------API
let sbCont1 = document.querySelector(".dwsubcontainer1");
let sbCont2 = document.querySelector(".dwsubcontainer2");
const searchParams = new URLSearchParams(window.location.search);
var Param = searchParams.get("name");
console.log(Param);
fetch("https://restcountries.com/v3.1/name/" + Param + "?fullText=true", {
  method: "GET",
})
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    let img = document.createElement("img");
    img.setAttribute("src", data[0].flags.svg);
    img.setAttribute("alt", "flags.png");
    sbCont1.appendChild(img);
    let Name = document.createElement("h1");
    let detailsDiv = document.createElement("div");
    detailsDiv.setAttribute("class", "dwsub__details");
    let detailsDiv1 = document.createElement("div");
    let detailsDiv2 = document.createElement("div");
    let nName = document.createElement("p");
    let population = document.createElement("p");
    let region = document.createElement("p");
    let sRegion = document.createElement("p");
    let capital = document.createElement("p");
    let domain = document.createElement("p");
    let languages = document.createElement("p");
    let currencies = document.createElement("p");
    let bCont = document.createElement("div");
    bCont.setAttribute("class", "borders");
    let bContries = document.createElement("span");
    Name.innerText = data[0].name.common;
    let nativeN = data[0].name.nativeName;
    const objectSize = Object.keys(nativeN).length;
    console.log(objectSize);
    nativeN = nativeN[Object.keys(nativeN)[objectSize - 1]];
    nName.innerHTML = "<b>Native Name:</b> " + nativeN.common;
    population.innerHTML = "<b>Population:</b> " + data[0].population;
    region.innerHTML = "<b>Region:</b> " + data[0].region;
    sRegion.innerHTML = "<b>Sub Region:</b> " + data[0].subregion;
    capital.innerHTML = "<b>Capital:</b> " + data[0].capital;
    domain.innerHTML = "<b>Top Level Domain:</b> " + data[0].tld;
    languages.innerHTML =
      "<b>Languages:</b> " + Object.values(data[0].languages);
    currencies.innerHTML =
      "<b>currencies:</b> " + Object.keys(data[0].currencies);
    bContries.innerText = "Border Countries:";

    sbCont2.appendChild(Name);
    sbCont2.appendChild(detailsDiv);
    detailsDiv1.appendChild(nName);
    detailsDiv1.appendChild(population);
    detailsDiv1.appendChild(region);
    detailsDiv1.appendChild(sRegion);
    detailsDiv1.appendChild(capital);
    detailsDiv2.appendChild(domain);
    detailsDiv2.appendChild(currencies);
    detailsDiv2.appendChild(languages);
    detailsDiv.appendChild(detailsDiv1);
    detailsDiv.appendChild(detailsDiv2);
    sbCont2.appendChild(bCont);
    bCont.appendChild(bContries);
    data[0].borders.forEach((n) => {
      fetch(
        "https://restcountries.com/v3.1/alpha?codes=" + n + "&fields=name",
        {
          method: "GET",
        }
      )
        .then((response) => response.json())
        .then((data) => {
          let aTag = document.createElement("a");
          aTag.setAttribute(
            "href",
            "./detail_view.html?name=" + data[0].name.common
          );

          let button = document.createElement("button");
          button.setAttribute("class", "btn__border");
          button.innerText = data[0].name.common;
          aTag.appendChild(button);
          bCont.appendChild(aTag);
        });
    });
  })
  .catch((error) => console.error("Error : " + error));
