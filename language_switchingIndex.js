// Translations for the webpage content
const translations = {
    es: {
        heroTitle: "Hola, soy<br>Juan Di Benedetto",
        heroDescription: "Un desarrollador front-end de Buenos Aires, apasionado por crear sitios web accesibles y fáciles de usar.",
        contactButton: "CONTACTAME",
        projectsTitle: "Proyectos en los que participé",
        projectsDescription: "Algunos de los proyectos en los que trabajé",
        project1: {
            title: "Webpage para restaurante local",
            description: "La página web de Espacio San Marcos está diseñada para destacar los servicios y actividades que ofrece este espacio multifuncional, con un enfoque en la claridad, la estética visual y la experiencia del usuario.",
            year: "Año: 2025",
            role: "Rol: Front-end Developer",
            tech: "Tech Stack: HTML, CSS, JavaScript",
        },
        project2: {
            title: "Página web para una empresa de venta de autos",
            description: "Proyecto web de presentación responsive para una empresa del rubro automovilístico.",
            year: "Año: 2025",
            role: "Rol: Front-end Developer",
            tech: "Tech Stack: HTML, CSS, JavaScript",
        },
        project3: {
            title: "Webpage para una empresa de autos usados",
            description: "Este es un sitio para una empresa de autos usados en el que los usuarios pueden cargar sus autos y venderlos.",
            year: "Año: 2022",
            role: "Rol: Front-end Developer",
            tech: "Tech Stack: HTML, CSS, JavaScript, React, NodeJS",
        },
        project4: {
            title: "Proyectos académicos",
            description: "Acá podrás encontrar algunos de los proyectos académicos en los que he participado en mi carrera como ingeniero de sistemas.",
            year: "Año: En curso",
            role: "Rol: Estudiante",
            tech: "Tech Stack: JAVA, Spring, Pascal, etc.",
        },
        
    },
    en: {
        heroTitle: "Hi, I'm<br>Juan Di Benedetto",
        heroDescription: "A front-end developer from Buenos Aires, passionate about creating accessible and user-friendly websites.",
        contactButton: "CONTACT ME",
        projectsTitle: "Projects I've participated in",
        projectsDescription: "Some of the projects I worked on",
        project1: {
            title: "Webpage for a Local Restaurant",
            description: "The website for Espacio San Marcos is designed to showcase the services and activities offered by this multifunctional space, focusing on clarity, visual aesthetics, and user experience.",
            year: "Year: 2025",
            role: "Role: Front-end Developer",
            tech: "Tech Stack: HTML, CSS, JavaScript",
        },
        project2: {
            title: "Website for a Car Sales Company",
            description: "A responsive presentation website for a company in the automotive industry.",
            year: "Year: 2025",
            role: "Role: Front-end Developer",
            tech: "Tech Stack: HTML, CSS, JavaScript",
        },
        project3: {
            title: "Webpage for a Used Car Company",
            description: "This is a site for a used car company where users can upload and sell their cars.",
            year: "Year: 2022",
            role: "Role: Front-end Developer",
            tech: "Tech Stack: HTML, CSS, JavaScript, React, NodeJS",
        },
        project4: {
            title: "Academic Projects",
            description: "Here you can find some of the academic projects I have participated in during my career as a systems engineer.",
            year: "Year: Ongoing",
            role: "Role: Student",
            tech: "Tech Stack: JAVA, Spring, Pascal, etc.",
        },
    },
};

// Function to update text based on selected language
function translatePage(language) {
    document.querySelector(".hero-text h1").innerHTML = translations[language].heroTitle;
    document.querySelector(".hero-text p").textContent = translations[language].heroDescription;
    document.querySelector(".contact-button").textContent = translations[language].contactButton;

    document.querySelector("#featured-projects h2").textContent = translations[language].projectsTitle;
    document.querySelector("#featured-projects p").textContent = translations[language].projectsDescription;

    const projectElements = document.querySelectorAll(".project");
    const projects = translations[language];

    projectElements[0].querySelector("h3").textContent = projects.project1.title;
    projectElements[0].querySelector("p").textContent = projects.project1.description;
    projectElements[0].querySelector(".project-info").innerHTML = `
        <div class="info-bar">${projects.project1.year}</div>
        <div class="info-bar">${projects.project1.role}</div>
        <div class="info-bar">${projects.project1.tech}</div>`;

    projectElements[1].querySelector("h3").textContent = projects.project2.title;
    projectElements[1].querySelector("p").textContent = projects.project2.description;
    projectElements[1].querySelector(".project-info").innerHTML = `
        <div class="info-bar">${projects.project2.year}</div>
        <div class="info-bar">${projects.project2.role}</div>
        <div class="info-bar">${projects.project2.tech}</div>`;

    projectElements[2].querySelector("h3").textContent = projects.project3.title;
    projectElements[2].querySelector("p").textContent = projects.project3.description;
    projectElements[2].querySelector(".project-info").innerHTML = `
        <div class="info-bar">${projects.project3.year}</div>
        <div class="info-bar">${projects.project3.role}</div>
        <div class="info-bar">${projects.project3.tech}</div>`;

    projectElements[3].querySelector("h3").textContent = projects.project4.title;
    projectElements[3].querySelector("p").textContent = projects.project4.description;
    projectElements[3].querySelector(".project-info").innerHTML = `
        <div class="info-bar">${projects.project4.year}</div>
        <div class="info-bar">${projects.project4.role}</div>
        <div class="info-bar">${projects.project4.tech}</div>`;
}

// Add event listeners to the flags
document.getElementById("es-flag").addEventListener("click", () => translatePage("es"));
document.getElementById("en-flag").addEventListener("click", () => translatePage("en"));
