var cityInput = document.querySelector('#cityInput');
var submitButton = document.querySelector('#submitButton');
var cityOutput = document.querySelector('#cityOutput');
var descriptionOutput = document.querySelector('#descriptionOutput');
var temperatureOutput = document.querySelector('#temperatureOutput');
var windOutput = document.querySelector('#windOutput');
var apiKey = "2879960a777380ec1ab5dfd911a34fe6";

function convertKelvinToCelsius(val) {
    return (val - 273).toFixed(3);
}

submitButton.addEventListener('click', function() {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityInput.value + '&appid=' + apiKey)
    .then(res => res.json())
    .then(data => {
        var cityName = data['name'];
        var weatherDescription = data['weather'][0]['description'];
        var temperature = data['main']['temp'];
        var windSpeed = data['wind']['speed'];

        cityOutput.innerHTML = `Weather of <span>${cityName}</span>`;
        temperatureOutput.innerHTML = `Temperature: <span>${convertKelvinToCelsius(temperature)}(degrees)</span>`;
        descriptionOutput.innerHTML = `Sky conditions: <span>${weatherDescription}</span>`;
        windOutput.innerHTML = `Wind speed: <span>${windSpeed} kmph</span>`;
    })
    .catch(err => alert('You entered the wrong city name'));
});
