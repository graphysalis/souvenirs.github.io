var password = prompt(
  "BONJOUR DRISSIA ! Pour visiter notre site, entre l'année de notre voyage à Londres (4 chiffres)",
  ""
);
// si un mot de passe a été entré
if (password != null) {
  // on le compare à celui attendu
  if (password == "2014") {
    // mot de passe valide, on ouvre la page secrète
    document.body.style.display = "block";
  } else {
    alert(
      "\u26a0" +
        "Accès non-autorisé / Rafraîchir la page " +
        "\u27f3" +
        " et essayer à nouveau...",
      "Erreur"
    );
  }
}
//------------BIRDS-----------------
var birds = new Audio();
birds.src = "./assets/sounds/nature.mp3";
var btnOn = document.querySelector(".birdsOn");
var btnOff = document.querySelector(".birdsOff");

btnOn.addEventListener("click", () => {
  birds.play();
  btnOn.style.display = "none";
  btnOff.style.display = "block";
});

btnOff.addEventListener("click", () => {
  birds.pause();
  birds.currentTime = 0; //pour stopper (avec pause!) remettre au début l'audio.
  btnOff.style.display = "none";
  btnOn.style.display = "block";
});

//-------------------------------------
