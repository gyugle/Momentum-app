'use strict';

// Constants
const imgs = [
  'img/1.jpg',
  'img/2.jpg',
  'img/3.jpg',
  'img/4.jpg',
  'img/5.jpg',
  'img/6.jpg',
];
const img = document.querySelector('.image');
const body = document.querySelector('body');
// Functions
function imageUrl(url) {
  return `url(../${url})`;
}
function selectImage() {
  const number = Math.floor(Math.random() * imgs.length);
  body.style.backgroundImage = imageUrl(imgs[number]);
}

// Main
selectImage();
