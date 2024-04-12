/*function changeText() {
    document.getElementById("about").textContent = "HEHEHEH";
    document.getElementById("about").removeEventListener("click", changeText);
}

function changeAbout() {
    document.getElementById("about").addEventListener("click", changeText);
}

changeAbout();

const project1 = document.getElementById("project-1");
const project2 = document.getElementById("project-2");
const project3 = document.getElementById("project-3");


// JavaScript
document.addEventListener("DOMContentLoaded", function() {
    let projects = document.querySelectorAll(".project");
    let currentProjectIndex = 0;

    function showProject(index) {
        // Hide all projects
        projects.forEach(project => {
            project.style.display = "none";
        });
        // Show the project at the specified index
        projects[index].style.display = "block";
    }

    function switchProject() {
        currentProjectIndex++;
        if (currentProjectIndex >= projects.length) {
            currentProjectIndex = 0; // Reset index if it exceeds the number of projects
        }
        showProject(currentProjectIndex);
    }

    // Initial call to show the first project
    showProject(currentProjectIndex);

    // Automatically switch projects every 3 seconds (3000 milliseconds)
    setInterval(switchProject, 3000);
});*/

function changeProject() {
    let project = document.querySelectorAll(".project");
    let currentProjectIndex = 0;

    function thing(index) {
        project.forEach(proj => {
            proj.style.display = "none";
        });
        project[index].style.display = "block";
    }

    function next() {
        currentProjectIndex++;
        if (currentProjectIndex >= project.length) {
            currentProjectIndex = 0;
        }
        thing(currentProjectIndex);
    }

    thing(currentProjectIndex);
    document.addEventListener("click", next());
}

document.addEventListener("click", changeProject);