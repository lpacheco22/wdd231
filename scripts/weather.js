const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const description = document.querySelector("#description");


const url =
    "https://api.openweathermap.org/data/2.5/weather?lat=-2.19&lon=-79.89&units=metric&appid=8882bf0b9151c9841b7b332c6be5abae";



async function apiFetch() {

    try {

        const response = await fetch(url);


        if (response.ok) {

            const data = await response.json();

            console.log(data);


            displayResults(data);

        }

        else {

            throw Error(await response.text());

        }


    }

    catch (error) {

        console.log(error);

    }

}



function displayResults(data) {


    
    let temp = Math.round(data.main.temp);


    currentTemp.textContent = `${temp}°C`;


    const icon = data.weather[0].icon;


    weatherIcon.setAttribute(
        "src",
        `https://openweathermap.org/img/wn/${icon}@2x.png`
    );


    weatherIcon.setAttribute(
        "alt",
        data.weather[0].description
    );


    description.textContent =
        data.weather[0].description;


}



apiFetch();