document.body.onload = function () {
  var bigBen = new Audio();
  bigBen.src = "./assets/sounds/bigBen.mp3";
  bigBen.play();

  nbr = 39; //nb images
  p = 0; //position par défaut

  londonContainer = document.querySelector("#londonContainer");

  londonLeft = document.querySelector("#londonLeft");
  londonRight = document.querySelector("#londonRight");
  if (window.matchMedia("(max-width: 550px)").matches) {
    londonContainer.style.width = 300 * nbr + "px";
  } else {
    londonContainer.style.width = 400 * nbr + "px";
  }

  for (i = 1; i <= nbr; i++) {
    div = document.createElement("div");
    div.className = "photo";
    div.style.backgroundImage = "url(./assets/images/london/img" + i + ".png)";
    londonContainer.appendChild(div);
  }
  afficherMasquer();
};
londonRight.addEventListener("click", () => {
  if (p > -nbr + 1) p--; // on décrémente de 1 la position
  if (window.matchMedia("(max-width: 550px)").matches) {
    londonContainer.style.transform = "translate(" + p * 300 + "px)";
  } else {
    londonContainer.style.transform = "translate(" + p * 400 + "px)";
  }

  londonContainer.style.transform = "all 0.5s ease";
  afficherMasquer();
});

londonLeft.addEventListener("click", () => {
  if (p < 0) p++; // on décrémente de 1 la position
  if (window.matchMedia("(max-width: 550px)").matches) {
    londonContainer.style.transform = "translate(" + p * 300 + "px)";
  } else {
    londonContainer.style.transform = "translate(" + p * 400 + "px)";
  }
  londonContainer.style.transform = "all 0.5s ease";
  afficherMasquer();
});

function afficherMasquer() {
  if (p == -nbr + 1)
    //si p égale à -4
    londonRight.style.visibility = "hidden";
  else londonRight.style.visibility = "visible";

  if (p == 0) londonLeft.style.visibility = "hidden";
  else londonLeft.style.visibility = "visible";
}
