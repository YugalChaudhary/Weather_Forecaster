const xhr = new XMLHttpRequest();

let city = document.querySelector("#city");
let btn = document.querySelector("#btn");

let temp = document.querySelector("#tempInside");
let hum = document.querySelector("#humInside");
let wind = document.querySelector("#windInside");
let getCity;

function workAfter() {
    temp.textContent = cityTemp + " °C";
    hum.textContent = cityHum + " %";
    wind.textContent = cityWind + " km/hr";
}


btn.addEventListener('click',()=> {
    getCity = city.value;
    xhr.open("GET",`https://api.openweathermap.org/data/2.5/weather?q=${getCity}&units=metric&appid=3046f294eb3e9763e20d9ed3f9b2430f`);
    xhr.send();
});

let cityTemp;
let cityHum;
let cityWind;

xhr.onload = function() {
    let response = this.responseText;
    // console.log(response);
    let js = JSON.parse(response);
    // console.log(js);
    cityTemp = js.main.temp;
    cityHum = js.main.humidity;
    cityWind = js.wind.speed;
    workAfter();
}














// const apiKey = '3046f294eb3e9763e20d9ed3f9b2430f';
// const apiBase = 'https://api.openweathermap.org/data/2.5/weather';

// const getWeatherData = city => {
//     const url = `${apiBase}?q=${city}&units=metric&appid=${apiKey}`;
//     fetch(url)
//         .then(response => response.json())
//         .then(data => updateUI(data))
// }

