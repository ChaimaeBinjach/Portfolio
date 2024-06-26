import { introductionData, skillsData, projectsData, aboutMeData } from '../data/data.js';

function renderIntroduction() {
    const $windowNameApresentation = document.querySelector(".header-apresentation");
    $windowNameApresentation.innerHTML = `Hi, my name is <span class="gradient">${introductionData.yourName}</span>`;

    const $windowIconSocialNetworks = document.querySelector(".header-icons");
    $windowIconSocialNetworks.innerHTML = introductionData.socialNetwork.map((data) => {
        return `
            <a class="icon gradient fade" aria-label="${data.nameSocialNetwork}" target="_blank" href="${data.url}">
                <i class="${data.icon}"></i>
            </a>
        `;
    }).join("");

    const $windowNav = document.querySelector(".nav");
    $windowNav.innerHTML = introductionData.nav.map((data) => {
        return `
            <a class="btn" href="#${data.idSection}">
                ${data.optionNav}
            </a>
        `;
    }).join("");
}

function renderAboutMe() {
    const $windowAboutMe = document.querySelector(".section-style");
    $windowAboutMe.innerHTML = `
        <div class="container">
            <h2 class="section-title">${aboutMeData.title}</h2>
            <div class="description">
                <p>${aboutMeData.description}</p>
            </div>
            <section class="buttons">
                <div class="container-btn">
                    <a href="${aboutMeData.urlCV}" class="btn-cv btn-1">
                        <svg><rect x="0" y="0" fill="none" width="100%" height="100%" /></svg>
                        ${aboutMeData.titleURL}
                    </a>
                </div>
            </section>
        </div>
    `;
}

function renderSkills() {
    const $windowSkills = document.querySelector(".cards-main");
    $windowSkills.innerHTML = skillsData.map((data) => {
        return `
            <div class="card shadow">
                <div>
                    <img class="img-card" src="${data.img}" alt="logo python">
                    <p>${data.nameSkill}</p>
                </div>
            </div>
        `;
    }).join("");
}

function renderProjects() {
    const $windowProject = document.querySelector(".projects-main");
    $windowProject.innerHTML = projectsData.map((data) => {
        return `
            <div class="project">
                <div class="project-informations" data-aos="fade-right">
                    <h3>${data.title}</h3>
                    <p>${data.describe}</p>
                    <div class="wrapper">
                        <div class="link_wrapper">
                            <a href="${data.url}">View Project</a>
                            <div class="project-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 268.832 268.832">
                                    <path d="M265.17 125.577l-80-80c-4.88-4.88-12.796-4.88-17.677 0-4.882 4.882-4.882 12.796 0 17.678l58.66 58.66H12.5c-6.903 0-12.5 5.598-12.5 12.5 0 6.903 5.597 12.5 12.5 12.5h213.654l-58.66 58.662c-4.88 4.882-4.88 12.796 0 17.678 2.44 2.44 5.64 3.66 8.84 3.66s6.398-1.22 8.84-3.66l79.997-80c4.883-4.882 4.883-12.796 0-17.678z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="project-img" data-aos="fade-left">
                    <img class="shadow" src="${data.img}" alt="code">
                </div>
            </div>
        `;
    }).join("");
}

function render() {
    renderIntroduction();
    renderAboutMe();
    renderSkills();
    renderProjects();
}

render();
