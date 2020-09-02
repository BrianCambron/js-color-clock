  function checkTime(i) {
  if (i < 10) {i = "0" + i};  // <- add zero in front of numbers < 10
  return i;
}
const progressBar = document.querySelector('.clock-progress-bar') //<- better to use queryselector rather than getElementbyId
const clock = document.querySelector('.clock')
let isHovering = false;
clock.addEventListener('mouseover', function(){
  isHovering = true
  // console.log('mouseover');
});
clock.addEventListener('mouseout', function(){
  isHovering = false
});

setInterval(function() {
  let d = new Date();
  let currentTime;
  console.log(d)

  const hexHours = checkTime(d.getHours().toString(16).slice(-2));
  const hexMinutes = checkTime(d.getMinutes().toString(16).slice(-2)); //<- makes it into hexadecimal
  const hexSeconds = checkTime(d.getSeconds().toString(16).slice(-2));

  const hours = checkTime(d.getHours());
  const minutes = checkTime(d.getMinutes());
  const seconds = checkTime(d.getSeconds());
  if (isHovering) {
    currenttime = `${hexHours}:${hexMinutes}:${hexSeconds}`;
  } else {
    currenttime = `${hours}:${minutes}:${seconds}`;
  }
clock.style.backgroundColor = `#${hexHours}${hexMinutes}${hexSeconds}`; //<- dynamically changes color
  // let currenttime = `${hours}:${minutes}:${seconds}`;
  console.log(currenttime);
  console.log(seconds / 60); //<-percentage of a minute that the current seconds represents
  progressBar.style.width = `${seconds / 60 * 14}rem` //<- Using the percent above, dynamically modify the length of the timer bar
  console.log(seconds.toString(16)); //<-console.log a hexidecimal color that is based on the current second, every second
document.querySelector(".clock-display").innerHTML = currenttime;
console.log(currenttime);} , 1000);
