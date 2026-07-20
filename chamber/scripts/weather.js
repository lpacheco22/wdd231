const apiKey = "8882bf0b9151c9841b7b332c6be5abae";
const lat = -2.170998;
const lon = -79.922359;

const currentURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

const forecastURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

async function getWeather() {

    try {

        const currentResponse = await fetch(currentURL);

        if (!currentResponse.ok) {
            throw new Error("Current weather not found.");
        }

        const currentData = await currentResponse.json();

        displayCurrentWeather(currentData);


        const forecastResponse = await fetch(forecastURL);

        if (!forecastResponse.ok) {
            throw new Error("Forecast not found.");
        }

        const forecastData = await forecastResponse.json();

        displayForecast(forecastData);

    }

    catch (error) {

        console.error(error);

        document.querySelector("#current-weather").textContent =
            "Weather information unavailable.";

    }

}

function displayCurrentWeather(data) {

    const weather = document.querySelector("#current-weather");

    weather.innerHTML = `
        <p><strong>Temperature:</strong> ${Math.round(data.main.temp)}°C</p>
        <p><strong>Condition:</strong> ${capitalize(data.weather[0].description)}</p>
    `;

}

function displayForecast(data) {

    const forecast = document.querySelector("#forecast");

    forecast.innerHTML = "";

    const daily = data.list.filter(item =>
        item.dt_txt.includes("12:00:00")
    );

    for (let i = 0; i < 3; i++) {

        const day = daily[i];

        const date = new Date(day.dt_txt);

        const weekday = date.toLocaleDateString("en-US", {
            weekday: "long"
        });

        forecast.innerHTML += `
            <p>
                <strong>${weekday}</strong>: ${Math.round(day.main.temp)}°C
            </p>
        `;

    }

}

function capitalize(text) {

    return text.replace(/\b\w/g, letter => letter.toUpperCase());

}

getWeather();