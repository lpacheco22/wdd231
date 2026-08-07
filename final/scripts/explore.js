import { saveFavorite, getFavorites } from "./storage.js";
const cardsContainer = document.querySelector("#destination-cards");
const dialog = document.querySelector("#detailsDialog");
const dialogContent = document.querySelector("#dialogContent");
const closeDialog = document.querySelector("#closeDialog");
const searchInput = document.querySelector("#search");
const filterButtons = document.querySelectorAll("[data-category]");
let destinations = [];

async function getDestinations() {
    try {
        const response = await fetch("data/nature.json");
        if (!response.ok) {
            throw new Error("Unable to load destination data");
        }

        destinations = await response.json();
        displayDestinations(destinations);

    } catch (error) {
        cardsContainer.innerHTML = `
            <p>
                Sorry, the destination information could not be loaded.
            </p>
        `;

        console.log(error);
    }
}

function displayDestinations(items) {
    cardsContainer.innerHTML = "";
    items.forEach(destination => {
        const card = document.createElement("article");
        card.classList.add("card");
        card.innerHTML = `

            <img 
                src="${destination.image}"
                alt="${destination.name}"
                width="600"
                height="400"
                loading="lazy">

            <h2>${destination.name}</h2>
            <p>
                <strong>Category:</strong>
                ${destination.category}
            </p>
            <p>
                <strong>Province:</strong>
                ${destination.province}
            </p>
            <p>
                <strong>Elevation:</strong>
                ${destination.elevation}
            </p>
            <button class="details" type="button">
                View Details
            </button>

            <button class="favorite" type="button">
                Add Favorite
            </button>
        `;

        cardsContainer.appendChild(card);

        const detailsButton = card.querySelector(".details");
        detailsButton.addEventListener("click", () => {
            openModal(destination);

        });

        const favoriteButton = card.querySelector(".favorite");
        favoriteButton.addEventListener("click", () => {
            saveFavorite(destination);
            favoriteButton.textContent = "Saved";

        });

    });
}

function openModal(destination) {
    dialogContent.innerHTML = `
        <h2>${destination.name}</h2>
        <p>
            ${destination.description}
        </p>
        <p>
            <strong>Location:</strong>
            ${destination.province}
        </p>
        <p>
            <strong>Elevation:</strong>
            ${destination.elevation}
        </p>
        <p>
            <strong>Category:</strong>
            ${destination.category}
        </p>

    `;

    dialog.showModal();
}

closeDialog.addEventListener("click", () => {
    dialog.close();

});

searchInput.addEventListener("input", () => {
    const searchText = searchInput.value.toLowerCase();
    const filtered = destinations.filter(destination =>
        destination.name.toLowerCase().includes(searchText)

    );

    displayDestinations(filtered);

});

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const category = button.dataset.category;

        if (category === "all") {

            displayDestinations(destinations);

        } else {

            const filtered = destinations.filter(destination =>
                destination.category === category

            );

            displayDestinations(filtered);

        }

    });

});

const savedFavorites = getFavorites();
console.log("Saved favorites:", savedFavorites);

getDestinations();