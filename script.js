let body = document.body;
let info = document.getElementById("info");
let reload = document.getElementById("reload");
let buttonDarkMode = document.getElementById("buttonDarkMode");
let buttonLightMode = document.getElementById("buttonLightMode");

const darkLimit = 5;
let darkCounter = 0;
let darkRemainingLeft;

buttonLightMode.style.display = "none";

darkmode = () => {
  buttonDarkMode.style.display = "none";
  buttonLightMode.style.display = "block";

  if (darkRemainingLeft == 1) {
    info.textContent = "Jatah Habis gan";
    buttonDarkMode.style.display = "none";
    reload.textContent = "RESTART";
    buttonLightMode.style.display = "none";
    return;
  }
  darkCounter += 1;
  darkRemainingLeft = darkLimit - darkCounter;

  info.textContent = `Udah diklik ${darkCounter}x, Sisa ${darkRemainingLeft}x`;

  body.classList.toggle("dark");
};

lightmode = () => {
  buttonDarkMode.style.display = "";
  buttonLightMode.style.display = "none";

  if (darkRemainingLeft == 1) {
    info.textContent = "Jatah Habis gan";
    buttonDarkMode.style.display = "none";
    reload.textContent = "RESTART";
    return;
  }
  darkCounter += 1;
  darkRemainingLeft = darkLimit - darkCounter;

  info.textContent = `Udah diklik ${darkCounter}x, Sisa ${darkRemainingLeft}x`;

  body.classList.toggle("dark");
};

reloadPage = () => {
  location.reload();
};
