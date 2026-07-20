const year = document.querySelector("#year");
const lastModified = document.querySelector("#lastModified");

year.textContent = new Date().getFullYear();
lastModified.textContent = `Last Modified: ${document.lastModified}`;

async function loadSpotlights() {

    try {

        const response = await fetch("data/members.json");

        if (!response.ok) {
            throw new Error("Unable to load member data.");
        }

        const members = await response.json();

        // Only Gold and Silver members
        const qualified = members.filter(member =>
            member.membership === "Gold" ||
            member.membership === "Silver"
        );

        // Shuffle the array
        qualified.sort(() => Math.random() - 0.5);

        // Show only 3 members
        const selected = qualified.slice(0, 3);

        displaySpotlights(selected);

    }

    catch (error) {
        console.error(error);
    }

}


function displaySpotlights(members) {

    const container = document.querySelector("#spotlights");

    container.innerHTML = "";

    members.forEach(member => {

        const card = document.createElement("section");

        card.classList.add("spotlight-card");

        card.innerHTML = `
            <img src="${member.logo}"
                 alt="${member.name} Logo"
                 loading="lazy">

            <h3>${member.name}</h3>

            <p><strong>Phone:</strong> ${member.phone}</p>

            <p><strong>Address:</strong> ${member.address}</p>

            <p><strong>Membership:</strong> ${member.membership}</p>

            <p>
                <a href="${member.website}" target="_blank">
                    Visit Website
                </a>
            </p>
        `;

        container.appendChild(card);

    });

}

loadSpotlights();