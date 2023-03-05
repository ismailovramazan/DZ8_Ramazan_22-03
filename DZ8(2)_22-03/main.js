let url = "https://jsonplaceholder.typicode.com/photos"
let photos = [];
let currentPhotoIndex = 1
async function fetchPhotos() {
    const response = await fetch(url);
    const data = await response.json();
    photos = data.slice(1, 200);
}

function displayCurrentPhoto() {
    const currentPhoto = document.querySelector('.current-photo');
    currentPhoto.src = photos[currentPhotoIndex].url;
}

function handleNext() {
    currentPhotoIndex++;
    if (currentPhotoIndex >= photos.length) {
        currentPhotoIndex = 0;
    }
    displayCurrentPhoto();
}

function handlePrev() {
    currentPhotoIndex--;
    if (currentPhotoIndex < 0) {
        currentPhotoIndex = photos.length - 1;
    }
    displayCurrentPhoto();
}

async function click() {
    await fetchPhotos();
    displayCurrentPhoto();

    const prevButton = document.querySelector('.prev-button');
    prevButton.onclick = handlePrev

    const nextButton = document.querySelector('.next-button');
    nextButton.onclick  = handleNext
}

click();