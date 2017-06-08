var clock = document.querySelector(".clock");
var body = document.querySelector("body");
var time = getTime();
var color = getColor(time);

function getTime(){
  //Mark the Date
  var now = new Date;
  //Get the hours, format a 0 in front if < 10
  var hour = now.getHours();
  if (hour < 10){
    hour = "0" + hour;
  }
  //Get the minutes, format a 0 in front if < 10
  var min = now.getMinutes();
  if(min < 10){
    min = "0" + min;
  }
  //Get the seconds, format a 0 in front if < 10
  var sec = now.getSeconds();
  if(sec < 10){
    sec = "0" + sec;
  }
  return hour + ":" + min + ":" + sec;
}

function getColor(time){
  return "#"+time[0]+time[1]+time[3]+time[4]+time[6]+time[7];
}

function updateTime(){
  time = getTime();
  clock.textContent = time;
}

function updateColor(){
  color = getColor(time);
  body.style.backgroundColor = color;
}

updateTime();
updateColor();
setInterval(updateTime, 1000);
setInterval(updateColor, 1000);
