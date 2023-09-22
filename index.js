var btn= document.querySelector(".btn");

let body= document.querySelector("body");
let icon=  btn.querySelector(".btn__icon");
let btnText= btn.querySelector(".btn__text");
 btn.addEventListener("click",()=>{
     
   if(btnText.innerText!="Light Mode"){
   body.style.background="var(--Very_Dark_Blue)";
   body.style.color="var(--White)";
   icon.name="sunny-outline";
   btnText.innerText="Light Mode";
   btn.style.color="var(--White)";
   var isDarkModeEnabled =true;
   
   }
   else{
    body.style.background="var(--Very_Light_Gray)";
   body.style.color="var(--Very_Dark_Blue)";
   icon.name="moon-outline";
   btnText.innerText="Dark Mode";
   btn.style.color="var(--Very_Dark_Blue)";
   var isDarkModeEnabled =false;
   }
   localStorage.setItem('dark-mode', isDarkModeEnabled);
 });
 
 // Check if the user previously enabled dark mode and apply it on page load
 if (localStorage.getItem('dark-mode') === 'true') {
    body.style.background="var(--Very_Dark_Blue)";
    body.style.color="var(--White)";
    icon.name="sunny-outline";
    btnText.innerText="Light Mode";
    btn.style.color="var(--White)";
 }