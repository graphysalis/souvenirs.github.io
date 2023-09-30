document.body.onload = function () {
  nbr = 13; //nb images
  p = 0; //position par défaut

  var medieval = new Audio();
  medieval.src = "./assets/sounds/medieval.mp3";
  medieval.play();

  nantesContainer = document.querySelector("#nantesContainer");

  nantesLeft = document.querySelector("#nantesLeft");
  nantesRight = document.querySelector("#nantesRight");
  if (window.matchMedia("(max-width: 550px)").matches) {
    nantesContainer.style.width = 300 * nbr + "px";
  } else {
    nantesContainer.style.width = 400 * nbr + "px";
  }

  for (i = 1; i <= nbr; i++) {
    div = document.createElement("div");
    div.className = "photo";
    div.style.backgroundImage = "url(./assets/images/nantes/img" + i + ".png)";
    nantesContainer.appendChild(div);
  }
  afficherMasquer();
};
nantesRight.addEventListener("click", () => {
  if (p > -nbr + 1) p--; // on décrémente de 1 la position
  if (window.matchMedia("(max-width: 550px)").matches) {
    nantesContainer.style.transform = "translate(" + p * 300 + "px)";
  } else {
    nantesContainer.style.transform = "translate(" + p * 400 + "px)";
  }
  nantesContainer.style.transform = "all 0.5s ease";
  afficherMasquer();
});

nantesLeft.addEventListener("click", () => {
  if (p < 0) p++; // on décrémente de 1 la position
  if (window.matchMedia("(max-width: 550px)").matches) {
    nantesContainer.style.transform = "translate(" + p * 300 + "px)";
  } else {
    nantesContainer.style.transform = "translate(" + p * 400 + "px)";
  }
  nantesContainer.style.transform = "all 0.5s ease";
  afficherMasquer();
});

function afficherMasquer() {
  if (p == -nbr + 1)
    //si p égale à -4
    nantesRight.style.visibility = "hidden";
  else nantesRight.style.visibility = "visible";

  if (p == 0) nantesLeft.style.visibility = "hidden";
  else nantesLeft.style.visibility = "visible";
}
