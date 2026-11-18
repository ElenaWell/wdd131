
const menuButton = document.querySelector("#menu-button");
const navigation = document.querySelector("nav");

menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");

    const isOpen = navigation.classList.contains("open");

    menuButton.textContent = isOpen ? "✕" : "☰";
    menuButton.setAttribute("aria-expanded", isOpen);
    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
});

// Display current year and last modified date
document.querySelector("#currentyear").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;


// Temple Data
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Salt Lake Temple",
        location: "Salt Lake City, Utah, United States",
        dedicated: "1893, April, 6",
        area: 382207,
        imageUrl: "https://www.churchofjesuschrist.org/imgs/64de5983126b11eca393eeeeac1e50dfc2db6c7e/full/400%2C250/0/default"
    },
    {
        templeName: "Manila Philippines Temple",
        location: "Quezon City, Philippines",
        dedicated: "1984, September, 25",
        area: 26683,
        imageUrl: "https://www.churchofjesuschrist.org/imgs/cf62ebb59aefa1d2856981fb77574fb9982c5fad/full/400%2C250/0/default"
    },
    {
        templeName: "Rome Italy Temple",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 41010,
        imageUrl: "https://www.churchofjesuschrist.org/imgs/17e2c70d687fffedfe115197e57fa8f5d1d369bb/full/400%2C250/0/default"
    }

    ,{
        templeName: "Portland Oregon",
        location: "Lake Oswego, Oregon, United States",
        dedicated: "1989, August, 19",
        area: 80500,
        imageUrl: "https://www.churchofjesuschrist.org/imgs/91ee64d1750b013886f11c27f2c87c5535f5cbad/full/400%2C250/0/default"
    },
    {
        templeName: "Copenhagen Denmark",
        location: "Frederiksberg, Denmark",
        dedicated: "2004, May, 23",
        area: 25000,
        imageUrl: "https://www.churchofjesuschrist.org/imgs/91ee64d1750b013886f11c27f2c87c5535f5cbad/full/400%2C250/0/default"
    }
];


// Select the temple gallery
const templeGallery = document.querySelector(".temple-gallery");


// Create an individual temple card
function createTempleCard(temple) {
    const card = document.createElement("article");
    card.classList.add("temple-card");

    const name = document.createElement("h3");
    name.textContent = temple.templeName;

    const location = document.createElement("p");
    location.textContent = temple.location;

    const dedicated = document.createElement("p");
    dedicated.textContent = `Dedicated: ${temple.dedicated}`;

    const area = document.createElement("p");
    area.textContent = `Area: ${temple.area.toLocaleString()} sq ft`;

    const image = document.createElement("img");
    image.src = temple.imageUrl;
    image.alt = `${temple.templeName} exterior`;
    image.loading = "lazy";

    card.append(image, name, location, dedicated, area);

    return card;
}


// Display temple cards in the gallery
function displayTemples(templeList) {
    templeGallery.innerHTML = "";

    templeList.forEach(temple => {
        const card = createTempleCard(temple);
        templeGallery.appendChild(card);
    });
}


// Display all temples when the page loads
displayTemples(temples);


// Navigation filter elements
const homeLink = document.querySelector("#home");
const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");

// Home - Display all temples
homeLink.addEventListener("click", (event) => {
    event.preventDefault();
    displayTemples(temples);
});

// Old - Temples dedicated before 1900
oldLink.addEventListener("click", (event) => {
    event.preventDefault();

    const oldTemples = temples.filter(temple => {
        const year = Number(temple.dedicated.split(",")[0]);
        return year < 1900;
    });

    displayTemples(oldTemples);
});

// New - Temples dedicated after 2000
newLink.addEventListener("click", (event) => {
    event.preventDefault();

    const newTemples = temples.filter(temple => {
        const year = Number(temple.dedicated.split(",")[0]);
        return year > 2000;
    });

    displayTemples(newTemples);
});

// Large - Temples larger than 90,000 square feet
largeLink.addEventListener("click", (event) => {
    event.preventDefault();

    const largeTemples = temples.filter(temple => {
        return temple.area > 90000;
    });

    displayTemples(largeTemples);
});

// Small - Temples smaller than 10,000 square feet
smallLink.addEventListener("click", (event) => {
    event.preventDefault();

    const smallTemples = temples.filter(temple => {
        return temple.area < 10000;
    });

    displayTemples(smallTemples);
});

