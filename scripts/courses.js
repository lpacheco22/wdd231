// ================================
// courses.js
// WDD231 Week 01
// ================================

// Course Array
const courses = [
    {
        subject: "CSE",
        number: 110,
        title: "Introduction to Programming",
        credits: 2,
        certificate: "Web and Computer Programming",
        completed: true
    },
    {
        subject: "WDD",
        number: 130,
        title: "Web Fundamentals",
        credits: 2,
        certificate: "Web and Computer Programming",
        completed: true
    },
    {
        subject: "CSE",
        number: 111,
        title: "Programming with Functions",
        credits: 2,
        certificate: "Web and Computer Programming",
        completed: true
    },
    {
        subject: "CSE",
        number: 210,
        title: "Programming with Classes",
        credits: 2,
        certificate: "Web and Computer Programming",
        completed: false
    },
    {
        subject: "WDD",
        number: 131,
        title: "Dynamic Web Fundamentals",
        credits: 2,
        certificate: "Web and Computer Programming",
        completed: true
    },
    {
        subject: "WDD",
        number: 231,
        title: "Frontend Web Development I",
        credits: 2,
        certificate: "Web and Computer Programming",
        completed: false
    }
];

// HTML Elements
const courseContainer = document.querySelector("#courses");
const totalCredits = document.querySelector("#totalCredits");

const allButton = document.querySelector("#all");
const wddButton = document.querySelector("#wdd");
const cseButton = document.querySelector("#cse");

// ================================
// Display Courses
// ================================

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

        courseContainer.appendChild(card);

    });

    calculateCredits(courseList);

}

// ================================
// Credits Total
// ================================

function calculateCredits(courseList) {

    const credits = courseList.reduce((sum, course) => {
        return sum + course.credits;
    }, 0);

    totalCredits.textContent = credits;

}

// ================================
// Filter Buttons
// ================================

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

// ================================
// Initial Display
// ================================

displayCourses(courses);