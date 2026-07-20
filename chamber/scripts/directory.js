document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
});

const membersContainer = document.querySelector("#members");
const url = "data/members.json";

async function getMembers() {

    try {

        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Unable to load member data.");
        }

        const members = await response.json();
        displayMembers(members);

    }

    catch (error) {

        console.error(error);
        membersContainer.innerHTML =
            "<p>Unable to load Chamber members.</p>";

    }

}

getMembers();


function displayMembers(members) {

    membersContainer.innerHTML = "";

    members.forEach(member => {

        const card = document.createElement("section");

        const image = document.createElement("img");

        image.src = `images/${member.image}`;
        image.alt = `${member.name} logo`;
        image.loading = "lazy";
        image.width = 200;
        image.height = 200;

        const company = document.createElement("h3");

        company.textContent = member.name;

       const address = document.createElement("p");

        address.innerHTML =
            `<strong>Address:</strong> ${member.address}`;

        const phone = document.createElement("p");
        phone.innerHTML =
            `<strong>Phone:</strong> ${member.phone}`;

        const website = document.createElement("p");
        const link = document.createElement("a");

        link.href = member.website;
        link.target = "_blank";
        link.textContent = member.website.replace("https://", "");
        website.appendChild(link);

        

        const membership = document.createElement("p");
        let level = "";

        switch (member.membership) {

            case 1:
                level = "Member";
                break;

            case 2:
                level = "Silver Member";
                break;

            case 3:
                level = "Gold Member";
                break;

            default:
                level = "Member";

        }

        membership.innerHTML =
            `<strong>Membership:</strong> ${level}`;

        

        const description = document.createElement("p");
        description.textContent = member.description;

        

        card.appendChild(image);
        card.appendChild(company);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(membership);
        card.appendChild(description);
        membersContainer.appendChild(card);

    });

}




const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");

gridButton.addEventListener("click", () => {

    membersContainer.classList.add("grid");
    membersContainer.classList.remove("list");

});


listButton.addEventListener("click", () => {

    membersContainer.classList.add("list");
    membersContainer.classList.remove("grid");

});