const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const URL = 'https://api.openweathermap.org/data/2.5/weather?q=Amadora&appid=97afed0ce642913960527cf7b9dd3520&units=metric';

apiFetch(URL);

async function apiFetch(apiURL){
    
        const response = await fetch(apiURL);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else{
            throw Error(await response.text());
        }
    
}

function displayResults(weatherData){
    currentTemp.innerHTML= weatherData.main.temp.toFixed(1);
}