function showDate(timezone) {
  return moment().tz(timezone).format("MMMM Do YYYY");
}

function showTime(timezone) {
  return moment().tz(timezone).format("h:mm:ss [<small>]A[</small>]");
}
function updateTime() {
  document.querySelector("#newyork-time").innerHTML =
    showTime("America/New_York");
  document.querySelector("#newyork-date").innerHTML =
    showDate("America/New_York");

  document.querySelector("#tokyo-time").innerHTML = showTime("Asia/Tokyo");
  document.querySelector("#tokyo-date").innerHTML = showDate("Asia/Tokyo");

  document.querySelector("#bogota-time").innerHTML = showTime("America/Bogota");
  document.querySelector("#bogota-date").innerHTML = showDate("America/Bogota");
}

updateTime();
setInterval(updateTime, 1000);
