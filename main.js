  function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
setInterval(function() {
  let d = new Date();
  console.log(d);

  let hours = checkTime(d.getHours());
  console.log(d.getHours());

  let minutes = checkTime(d.getMinutes());
  console.log(d.getMinutes());

  let seconds = checkTime(d.getSeconds());
  console.log(d.getSeconds());

  let currenttime = `${hours}:${minutes}:${seconds}`;
  console.log(currenttime);

  function calculatePercent(percent, num){
    return (percent / 100) * num;
}
console.log(calculatePercent(d.getMinutes(), d.getSeconds()));
document.getElementById("clock-display").innerHTML = currenttime;
console.log(currenttime);} , 1000);
