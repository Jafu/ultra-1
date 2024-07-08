import "./style.css";
let oben = 100;
let links = 100;
let richtung = "runter";
let len = 10;
const speed = 250;
const pixelSize = 5;

setInterval(() => {
  if (richtung === "runter") {
    oben = oben + pixelSize;
    if (oben > 145) oben = 0;
  }
  if (richtung === "hoch") {
    oben = oben - pixelSize;
    if (oben < 0) oben = 145;
  }
  if (richtung === "rechts") {
    links = links + pixelSize;
    if (links > 195) links = 0;
  }
  if (richtung === "links") {
    links = links - pixelSize;
    if (links < 0) links = 195;
  }
  let schlange = document.createElement("div");
  schlange.classList.add("schlange");
  document.getElementById("kaefig").appendChild(schlange);
  schlange.style.top = `${oben}mm`;
  schlange.style.left = `${links}mm`;
  document.getElementById("position-oben").textContent = oben;
  document.getElementById("position-links").textContent = links;
  let schlangen = document.getElementsByClassName("schlange");
  Array.from(schlangen)
    .reverse()
    .forEach((schlange, index) => {
      if (index > len - 1) schlange.remove();
    });
}, speed);

document.body.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight" && richtung !== "links") {
    richtung = "rechts";
    event.preventDefault();
  }
  if (event.key === "ArrowLeft" && richtung !== "rechts") {
    richtung = "links";
    event.preventDefault();
  }
  if (event.key === "ArrowUp" && richtung !== "runter") {
    richtung = "hoch";
    event.preventDefault();
  }
  if (event.key === "ArrowDown" && richtung !== "hoch") {
    richtung = "runter";
    event.preventDefault();
  }
  if (event.key === " ") {
    richtung = "pause";
    event.preventDefault();
  }

  document.body.append(`taste gedrückt - ${event.key}`);
});
