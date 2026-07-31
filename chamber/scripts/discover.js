import { places } from "../data/discover.mjs";

const cards = document.querySelector("#discover-cards");
places.forEach((place, index) => {

    const card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("card");
    card.classList.add(`card${index + 1}`);

    const title = document.createElement("h2");
    title.textContent = place.name;

    const figure = document.createElement("figure");

    const image = document.createElement("img");
    image.src = place.image;
    image.alt = `Photo of ${place.name}`;
    image.loading = "lazy";
    image.decoding = "async";
    image.width = 300;
    image.height = 200;
    figure.appendChild(image);

    const address = document.createElement("address");
    address.textContent = place.address;

    const description = document.createElement("p");
    description.textContent = place.description;

    const button = document.createElement("button");
    button.textContent = "Learn More";
    button.addEventListener("click", () => {
        window.open(place.url, "_blank");
    });

    card.appendChild(title);
    card.appendChild(figure);
    card.appendChild(address);
    card.appendChild(description);
    card.appendChild(button);
    cards.appendChild(card);

});

const message = document.querySelector("#visit-message");

const lastVisit = Number(localStorage.getItem("lastVisit"));

const today = Date.now();

if (!lastVisit) {
    message.textContent =
        "Welcome! Let us know if you have any questions.";

}
    else {
    const daysBetween = Math.floor(
        (today - lastVisit) / (1000 * 60 * 60 * 24)
    );

    if (daysBetween < 1) {
        message.textContent =
            "Back so soon! Awesome!";

    } else if (daysBetween === 1) {
        message.textContent =
            "You last visited 1 day ago.";

    } else {
        message.textContent =
            `You last visited ${daysBetween} days ago.`;

    }

}

localStorage.setItem("lastVisit", today);

document.querySelector("#currentyear").textContent =
    new Date().getFullYear();

document.querySelector("#lastModified").textContent =
    `Last Modified: ${document.lastModified}`;