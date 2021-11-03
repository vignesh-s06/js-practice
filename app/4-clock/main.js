let hourElement = document.getElementById("hours"),
  minuteElement = document.getElementById("minutes"),
  secondElement = document.getElementById("seconds");

function currentMoment() {
  let timestamp = new Date();
  //how to get current date
  console.log(timestamp);

  hourElement.innerHTML = timestamp.getHours();
  minuteElement.innerHTML = timestamp.getMinutes();
  secondElement.innerHTML = timestamp.getSeconds();

  //how to get current date
  console.log("date:" + timestamp.getDate());
  //how to get current month
  console.log("month:" + timestamp.getMonth());
  //how to get current year
  console.log("year:" + timestamp.getFullYear());
  //how to get current hours
  console.log("hour:" + timestamp.getHours());
  //how to get current minutes
  console.log("minutes:" + timestamp.getMinutes());
  //how to get current second
  console.log("second:" + timestamp.getSeconds());
  //how to get current time
  console.log("time:" + timestamp.getTime());
}

//to apply the interval
setInterval(currentMoment, 1000);
//currentMoment();
