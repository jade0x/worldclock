function updateTime() {
  /*Sydney (+11 UTC)*/
  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  let sydneyCurrent = moment().tz("Australia/Sydney");
  sydneyDateElement.innerHTML = sydneyCurrent.format("dddd, MMMM D");
  sydneyTimeElement.innerHTML = sydneyCurrent.format(
    "h:mm:ss[<small>]A[</small>]"
  );
  /*Tokyo (+9 UTC)*/
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDateElement = tokyoElement.querySelector(".date");
  let tokyoTimeElement = tokyoElement.querySelector(".time");
  let tokyoCurrent = moment().tz("Asia/Tokyo");
  tokyoDateElement.innerHTML = tokyoCurrent.format("dddd, MMMM D");
  tokyoTimeElement.innerHTML = tokyoCurrent.format(
    "h:mm:ss[<small>]A[</small>]"
  );
  /*Dubai (+4 UTC)*/
  let dubaiElement = document.querySelector("#dubai");
  let dubaiDateElement = dubaiElement.querySelector(".date");
  let dubaiTimeElement = dubaiElement.querySelector(".time");
  let dubaiCurrent = moment().tz("Asia/Dubai");
  dubaiDateElement.innerHTML = dubaiCurrent.format("dddd, MMMM D");
  dubaiTimeElement.innerHTML = dubaiCurrent.format(
    "h:mm:ss[<small>]A[</small>]"
  );
  /*London (+0 UTC)*/
  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");
  let londonCurrent = moment().tz("Europe/London");
  londonDateElement.innerHTML = londonCurrent.format("dddd, MMMM D");
  londonTimeElement.innerHTML = londonCurrent.format(
    "h:mm:ss[<small>]A[</small>]"
  );
  /*New York (-5 UTC)*/
  let newyorkElement = document.querySelector("#newyork");
  let newyorkDateElement = newyorkElement.querySelector(".date");
  let newyorkTimeElement = newyorkElement.querySelector(".time");
  let newyorkCurrent = moment().tz("America/New_York");
  newyorkDateElement.innerHTML = newyorkCurrent.format("dddd, MMMM D");
  newyorkTimeElement.innerHTML = newyorkCurrent.format(
    "h:mm:ss[<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);

function updateCity(event) {
  let cityTimeZone = event.target.value;

  if (cityTimeZone === "local") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#city-clocks");
  citiesElement.innerHTML = `
  <article class="city">
            <div>
              <h2>${cityName}</h2>
              <div class="date">${cityTime.format("dddd, MMMM D")}</div>
            </div>
            <div class="time">${cityTime.format(
              "h:mm:ss[<small>]A[</small>]"
            )}</div>
          </article>
  `;
}

let citySelectElement = document.querySelector("#city");
citySelectElement.addEventListener("change", updateCity);
