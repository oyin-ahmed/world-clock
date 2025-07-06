function updateTime() {
  let amsterdamElement = document.querySelector("#amsterdam");
  if (amsterdamElement) {
    let amsterdamDate = amsterdamElement.querySelector(".date");
    let amsterdamTimeElement = amsterdamElement.querySelector(".time");
    let amsterdamTime = moment().tz("Europe/Amsterdam");
    let amsterdamCurrentTime = amsterdamTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
    amsterdamDate.innerHTML = amsterdamTime.format("dddd, MMMM Do YYYY");
    amsterdamTimeElement.innerHTML = `${amsterdamCurrentTime}`;
  }

  let shanghaiElement = document.querySelector("#shanghai");
  if (shanghaiElement) {
    let shanghaiDate = shanghaiElement.querySelector(".date");
    let shanghaiTimeElement = shanghaiElement.querySelector(".time");
    let shanghaiTime = moment().tz("Asia/Shanghai");
    let shanghaiCurrentTime = shanghaiTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
    shanghaiDate.innerHTML = shanghaiTime.format("dddd, MMMM Do YYYY");
    shanghaiTimeElement.innerHTML = `${shanghaiCurrentTime}`;
  }
}
let cityIntervalId;
function updateCity(event) {
  clearInterval(cityIntervalId);
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

  let cityName = cityTimeZone.replace("_", " ").split("/")[1];

  function updateSelectedCityTime() {
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = ` 
      <div class="city">
        <div>
          <h2>${cityName}</h2>
          <div class="date">${cityTime.format("dddd, MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format(
          "h:mm:ss [<small>]A[</small>]"
        )}</div>
      </div>`;
  }

  updateSelectedCityTime();
  cityIntervalId = setInterval(updateSelectedCityTime, 1000);
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelect = document.querySelector("#city");
citiesSelect.addEventListener("change", updateCity);
