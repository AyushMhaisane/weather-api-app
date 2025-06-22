function getWeather() {
  const location = document.getElementById("locationInput").value.trim();
  const resultBox = document.getElementById("weatherResult");

  if (!location) {
    alert("Please enter a location.");
    return;
  }

  const apiKey = "Your_API-Key";
  const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=no`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error("Location not found");
      }
      return response.json();
    })
    .then(data => {
      document.getElementById("cityName").innerText = `${data.location.name}, ${data.location.country}`;
      document.getElementById("tempC").innerText = data.current.temp_c;
      document.getElementById("conditionText").innerText = data.current.condition.text;
      document.getElementById("humidity").innerText = data.current.humidity;
      document.getElementById("windKph").innerText = data.current.wind_kph;
      document.getElementById("lastUpdated").innerText = data.current.last_updated;
      resultBox.classList.remove("hidden");
    })
    .catch(error => {
      alert("Error: " + error.message);
      resultBox.classList.add("hidden");
    });
}
