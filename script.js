const person =
{

    name: "Afsah ur Rehman",

    description: "Cloud (AWS, Azure) || Data Engineering || MERN",

    hardSkills: 
    [
        "Cloud Azure", "Data Engineering", "React", "Node.js",
        "Git & GitHub", "Angular", "MongoDB", "C/C++",
        "MySQL", "JavaScript", "Python", "HTML, CSS, Bootstrap"
    ],


    
    softSkills: [
        "Problem Solving", "Communication", "Teamwork"
    ],
    
    education: "BSCS from ITU (2022-2026)",


    experience:
    [
        {
            title: "DigiFloat",
            period: "June 2024 - Aug 2024",
            skills: "Cloud Computing, Data Engineering, Microsoft Azure, Generative AI, Python with PySpark"
        },
        {
            title: "Web Development Intern, TIERS Limited",
            period: "Jun 2023 – Aug 2023",
            skills: "React, MySQL, Node.js, Bootstrap"
        },
        {
            title: "Machine Learning Intern, Codesoft",
            period: "Aug 2023 – Nov 2023",
            skills: "Python with Scikit, Pandas, NumPy"
        },
        {
            title: "Campus Ambassador, Search O Pal",
            period: "Jun 2024 – present",
            location: "Lahore, Pakistan"
        }
    ],
    
    projects: [
        {
            title: "Track Tracer",
            description: "Music app with playlist creation and artist/album exploration. MERN stack: MongoDB, Node.js, Express"
        },
        {
            title: "Search Engine",
            description: "Rapidly scans 300,000+ files, performs search operations with advanced filters"
        },
        {
            title: "Paint",
            description: "MS Paint replica with Python and Tkinter"
        },
        {
            title: "DOS Shell",
            description: "MS-DOS inspired shell using C++ and dynamic data structures"
        },
        {
            title: "Excel-Lite",
            description: "Excel-like app using C++ and SFML for UI"
        },
        {
            title: "2D C++ Games",
            description: "Snake game, Solitaire, Shogi, Ludo, Chess: SFML for the UI"
        }
    ],


    hackathons: [
        {
            name: "CodeRush 2024",
            organization: "Organized by ITU"
        }
    ]
};



document.getElementById("intro_title").textContent = person.name;


document.getElementById("intro_des").textContent = person.description;

const hardSkillsList = document.querySelector("#skills .hard-skills .bulleted-list");

person.hardSkills.forEach(skill => {
    const li = document.createElement("li");
    li.textContent = skill;
    hardSkillsList.appendChild(li);
});

const softSkillsList = document.querySelector("#skills .soft-skills .bulleted-list");


person.softSkills.forEach(skill => {
    const li = document.createElement("li");
    li.textContent = skill;
    softSkillsList.appendChild(li);
});



const educationList = document.querySelector("#education .bulleted-list");
const eduLi = document.createElement("li");
eduLi.innerHTML = `<strong>${person.education}</strong>`;

educationList.appendChild(eduLi);


const experienceList = document.querySelector("#experience .bulleted-list");

person.experience.forEach(job => 
{
    const li = document.createElement("li");
    li.innerHTML = `<strong>${job.title}</strong> (${job.period}): ${job.skills || ''}`;
    experienceList.appendChild(li);
});

const projectsList = document.querySelector("#projects .bulleted-list");
person.projects.forEach(project => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${project.title}</strong>: ${project.description}`;
    projectsList.appendChild(li);
});

const hackathonInfo = document.querySelector("#hackathons .hackathon-info h3");

hackathonInfo.textContent = person.hackathons[0].name;

const hackathonParagraph = document.querySelector("#hackathons .hackathon-info p");
hackathonParagraph.textContent = person.hackathons[0].organization;

function openResume() {
    window.open("res.pdf", "_blank");
}