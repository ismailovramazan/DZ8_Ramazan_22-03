async function fetchPhotos() {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos');
    const paintings = await response.json();
    return paintings;
}

async function displayPhotos() {
    const paintigs = await fetchPhotos();
    const gallery = document.querySelector('#gallery');
    paintigs.forEach(photo => {
        const img = document.createElement('img');
        img.src = photo.url;
        img.alt = photo.title;
        img.style.maxWidth = '200px';
        img.style.maxHeight = '200px';
        gallery.appendChild(img);
    });
}
displayPhotos();


// <!--//Домашнее задание:-->
// <!--1) сделать асинхронный запрос на эту ссылку https://jsonplaceholder.typicode.com/photos
// и отобразить все элементы (картинки 200 фоток) на странице. -->
// <!--(6 баллов за ДЗ)-->
//
// <!--2) реализовать next и prev для предыдущего ДЗ выше. Как это было в 6 ДЗ-->
// <!--(+4 балла за ДЗ)-->