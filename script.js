const next = document.getElementById('next-button')
const wrapper = document.querySelector(".projects-wrapper")

let num = 0;
let projects = [
    {
        projectName:"Roman Numeral Converter",
        img:"imgs/roman-numeral-converter.png",
        link:"https://ayoub-younes.github.io/a-roman-numeral-converter"
    },
    {
        projectName:"Telephone Number Validator",
        img:"imgs/telephone-number-validator.png",
        link:"https://ayoub-younes.github.io/telephone-number-validator"
    },
    {
        projectName:"Cash Register",
        img:"imgs/cash-register.png",
        link:"https://ayoub-younes.github.io/cash-register"
    },
    {
        projectName:"Pokemon Search App",
        img:"imgs/pokemon-search-app.png",
        link:"https://ayoub-younes.github.io/pokemon-search-app"
    },
    {
        projectName:"Random Quote Machine",
        img:"imgs/random-quote-machine.png",
        link:"https://ayoub-younes.github.io/random-quote-machine"
    },
    {
        projectName:"Markdown Previewer",
        img:"imgs/markdown-previewer.png",
        link:"https://ayoub-younes.github.io/markdown-previewer"
    },
    {
        projectName:"Drum-Machine",
        img:"imgs/drum-machine.png",
        link:"https://ayoub-younes.github.io/drum-machine"
    },
    {
        projectName:"JavaScript Calculator",
        img:"imgs/javaScript-calculator.png",
        link:"https://ayoub-younes.github.io/javaScript-calculator"
    },
    {
        projectName:"A 25 + 5 clock",
        img:"imgs/a-25--5-clock.png",
        link:"https://ayoub-younes.github.io/a-25--5-clock"
    },
    {
        projectName:"United States GDP",
        img:"imgs/united-states-gdp.png",
        link:"https://ayoub-younes.github.io/united-states-gdp"
    },
    {
        projectName:"Doping in Professional Bicycle Racing",
        img:"imgs/doping-in-professional-bicycle-racing.png",
        link:"https://ayoub-younes.github.io/doping-in-professional-bicycle-racing"
    },
    {
        projectName:"Monthly Global Land-Surface Temperature",
        img:"imgs/monthly-global-land-surface-temperature.png",
        link:"https://ayoub-younes.github.io/monthly-global-land-surface-temperature"
    },
    {
        projectName:"United States Educational Attainment",
        img:"imgs/united-states-educational-attainment.png",
        link:"https://ayoub-younes.github.io/united-states-educational-attainment"
    },
    {
        projectName:"Video Game Sales",
        img:"imgs/video-game-sales.png",
        link:"https://ayoub-younes.github.io/video-game-sales"
    },
    {
        projectName:"Timestamp",
        img:"imgs/timestamp.png",
        link:"https://ayoub-younes-timestamp.glitch.me"
    },
    {
        projectName:"Request Header Parser",
        img:"imgs/headerparser.png",
        link:"https://ayoub-younes-headerparser.glitch.me"
    },
    {
        projectName:"URL Shortener",
        img:"imgs/url-shortener.png",
        link:"https://ayoub-younes-url-shortener.glitch.me"
    },
    {
        projectName:"Exercise Tracker",
        img:"imgs/exercise-tracker.png",
        link:"https://ayoub-younes-exercise-tracker.glitch.me/"
    },
    {
        projectName:"File Metadata",
        img:"imgs/file-metadata.png",
        link:"https://ayoub-younes-file-metadata.glitch.me/"
    },
]

const displayNext = () => {
    projects.slice(num, num+6).forEach((project) => {
        wrapper.innerHTML += `
            <div class="project-wrapper">
            <img src=${project.img}>
            <p class="project-tile"><a href=${project.link} target="_blank">${project.projectName}</a></p>  
        </div>
        `
    })
    num += 6 
    if(num >= projects.length){
        next.style.cursor ="not-allowed"
    }
}
console.log(num)
next.addEventListener("click", displayNext)






