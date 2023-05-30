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
  if (event.target.value.length > 0) {
    let timezone = event.target.value;
    if (timezone === "current") {
      timezone = moment.tz.guess();
    }
    let citiesElement = document.querySelector("#main-cities");
    citiesElement.innerHTML = `

  <div class="city-display">         
   <div>
    <h2 class="city">
     ${timezone.replace("_", " ").split("/")[1]}
    </h2>
    <div class="date">${showDate(timezone)}</div>
   </div>
   <div class="time">${showTime(timezone)}</div>
  </div>  
  <hr />
  <div class="text-center">
  <a href="/">Back to homepage</a>
  </div>`;

    setTimeout(() => {
      updateCity(event);
    }, 1000);
  }
}

let selectCityElement = document.querySelector("#cities");
selectCityElement.addEventListener("change", updateCity);

updateTime();
setInterval(updateTime, 1000);
