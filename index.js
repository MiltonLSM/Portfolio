let i = 0;
let txt = "Welcome to my site!";
let speed = 100;
let textSpot = document.getElementById("main-title");
let cursorSpot = document.getElementById("cursor");

function resetText() {
  textSpot.classList.remove("main-title");
  textSpot.innerHTML = "";
  i = 0;
  cursorSpot.innerHTML = "|";
  setTimeout(typeWriter, speed);
}

function typeWriter() {
  if (i < txt.length) {
    cursorSpot.innerHTML = "";
    cursorSpot.style.marginLeft = 0;
    textSpot.classList.add("main-title");
    textSpot.innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(resetText, 9000);
  }
}

function writingText() {
  cursorSpot.classList.remove("title-animation");
  cursorSpot.offsetWidth;
  cursorSpot.classList.add("title-animation");
  window.addEventListener("animationend", typeWriter);
}

window.addEventListener("load", writingText);

// ***************** PROJECTS DESCRIPTION ******************* //

const projectList = {
  projects: [
    {
      id: "portfolio-btn",
      name: "Portfolio",
      description:
        "In this project you can find some of the latest projects I have built, along with some personal information and some of my skills. This project was build from scratch using html, scss, and vanilla JavaScript.",
        link: "Visit website",
        website: "https://milton-portfolio.netlify.app/",
    },
    {
      id: "password-manager-btn",
      name: "Password manager",
      description:
        "This project is a website in which the users can sign up and then they can store their passwords. The website can create passwords of 15 random characters. The passwords are save encrypted in the database. This project was build using python (Flask), scss, bootstrap, html, and vanilla JavaScript.",
      link: "Visit website",
      website: "https://pass-manager-16hl.onrender.com/",
    },
    {
      id: "message-sender-btn",
      name: "Message sender",
      description:
        "This project was developed using python and some libraries such as beautiful soup and selenium. Here when you run the code, it goes to Schoology, look for the people you want to send the message, write the message and send it.",
      link: "See code",
      website: "https://milton-portfolio.netlify.app/",
    },
    {
      id: "random-groups-btn",
      name: "Random groups",
      description:
        "This project was developed using python. At present it is in row code. The goal of the code is to create groups, taking into account the input of the user in which each person can choose four people they want to be with in the group and the code try to find groups in which each person is at least with one of the people the chose.",
      link: "",
      website: "",
    },
  ],
};

const projectsDescriptionsDiv = document.getElementById("portfolio");

function projectInfo(e) {
  for (let i = 0; i < projectList["projects"].length; i++) {
    if (e.target.id === projectList["projects"][i]["id"]) {
      document.getElementById("project-info-title").innerHTML =
        projectList["projects"][i]["name"];
      document.getElementById("project-info-description").innerHTML =
        projectList["projects"][i]["description"];
      document.getElementById("project-info-link").innerHTML =
        projectList["projects"][i]["link"];
      document.getElementById("project-info-link").setAttribute('href', projectList["projects"][i]["website"]);
    }
  }
}

const projectButtons = document.querySelectorAll(".projects__button");

for (let i = 0; i < projectButtons.length; i++) {
  projectButtons[i].addEventListener("click", projectInfo);
}

function responsiveMenu() {
  var x = document.getElementById("responsive-menu");
  if (x.className === "header__responsive-link-list") {
    x.className += " header__toggle-menu";
  } else {
    x.className = "header__responsive-link-list";
  }
}

function hideMenu() {
  var x = document.getElementById("responsive-menu");
  x.className = "header__responsive-link-list";
}

document
  .querySelector(".header__menu-icon")
  .addEventListener("click", responsiveMenu);
