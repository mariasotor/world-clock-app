function showDate(timezone) {
  return moment().tz(timezone).format("MMMM Do YYYY");
}

function showTime(timezone) {
  return moment().tz(timezone).format("h:mm:ss [<small>]A[</small>]");
}
function updateTime() {
  let NewYorkTimeElement = document.querySelector("#newyork-time");
  if (NewYorkTimeElement) {
    NewYorkTimeElement.innerHTML = showTime("America/New_York");
    let NewYorkDateElement = document.querySelector("#newyork-date");
    NewYorkDateElement.innerHTML = showDate("America/New_York");

    let tokyoTimeElement = document.querySelector("#tokyo-time");
    tokyoTimeElement.innerHTML = showTime("Asia/Tokyo");
    let tokyoDateElement = document.querySelector("#tokyo-date");
    tokyoDateElement.innerHTML = showDate("Asia/Tokyo");

    let bogotaTimeElement = document.querySelector("#bogota-time");
    bogotaTimeElement.innerHTML = showTime("America/Bogota");
    let bogotaDateElement = document.querySelector("#bogota-date");
    bogotaDateElement.innerHTML = showDate("America/Bogota");
  }
}

function updateCity(event) {
  let cityDisplayElement = document.querySelector("#city-display");
  cityDisplayElement.innerHTML = `
  <div class="row align-items-center">
  <div class="col-6">
  <h2 class="city">
  ${event.target.selectedOptions[0].text}
  </h2>
  <div class="date">${showDate(event.target.value)}</div>
  </div>
  <div class="col-6">
  <div class="time">${showTime(event.target.value)}</div>
  </div>
  </div>`;
}

let selectCityElement = document.querySelector("#cities");
selectCityElement.addEventListener("change", updateCity);

updateTime();
setInterval(updateTime, 1000);
