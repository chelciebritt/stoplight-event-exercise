var myMouse = document.getElementById('controls');

myMouse.onmouseover = function() {
    console.log('entered button');
}

myMouse.onmouseout = function() {
    console.log('left button');
}
const els =
document.getElementById('stopButton').onclick = colorRed;
document.getElementById('slowButton').onclick = colorYellow;
document.getElementById('goButton').onclick = colorGreen;

function colorRed() {
  clearLights();
  document.getElementById('stopLight').style.backgroundColor = "red";
}
function colorYellow() {
  clearLights();
  document.getElementById('slowLight').style.backgroundColor = "yellow";
}
function colorGreen() {
  clearLights();
  document.getElementById('goLight').style.backgroundColor = "green";
}
function clearLights() {
  document.getElementById('stopLight').style.backgroundColor = "black";
  document.getElementById('slowLight').style.backgroundColor = "black";
  document.getElementById('goLight').style.backgroundColor = "black";
}
