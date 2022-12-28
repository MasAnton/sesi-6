let body = document.body;
const darkLimit = 5;
let darkCounter = 0;
let darkRemainingLeft;
let info = document.getElementById("info");

darkmode = () => {
  if (darkCounter == darkLimit) {
    console.log("Jatah Habis gan");
    return;
  }

  darkCounter += 1;
  let darkRemainingLeft = darkLimit - darkCounter;

  info.textContent = `Udah diklik ${darkCounter}x, Sisa ${darkRemainingLeft}x`;

  console.log("Dark mode di klik sebanyak :", darkCounter);
  console.log("Kesempatan Anda Tinggal :", darkRemainingLeft);

  body.classList.toggle("dark");
};
