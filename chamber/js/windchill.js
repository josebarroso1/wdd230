"Current temperature and windspeed indicator in the weather section"

//API URL with arguments  
const url = 'https://api.openweathermap.org/data/2.5/weather?q=Amadora&appid=97afed0ce642913960527cf7b9dd3520&units=metric';
https://api.openweathermap.org/data/2.5/weather?q=Amadora&appid=97afed0ce642913960527cf7b9dd3520&units=metric
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    tempe = data.main.temp;
    wind = data.wind.speed * 3.6;
    currentTemp.innerHTML = `<strong>${tempe.toFixed(1)}</strong>`;
    currentWind.innerHTML = `<strong>${wind.toFixed(1)}</strong>`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
    chill.textContent = `${chillTemperature(tempe,wind)}`;
  });

function chillTemperature(celsius, kmph) {
const fahrenheit = (celsius * 1.8) + 32;
const mph = kmph * 0.62;
let chillfactor = 35.74 + 0.6215 * fahrenheit - 35.75 * mph ** 0.16 + 0.4275 * fahrenheit * mph ** 0.16;
chillfactor = chillfactor.toFixed(1);
if ( fahrenheit > 50 || mph < 3) {
    chilltempe = "N/A";
} else {
    chillCelcius = (5/9)*(chillfactor - 32)
    chilltempe = `${chillCelcius} °C`;
}
return chilltempe
}

