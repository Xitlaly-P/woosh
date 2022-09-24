var countDownDate = new Date("Sep 30, 2022 12:30:00").getTime();
var audio = new Audio('boomnoise.mp3');

var myfunc = setInterval(function() {

  var now = new Date().getTime();
  var timeleft = countDownDate - now;

  var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

  document.getElementById("countdown").innerHTML = days + " days, " + hours + " hours, " + minutes + " minutes, " + seconds + " seconds"

  if (timeleft < 0) {
    clearInterval(myfunc);
    document.getElementById("days").innerHTML = "TIME UP!!";
  }
}, 1000)

function yup() {
  alert("You have 10 seconds before your computer explodes")
  alert("You shouldn't be clicking buttons like that")
  alert("You're lucky I like you")
  alert("No explosion I guess...")
  alert("Anyways im really bored")
  alert("So I made this")
  alert("Miss you <3")
  audio.play();
  alert("BOOM!!!!")
  document.getElementById("tough").src = "boom.png";
  document.getElementById("words").innerHTML = ""
  document.getElementById("words2").innerHTML = ""
  document.getElementById("countdown").style.display = "none"
  document.getElementById("notwords").style.display = "none"
}