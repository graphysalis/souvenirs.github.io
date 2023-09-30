document.body.onload = function () {
  nbr = 14; //nb images
  p = 0; //position par défaut

  roquefortContainer = document.querySelector("#roquefortContainer");
  roquefortLeft = document.querySelector("#roquefortLeft");
  roquefortRight = document.querySelector("#roquefortRight");

  if (window.matchMedia("(max-width: 550px)").matches) {
    roquefortContainer.style.width = 300 * nbr + "px";
  } else {
    roquefortContainer.style.width = 400 * nbr + "px";
  }

  for (i = 1; i <= nbr; i++) {
    div = document.createElement("div");
    div.className = "photo";
    div.style.backgroundImage =
      "url(./assets/images/roquefortLesPins/img" + i + ".png)";
    roquefortContainer.appendChild(div);
  }
  afficherMasquer();
};
roquefortRight.addEventListener("click", () => {
  if (p > -nbr + 1) p--; // on décrémente de 1 la position
  if (window.matchMedia("(max-width: 550px)").matches) {
    roquefortContainer.style.transform = "translate(" + p * 300 + "px)";
  } else {
    roquefortContainer.style.transform = "translate(" + p * 400 + "px)";
  }
  roquefortContainer.style.transform = "all 0.5s ease";
  afficherMasquer();
});

roquefortLeft.addEventListener("click", () => {
  if (p < 0) p++; // on décrémente de 1 la position
  if (window.matchMedia("(max-width: 550px)").matches) {
    roquefortContainer.style.transform = "translate(" + p * 300 + "px)";
  } else {
    roquefortContainer.style.transform = "translate(" + p * 400 + "px)";
  }

  roquefortContainer.style.transform = "all 0.5s ease";
  afficherMasquer();
});

function afficherMasquer() {
  if (p == -nbr + 1)
    //si p égale à -4
    roquefortRight.style.visibility = "hidden";
  else roquefortRight.style.visibility = "visible";

  if (p == 0) roquefortLeft.style.visibility = "hidden";
  else roquefortLeft.style.visibility = "visible";
}
