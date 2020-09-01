// var d = new Date();
// console.log(d);
//
// var hours = new Date ();
// console.log(hours.getHours());
//
// var minutes = new Date ();
// console.log(minutes.getMinutes());
//
// var seconds = new Date ();
// console.log(seconds.getSeconds());
//
// var currenttime = `${hours.getHours()}:${minutes.getMinutes()}:${seconds.getSeconds()}`;
// console.log(currenttime);

setInterval(function() {
  var d = new Date();
  console.log(d);

  var hours = new Date ();
  console.log(hours.getHours());

  var minutes = new Date ();
  console.log(minutes.getMinutes());

  var seconds = new Date ();
  console.log(seconds.getSeconds());

  var currenttime = `${hours.getHours()}:${minutes.getMinutes()}:${seconds.getSeconds()}`;
  console.log(currenttime);

document.getElementById("clock-display").innerHTML = currenttime;
console.log(currenttime);} , 1000);
