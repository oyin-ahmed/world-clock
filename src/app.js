function updateTime() {
  let amsterdamElement = document.querySelector("#amsterdam");
  let amsterdamDate = amsterdamElement.querySelector(".date");
  let amsterdamTimeElement = amsterdamElement.querySelector(".time");
  let date = moment().format("dddd, MMMM Do YYYY");
  let amsterdamTime = moment().tz("Europe/Amsterdam");
  let amsterdamCurrentTime = amsterdamTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
  amsterdamDate.innerHTML = `${date}`;
  amsterdamTimeElement.innerHTML = `${amsterdamCurrentTime}`;

  let saoPauloElement = document.querySelector("#sao-paulo");
  let saoPauloDate = saoPauloElement.querySelector(".date");
  let saoPauloTimeElement = saoPauloElement.querySelector(".time");
  let saoPauloTime = moment().tz("America/Sao_Paulo");
  let saoPauloCurrentTime = saoPauloTime.format("h:mm:ss [<small>]A[</small>]");
  saoPauloDate.innerHTML = `${date}`;
  saoPauloTimeElement.innerHTML = `${saoPauloCurrentTime}`;
}
updateTime();
setInterval(updateTime, 1000);
