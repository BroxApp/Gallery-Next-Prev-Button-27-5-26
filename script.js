const galleryImage = document.getElementById('galleryImage');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const images = [
    'images/image1.jpg',
    'images/image2.jpg',
    'images/image3.jpg',
    'images/image4.jpg',
    'images/image5.jpg'];
let currentIndex = 0;

function showImage(index){
    galleryImage.src = images[index];
}

prevBtn.addEventListener('click', ()=>{
    currentIndex--;
    if(currentIndex < 0){
        currentIndex = images.length - 1;
    }
    showImage(currentIndex);
});

nextBtn.addEventListener('click', ()=>{
    currentIndex++;
    if(currentIndex >= images.length){
        currentIndex = 0;
    }
    showImage(currentIndex);
});