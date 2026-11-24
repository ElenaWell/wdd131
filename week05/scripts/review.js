const reviewCountElement = document.querySelector("#reviewCount");
const lastModifiedElement = document.querySelector("#lastModified");

if (reviewCountElement) {
    let reviewCount = Number(localStorage.getItem("reviewCount")) || 0;

    reviewCount++;

    localStorage.setItem("reviewCount", reviewCount);

    reviewCountElement.textContent = reviewCount;
}

if (lastModifiedElement) {
    lastModifiedElement.textContent = document.lastModified;
}