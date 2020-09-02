  function checkTime(i) {
  if (i < 10) {i = "0" + i};  // <- add zero in front of numbers < 10
  return i;
}

const progressBar = document.querySelector('.clock-progress-bar') //<- better to use queryselector rather than getElementbyId

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
  console.log(seconds / 60); //<-percentage of a minute that the current seconds represents
  progressBar.style.width = `${seconds / 60 * 14}rem` //<- Using the percent above, dynamically modify the length of the timer bar

document.getElementById("clock-display").innerHTML = currenttime;
console.log(currenttime);} , 1000);
