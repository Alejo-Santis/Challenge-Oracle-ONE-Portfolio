const selectedLink = (link) => {
    const option = document.querySelectorAll("#links a");
    
    option[0].className = "";
    option[1].className = "";
    option[2].className = "";
    option[3].className = "";
    option[4].className = "";
    option[5].className = "";
    link.className = "selected";
    
    const navMenu = document.getElementById("nav");
    navMenu.className = "";
}

const responsiveMenu = () => {
    const navMenu = document.getElementById("nav");
    navMenu.className === "" ? navMenu.className = "responsive" : navMenu.className = "";
}

window.onscroll = () => {
    skillsEfect();
};

const skillsEfect = () => {
    const skills = document.getElementById("skills");
    const bar_skills = window.innerHeight = skills.getBoundingClientRect().top;
    if(bar_skills >= 300) {
        document.getElementById("html").classList.add("progress-bar-html");
        document.getElementById("css").classList.add("progress-bar-css");
        document.getElementById("js").classList.add("progress-bar-js");
        document.getElementById("react").classList.add("progress-bar-react");
        document.getElementById("php").classList.add("progress-bar-php");
        document.getElementById("laravel").classList.add("progress-bar-laravel");
        document.getElementById("mysql").classList.add("progress-bar-mysql");
    }
}