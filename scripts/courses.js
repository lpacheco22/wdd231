
const courses = [
    {
        subject: "CSE",
        number: 110,
        title: "Introduction to Programming",
        credits: 2,
        certificate: "Web and Computer Programming",
        description: "Introduction to programming using c#.",
        technology: ["c#"],
        completed: true
    },
    {
        subject: "WDD",
        number: 130,
        title: "Web Fundamentals",
        credits: 2,
        certificate: "Web and Computer Programming",
        description: "Learn HTML and CSS to build web pages.",
        technology: ["HTML", "CSS"],
        completed: true
    },
    {
        subject: "CSE",
        number: 111,
        title: "Programming with Functions",
        credits: 2,
        certificate: "Web and Computer Programming",
        description: "Learn functions, loops, and problem solving.",
        technology: ["C#"],
        completed: true
    },
    {
        subject: "CSE",
        number: 210,
        title: "Programming with Classes",
        credits: 2,
        certificate: "Web and Computer Programming",
        description: "Learn object-oriented programming using classes.",
        technology: ["C#"],
        completed: true
    },
    {
        subject: "WDD",
        number: 131,
        title: "Dynamic Web Fundamentals",
        credits: 2,
        certificate: "Web and Computer Programming",
        description: "Build interactive websites with JavaScript.",
        technology: ["HTML", "CSS", "JavaScript"],
        completed: true
    },
    {
        subject: "WDD",
        number: 231,
        title: "Frontend Web Development I",
        credits: 2,
        certificate: "Web and Computer Programming",
        description: "Create responsive websites using HTML, CSS, and JavaScript.",
        technology: ["HTML", "CSS", "JavaScript"],
        completed: false
    }
];


const courseContainer = document.querySelector("#courses");
const totalCredits = document.querySelector("#totalCredits");

const allButton = document.querySelector("#all");
const wddButton = document.querySelector("#wdd");
const cseButton = document.querySelector("#cse");

const courseDetails = document.querySelector("#course-details");



function displayCourses(courseList) {

    courseContainer.innerHTML = "";

    courseList.forEach(course => {

        const card = document.createElement("div");

        card.classList.add("course-card");

        if (course.completed) {
            card.classList.add("completed");
        }

        card.innerHTML = `
            <h3>${course.subject} ${course.number}</h3>
            <p>${course.title}</p>
            <p>${course.credits} Credits</p>
        `;

        
        card.addEventListener("click", () => {
            displayCourseDetails(course);
        });

        courseContainer.appendChild(card);

    });

    calculateCredits(courseList);

}



function calculateCredits(courseList) {

    const credits = courseList.reduce((sum, course) => {
        return sum + course.credits;
    }, 0);
    totalCredits.textContent = credits;

}



function displayCourseDetails(course) {

    courseDetails.innerHTML = `
        <button id="closeModal">❌</button>

        <h2>${course.subject} ${course.number}</h2>

        <h3>${course.title}</h3>

        <p><strong>Credits:</strong> ${course.credits}</p>

        <p><strong>Certificate:</strong> ${course.certificate}</p>

        <p>${course.description}</p>

        <p><strong>Technologies:</strong> ${course.technology.join(", ")}</p>
    `;

    courseDetails.showModal();

    document.querySelector("#closeModal").addEventListener("click", () => {
        courseDetails.close();
    });

}



courseDetails.addEventListener("click", (event) => {

    const rect = courseDetails.getBoundingClientRect();

    if (
        event.clientX < rect.left ||
        event.clientX > rect.right ||
        event.clientY < rect.top ||
        event.clientY > rect.bottom
    ) {
        courseDetails.close();
    }

});


allButton.addEventListener("click", () => {
    displayCourses(courses);
});

wddButton.addEventListener("click", () => {

    const filtered = courses.filter(course => course.subject === "WDD");

    displayCourses(filtered);

});

cseButton.addEventListener("click", () => {

    const filtered = courses.filter(course => course.subject === "CSE");

    displayCourses(filtered);

});


displayCourses(courses);