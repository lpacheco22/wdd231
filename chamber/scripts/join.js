const timestampField = document.querySelector("#timestamp");

if (timestampField) {
    timestampField.value = new Date().toISOString();
}


const modalButtons = document.querySelectorAll("[data-modal]");

modalButtons.forEach(button => {

    button.addEventListener("click", () => {

        const modalId = button.dataset.modal;

        const dialog = document.querySelector(`#${modalId}`);

        if (dialog) {
            dialog.showModal();
        }

    });

});


const closeButtons = document.querySelectorAll(".close");

closeButtons.forEach(button => {

    button.addEventListener("click", () => {

        button.closest("dialog").close();

    });

});


const dialogs = document.querySelectorAll("dialog");

dialogs.forEach(dialog => {

    dialog.addEventListener("click", (event) => {

        const rect = dialog.getBoundingClientRect();

        const clickedInside =
            event.clientX >= rect.left &&
            event.clientX <= rect.right &&
            event.clientY >= rect.top &&
            event.clientY <= rect.bottom;

        if (!clickedInside) {
            dialog.close();
        }

    });

});