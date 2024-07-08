import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["Mi perro", "Mi abuela", "La tortuga", "Mi pájaro"];
let action = ["se comió", "se ha meado", "aplastó", "rompió"];
let what = ["mis deberes", "las llaves", "el coche"];
let when = [
  "antes de clase",
  "justo a tiempo",
  "cuando he terminado",
  "durante mi almuerzo",
  "mientras rezaba"
];

function generateExcuse() {
  let randomWho = who[Math.floor(Math.random() * who.length)];
  let randomAction = action[Math.floor(Math.random() * action.length)];
  let randomWhat = what[Math.floor(Math.random() * what.length)];
  let randomWhen = when[Math.floor(Math.random() * when.length)];

  let concatenatedString =
    randomWho + " " + randomAction + " " + randomWhat + " " + randomWhen;

  return concatenatedString;
}

window.onload = () => {
  document.querySelector("#excuse").innerHTML = generateExcuse();
  const etiqueta = document.querySelector("#excuse");
};
