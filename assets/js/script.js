// Universal variables first
var projectsBtn = document.querySelector(".projects-button");
var aboutBtn = document.querySelector(".about-button");
var contactBtn = document.querySelector(".contact-button");
var projectsSection = document.querySelector(".projects-section");
var aboutSection = document.querySelector(".about-section");
var contactSection = document.querySelector(".contact-section");


projectsBtn.addEventListener("click", hideAllButProjects);
aboutBtn.addEventListener("click", hideAllButAbout);
contactBtn.addEventListener("click", hideAllButContact);


//Initial screenload
document.addEventListener('DOMContentLoaded', hideContainers);

function hideContainers() {
    // Initially hide the other containers except projects
    projectsSection.style.display = 'block';
    aboutSection.style.display = 'none';
    contactSection.style.display = 'none';
}


function hideAllButProjects() {
    projectsSection.style.display = 'block';
    aboutSection.style.display = 'none';
    contactSection.style.display = 'none';
}

function hideAllButAbout() {
    aboutSection.style.display = 'block';
    projectsSection.style.display = 'none';
    contactSection.style.display = 'none';
}

function hideAllButContact() {
    contactSection.style.display = 'block';
    projectsSection.style.display = 'none';
    aboutSection.style.display = 'none';
}
