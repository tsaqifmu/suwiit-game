let result = document.getElementById("result");
let images = document.querySelectorAll("div > img");

let compResult = () => {
  let comp = Math.ceil(Math.random() * 3);
  if (comp == 1) return "batu";
  if (comp == 2) return "gunting";
  if (comp == 3) return "kertas";
};

let getResult = (comp, player) => {
  if (comp == player) return "Seri";
  if (comp == "batu") return player == "gunting" ? "Kalah" : "Menang";
  if (comp == "kertas") return player == "gunting" ? "Menang" : "Kalah";
  if (comp == "gunting") return player == "kertas" ? "Kalah" : "Menang";
};

/* note =>  dia akan menjalankan fungsi untuk spin gambar 
            dengan interval selama 0,1 detik,
            fungsi akan berjalan selama 1 detik
            setelah 1 detik fungsi akan dikeluarkan dengan clearInterval
*/
const spin = () => {
  const choice = ["batu", "kertas", "gunting"];
  let i = 0;
  const startTime = new Date().getTime();
  setInterval(() => {
    if (new Date().getTime() - startTime >= 1000) return clearInterval;
    images[0].setAttribute("src", "dist/img/" + choice[i++] + ".png");
    if (i == choice.length) i = 0;
  }, 100);
};

images.forEach((option) => {
  option.addEventListener("click", () => {
    let compChoice = compResult();
    let playerChoice = option.id;
    let finalResult = getResult(compChoice, playerChoice);
    images[0].classList.remove("hidden");

    spin();

    setTimeout(() => {
      images[0].setAttribute("src", "dist/img/" + compChoice + ".png");
      result.innerHTML = "Pilihan komputer adalah " + compChoice + "<br>" + "Dan pilihan kamu adalah " + playerChoice + "<br>" + "Maka hasilnya adalah " + "<br>" + finalResult;
    }, 1000);
  });
});
