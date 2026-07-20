const apiKey = "8882bf0b9151c9841b7b332c6be5abae";
const url = `https://api.openweathermap.org/data/2.5/forecast?q=Guayaquil,EC&units=metric&appid=${8882bf0b9151c9841b7b332c6be5abae}`;

async function getWeather() {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Weather data not available.");
        }

        const data = await response.json();
        displayCurrentWeather(data);
        displayForecast(data);

    } catch (error) {
        document.querySelector("#current-weather").innerHTML =
            "<p>Unable to load weather information.</p>";

        console.error(error);
    }
}

function displayCurrentWeather(data) {

    const weather = document.querySelector("#current-weather");

    weather.innerHTML = `
    <p> <strong>Temperature:</strong> ${ Math.round(data.list[0].main.temp) }°C</p >
        <p><strong>Condition:</strong> ${capitalize(data.list[0].weather[0].description)}</p>
        <p><strong>Humidity:</strong> ${data.list[0].main.humidity}%</p>
    `;
}

function displayForecast(data) {

    const forecast = document.querySelector("#forecast");
    forecast.innerHTML = "";
    
    const dailyForecast = data.list.filter(item =>
        item.dt_txt.includes("12:00:00")
    );

    for (let i = 0; i < 3; i++) {

        const day = dailyForecast[i];
        const date = new Date(day.dt_txt);
        const weekday = date.toLocaleDateString("en-US", {
            weekday: "long"
        });

        const card = document.createElement("p");

        card.innerHTML = `
            <strong>${weekday}</strong>:
            ${Math.round(day.main.temp)}°C
        `;

        forecast.appendChild(card);
    }

}

function capitalize(text) {

    return text
        .split(" ")
        .map(word =>
            word.charAt(0).toUpperCase() +
            word.slice(1)
        )
        .join(" ");
}

getWeather();