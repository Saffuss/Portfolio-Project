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
    document.addEventListener("click", next);
}

changeProject();