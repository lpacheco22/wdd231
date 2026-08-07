const form = document.querySelector("form");
if (form) {
    form.addEventListener("submit", savePlan);
}

function savePlan() {
    const plan = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        destination: document.querySelector("#destination").value,
        month: document.querySelector("#month").value,
        travelers: document.querySelector("#travelers").value,
        comments: document.querySelector("#comments").value
    };

    localStorage.setItem(
        "lastTripPlan",
        JSON.stringify(plan)
    );


}