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
function posicionArray(array) {
  return Math.floor(Math.random() * array.length);
}
function generateExcuse() {
  let randomWho = who[posicionArray(who)];
  let randomAction = action[posicionArray(action)];
  let randomWhat = what[posicionArray(what)];
  let randomWhen = when[posicionArray(when)];

  let concatenatedString =
    randomWho + " " + randomAction + " " + randomWhat + " " + randomWhen;

  return concatenatedString;
}

window.onload = () => {
  document.querySelector("#excuse").innerHTML = generateExcuse();
};
