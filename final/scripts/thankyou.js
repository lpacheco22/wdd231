const results = document.querySelector("#results");
const params = new URLSearchParams(window.location.search);
const name = params.get("name");
const email = params.get("email");
const destination = params.get("destination");
const month = params.get("month");
const travelers = params.get("travelers");
const comments = params.get("comments");

results.innerHTML = `
    <p>
        <strong>Name:</strong>
        ${name}
    </p>
    <p>
        <strong>Email:</strong>
        ${email}
    </p>
    <p>
        <strong>Destination:</strong>
        ${destination}
    </p>
    <p>
        <strong>Travel Month:</strong>
        ${month}
    </p>
    <p>
        <strong>Number of Travelers:</strong>
        ${travelers}
    </p>
    <p>
        <strong>Additional Comments:</strong>
        ${comments}
    </p>

`;