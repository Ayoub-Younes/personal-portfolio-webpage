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






