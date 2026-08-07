const year = new Date().getFullYear();
const yearElement = document.querySelector("#currentYear");
if (yearElement) {
    yearElement.textContent = year;
}

const modifiedElement = document.querySelector("#lastModified");
if (modifiedElement) {
    modifiedElement.textContent =
        `Last Modified: ${document.lastModified}`;

}