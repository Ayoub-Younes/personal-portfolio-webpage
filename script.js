const next = document.getElementById('next-button')
const wrapper = document.querySelector(".projects-wrapper")

let num = 0;
let projects = [
    {
        projectName:"Multiplayer Pokeball Collection Game",
        img:"imgs/real-time-multiplayer-game.webp",
        link:"https://ayoub-younes-real-time-multiplayer-game.glitch.me/"
    },
    {
        projectName:"Roman Numeral Converter",
        img:"imgs/roman-numeral-converter.webp",
        link:"https://ayoub-younes.github.io/a-roman-numeral-converter"
    },
    {
        projectName:"Telephone Number Validator",
        img:"imgs/telephone-number-validator.webp",
        link:"https://ayoub-younes.github.io/telephone-number-validator"
    },
    {
        projectName:"Cash Register",
        img:"imgs/cash-register.webp",
        link:"https://ayoub-younes.github.io/cash-register"
    },
    {
        projectName:"Pokemon Search App",
        img:"imgs/pokemon-search-app.webp",
        link:"https://ayoub-younes.github.io/pokemon-search-app"
    },
    {
        projectName:"Random Quote Machine",
        img:"imgs/random-quote-machine.webp",
        link:"https://ayoub-younes.github.io/random-quote-machine"
    },
    {
        projectName:"Markdown Previewer",
        img:"imgs/markdown-previewer.webp",
        link:"https://ayoub-younes.github.io/markdown-previewer"
    },
    {
        projectName:"Drum-Machine",
        img:"imgs/drum-machine.webp",
        link:"https://ayoub-younes.github.io/drum-machine"
    },
    {
        projectName:"JavaScript Calculator",
        img:"imgs/javaScript-calculator.webp",
        link:"https://ayoub-younes.github.io/javaScript-calculator"
    },
    {
        projectName:"A 25 + 5 clock",
        img:"imgs/a-25--5-clock.webp",
        link:"https://ayoub-younes.github.io/a-25--5-clock"
    },
    {
        projectName:"United States GDP",
        img:"imgs/united-states-gdp.webp",
        link:"https://ayoub-younes.github.io/united-states-gdp"
    },
    {
        projectName:"Doping in Professional Bicycle Racing",
        img:"imgs/doping-in-professional-bicycle-racing.webp",
        link:"https://ayoub-younes.github.io/doping-in-professional-bicycle-racing"
    },
    {
        projectName:"Monthly Global Land-Surface Temperature",
        img:"imgs/monthly-global-land-surface-temperature.webp",
        link:"https://ayoub-younes.github.io/monthly-global-land-surface-temperature"
    },
    {
        projectName:"United States Educational Attainment",
        img:"imgs/united-states-educational-attainment.webp",
        link:"https://ayoub-younes.github.io/united-states-educational-attainment"
    },
    {
        projectName:"Video Game Sales",
        img:"imgs/video-game-sales.webp",
        link:"https://ayoub-younes.github.io/video-game-sales"
    },
    {
        projectName:"Timestamp",
        img:"imgs/timestamp.webp",
        link:"https://ayoub-younes-timestamp.glitch.me"
    },
    {
        projectName:"Request Header Parser",
        img:"imgs/headerparser.webp",
        link:"https://ayoub-younes-headerparser.glitch.me"
    },
    {
        projectName:"URL Shortener",
        img:"imgs/url-shortener.webp",
        link:"https://ayoub-younes-url-shortener.glitch.me"
    },
    {
        projectName:"Exercise Tracker",
        img:"imgs/exercise-tracker.webp",
        link:"https://ayoub-younes-exercise-tracker.glitch.me/"
    },
    {
        projectName:"File Metadata",
        img:"imgs/file-metadata.webp",
        link:"https://ayoub-younes-file-metadata.glitch.me/"
    },
      {
        projectName:"Nasdaq Stock Price Checker",
        img:"imgs/stock-price-checkerwebp",
        link:"https://ayoub-younes-stock-price-checker.glitch.me/"
    },
      {
        projectName:"Anonymous Message Board",
        img:"imgs/message-board.webp",
        link:"https://ayoub-younes-message-board.glitch.me/"
    },
        {
        projectName:"Password Cracker",
        img:"imgs/password-cracker.webp",
        link:"https://colab.research.google.com/drive/1wAJDYhxzgLH5fMm0ijn0aYVMVNT1guny"
    },
        {
        projectName:"Port Scanner",
        img:"imgs/port-scanner.webp",
        link:"https://colab.research.google.com/drive/1BytXOaktXpjCY35-9vmaRxztw3LH_M8R"
    },
        {
        projectName:"Arithmetic Arranger",
        img:"imgs/arithmetic-arranger.webp",
        link:"https://colab.research.google.com/drive/195QPTwW8WtnR-CHS2rk2zKbxLbAPk5n2"
    },
        {
        projectName:"Time Calculator",
        img:"imgs/time-calculator.webp",
        link:"https://colab.research.google.com/drive/17jHVFN2gNNlAM2OIGkxS-8HLkYTkayTt"
    },
        {
        projectName:"Budget App",
        img:"imgs/budget-app.webp",
        link:"https://colab.research.google.com/drive/12MK4FCcTwMbvE4OtiBqHShlBW528-stg"
    },
        {
        projectName:"Polygon Area Calculator",
        img:"imgs/polygon-area-calculator.webp",
        link:"https://colab.research.google.com/drive/1rjCjMen1fQsnEQDCzHRub7zGndNG1luO"
    },
        {
        projectName:"Probability Calculator",
        img:"imgs/probability-calculator.webp",
        link:"https://colab.research.google.com/drive/1LIP-xQDXh9Ke-NQpqAhu4n-4DpH7-VkQ"
    },
        {
        projectName:"Demographic Data Analyzer",
        img:"imgs/demographic-data-analyzer.webp",
        link:"https://colab.research.google.com/drive/1M8Z1g5qAqdeit5xYGgYt2IKrkv2Hi3xz"
    },
        {
        projectName:"Mean Variance Standard Deviation Calculator",
        img:"imgs/mean-variance-standard-deviation-calculator.webp",
        link:"https://colab.research.google.com/drive/1R0XfjQb1ovCXPTDk2mYvkdx0KSuRSQvh"
    },
        {
        projectName:"Medical Data Visualizer",
        img:"imgs/medical-data-visualizer.webp",
        link:"https://colab.research.google.com/drive/1WEs9YTfJGUBvHl1WwY3R0bO7eR8jaNlh"
    },
        {
        projectName:"Page View Time Series Visualizer",
        img:"imgs/page-view-time-series-visualizer.webp",
        link:"https://colab.research.google.com/drive/1FzFdrJJUKTXCRl3j-MwTaz4N4xdDFKLS"
    },
        {
        projectName:"Sea Level Predictor",
        img:"imgs/sea-level-predictor.webp",
        link:"https://colab.research.google.com/drive/1EIP9C8mbKpFkazX3msY7bKwN8j8Pa3qB"
    },
        {
        projectName:"Rock Paper Scissors",
        img:"imgs/rock-paper-sissors.webp",
        link:"https://colab.research.google.com/drive/1S9VGwWOc2rtm2dGt16nJr4_YyFq1Dsm1"
    },
        {
        projectName:"Linear Regression Health Costs Calculator",
        img:"imgs/linear-regression-health-costs-calculator.webp",
        link:"https://colab.research.google.com/drive/111p_iIm0fi9TCKcb7_M_8vk453tewDXn"
    },
        {
        projectName:"Book Recommendation Engine",
        img:"imgs/book-recommendation-engine.webp",
        link:"https://colab.research.google.com/drive/19DBBrDH7GCTtCA7ASiLD1mDje0EcTDjT"
    },
            {
        projectName:"Cat and Dog Image Classifier",
        img:"imgs/cat-and-dog-image-classifier.webp",
        link:"https://colab.research.google.com/drive/18shziM3abzzNrJBwKFJ6Mnr71Ve8eCO7"
    },
            {
        projectName:"Neural Network SMS Text Classifier",
        img:"imgs/neural-network-sms-text-classifier.webp",
        link:"https://colab.research.google.com/drive/17sE3imQHj-BusLQ3YQ4c3lfnosxjZC43"
    },
    
]



const displayNext = () => {

    if (num >= projects.length) {
        next.style.cursor ="not-allowed"
        console.log("No more projects to display.");
        return;
    }
    let newProjetcs = projects.slice(num, num + 6)
    newProjetcs.forEach((project) => {

        wrapper.innerHTML += `
            <div class="project-wrapper fade-in" style="display: none">
                <img class="image" src=${project.img}>
                <p class="project-tile"><a href=${project.link} target="_blank">${project.projectName}</a></p>  
            </div>
        `
    })
    num += 6 
    imageLoad()
}

next.addEventListener("click", displayNext)

const imageLoad = () => {
    const porjectsList =  Array.from(document.getElementsByClassName('project-wrapper'))
    const images = Array.from(document.getElementsByClassName("image"))
    let imagesLoaded = 0;
    
    // Function to show content after all images are loaded
    function showContent() {
        images.forEach(img => img.classList.remove("image"))
        porjectsList.forEach(div  => div.style.display = "flex")
    }

    // Remove the fade-in class after animation completes
    setTimeout(() => {
    porjectsList.forEach(div => div.classList.remove("fade-in"));
    }, 500); // Duration of the animation

    // Function to check if all images are loaded
    function checkAllImagesLoaded() {
        if (imagesLoaded === images.length) {
            showContent();
        }
    }

    // Check each image if it's already cached
    images.forEach(img => {
        if (img.complete) {
            imagesLoaded++;
            checkAllImagesLoaded();
        } else {
            // If the image is not cached, wait for the load event
            img.onload = function() {
            imagesLoaded++;
            checkAllImagesLoaded();
            };
        }
        });
    
        // Fallback in case the images take too long or fail to load
        setTimeout(function() {
        showContent();  // Show content after the timeout, regardless of images loaded
        }, 3000);

}


