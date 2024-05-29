let arr = [
    {
        temp: "78°F  -  10.7mph  - 88° ",
        title1: "Lake Tahoe, California",
        title2: "Homewood ",
        location: "39.08629948516978° N / -120.1605391°W",
        image: "../asset/1_explore.jpg"
    },
    {
        temp: "39°F - 0mph  - 0° ",
        title1: "Silicon Valley, California",
        title2: "CordeValle",
        location: "37.067811° N / -121.632827°W",
        image: "../asset/2_explore.jpg"
    },
    {
        temp: "44°F - 0mph  - 0° ",
        title1: "La Quinta, California",
        title2: "Madison",
        location: "33.660960° N / -116.244456°W",
        image: "../asset/3_explore.jpg"
    },
    {
        temp: "45°F - 1mph -  257° ",
        title1: "La Quinta, California",
        title2: "Hideaway",
        location: "33.667059° N / -116.260879°W",
        image: "../asset/4_explore.jpg"
    },
    {
        temp: "57°F - 5mph -  20° ",
        title1: "Las Vegas, Nevada",
        title2: "The Summit",
        location: "36.1094° N / -115.3287°W",
        image: "../asset/5_explore.jpg"
    },
    {
        temp: "36°F  -3mph   -56° ",
        title1: "Scottsdale, Arizona",
        title2: "Estancia",
        location: "33.738105° N / -111.865240°W",
        image: "../asset/6_explore.jpg"
    },
    {
        temp: "35°F - 3mph -  56° ",
        title1: "Scottsdale, Arizona",
        title2: "Mirabel",
        location: "33.823760° N / -111.851592°W",
        image: "../asset/7_explore.jpg"
    },
    {
        temp: "54°F - 5mph -  345° ",
        title1: "Los Cabos, Mexico",
        title2: "El Dorado",
        location: "22.995771° N / -109.746423°W",
        image: "../asset/8_explore.jpg"
    },
    {
        temp: "61°F  -4mph  - 351° ",
        title1: "Cabo San Lucas, Mexico",
        title2: "Chileno Bay",
        location: "22.953650° N / -109.816218°W",
        image: "../asset/9_explore.jpg"
    },
    {
        temp: "37°F - 9mph -  200° ",
        title1: "British Columbia, Canada",
        title2: "James Island",
        location: "48.602830922° N / -123.342998628°W",
        image: "../asset/10_explore.jpg"
    }
];

let currentIndex = 2;

function updateContent() {
    const tempElement = document.querySelectorAll(".icon-text")[0];
    const windElement = document.querySelectorAll(".icon-text")[1];
    const compassElement = document.querySelectorAll(".icon-text")[2];
    const locationElement = document.querySelector(".location");
    const titleElement = document.querySelector(".title");
    const locationValueElement = document.querySelector(".location_value");
    const imageElement = document.querySelector(".madison-image");

    console.log("Elements found:");
    console.log("tempElement:", tempElement);
    console.log("windElement:", windElement);
    console.log("compassElement:", compassElement);
    console.log("locationElement:", locationElement);
    console.log("titleElement:", titleElement);
    console.log("locationValueElement:", locationValueElement);
    console.log("imageElement:", imageElement);

    if (tempElement && windElement && compassElement && locationElement && titleElement && locationValueElement && imageElement) {
        const [temp, wind, compass] = arr[currentIndex].temp.split("  -  ");
        tempElement.innerText = temp;
        windElement.innerText = wind;
        compassElement.innerText = compass;
        locationElement.innerText = arr[currentIndex].title1;
        titleElement.innerText = arr[currentIndex].title2;
        locationValueElement.innerText = arr[currentIndex].location;
        imageElement.src = arr[currentIndex].image;
    } else {
        console.error("One or more elements are missing from the DOM");
    }
}

document.querySelectorAll(".section5-arrow")[0].addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + arr.length) % arr.length;
    updateContent();
});

document.querySelectorAll(".section5-arrow")[1].addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % arr.length;
    updateContent();
});

document.addEventListener("DOMContentLoaded", updateContent);