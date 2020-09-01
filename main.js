const d = new Date();
console.log(d);

setInterval(function() {
const d = new Date();
document.getElementById("clock-display").innerHTML = d;
console.log(d);} , 1000);
