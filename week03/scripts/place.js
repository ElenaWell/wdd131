// Footer information
const currentYear = new Date().getFullYear();
const lastModified = document.lastModified;

document.querySelector("#currentyear").textContent = currentYear;
document.querySelector("#lastModified").textContent =
    `Last modified: ${lastModified}`;

// Weather data
const temperature = 9;
const windSpeed = 10;

// Calculate wind chill
function calculateWindChill(temperature, windSpeed) {
    return 13.12 + 0.6215 * temperature -
        11.37 * windSpeed ** 0.16 +
        0.3965 * temperature * windSpeed ** 0.16;
}

// Display wind chill
const windChillElement = document.querySelector("#windchill");

if (temperature <= 10 && windSpeed > 4.8) {
    windChillElement.textContent =
        `${calculateWindChill(temperature, windSpeed).toFixed(1)} °C`;
} else {
    windChillElement.textContent = "N/A";
}