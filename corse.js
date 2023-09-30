document.body.onload = function () {
  nbr = 30; //nb images
  p = 0; //position par défaut


  corseContainer = document.querySelector("#corseContainer");
  corseLeft = document.querySelector("#corseLeft");
  corseRight = document.querySelector("#corseRight");

  if (window.matchMedia("(max-width: 550px)").matches) {
    corseContainer.style.width = 300 * nbr + "px";
  } else {
    corseContainer.style.width = 400 * nbr + "px";
  }

  for (i = 1; i <= nbr; i++) {
    div = document.createElement("div");
    div.className = "photo";
    div.style.backgroundImage = "url(./assets/images/corse/img" + i + ".png)";
    corseContainer.appendChild(div);
  }
  afficherMasquer();
};
corseRight.addEventListener("click", () => {
  if (p > -nbr + 1) p--; // on décrémente de 1 la position
  if (window.matchMedia("(max-width: 550px)").matches) {
    corseContainer.style.transform = "translate(" + p * 300 + "px)";
  } else {
    corseContainer.style.transform = "translate(" + p * 400 + "px)";
  }
  corseContainer.style.transform = "all 0.5s ease";
  afficherMasquer();
});

corseLeft.addEventListener("click", () => {
  if (p < 0) p++; // on décrémente de 1 la position
  if (window.matchMedia("(max-width: 550px)").matches) {
    corseContainer.style.transform = "translate(" + p * 300 + "px)";
  } else {
    corseContainer.style.transform = "translate(" + p * 400 + "px)";
  }

  corseContainer.style.transform = "all 0.5s ease";
  afficherMasquer();
});

function afficherMasquer() {
  if (p == -nbr + 1)
    //si p égale à -4
    corseRight.style.visibility = "hidden";
  else corseRight.style.visibility = "visible";

  if (p == 0) corseLeft.style.visibility = "hidden";
  else corseLeft.style.visibility = "visible";
}
