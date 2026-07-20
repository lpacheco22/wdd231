export function setSectionSelection(sections) {

    const sectionSelect = document.querySelector("#sectionNumber");

    sections.forEach(function (section) {

        const option = document.createElement("option");
        option.value = section.sectionNumber;
        option.textContent = section.sectionNumber;
        sectionSelect.appendChild(option);

    });

}