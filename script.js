const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");



  var date = new Date();
  console.log(date);

  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  let hrPosition = (hr*360/12) + (min*(360/60)/12); //extra bit here is so that the hand moves as the minutes go by so that it doesnt suddenly jump to next number
  let minPosition = (min*360/60)+ (sec*(360/60)/60) ; //extra bit for same reason as above
  let secPosition = sec*360/60;

function runClock(){

  hrPosition = hrPosition + (3/360); //this makes sure the clock is on the right time as we are not updating with date
  minPosition = minPosition + (1/10);
  secPosition = secPosition + 6;

  HOURHAND.style.transform = "rotate("+ hrPosition + "deg)";
  MINUTEHAND.style.transform = "rotate("+ minPosition + "deg)";
  SECONDHAND.style.transform = "rotate("+ secPosition + "deg)";
}

var interval = setInterval(runClock, 1000); //setInterval() will run function every x milliseconds
