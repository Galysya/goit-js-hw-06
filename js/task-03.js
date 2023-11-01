const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// function imageTemplate(image) {
//   const {url, alt} = image;
//   return `<li><img src="$(image.url)" alt="$(image.alt)"></li>`
// }

// function galleryTemplate(images){
//   return images.map(imageTamplate).join('');
// }

// function galleryRender(images) {
//   const gallery = document.querySelector('gallery');
//   gallery.insertAdjacentHTML('afterbegin', galleryTemplate(images));
// }

// galleryRender(images);


const galleries = document.querySelector(".gallery");
let galleryImage = "";
for (const image of images) {
  galleryImage += `<li> <img src="${image.url}" alt="${image.alt}"/> </li>`
}
galleries.insertAdjacentHTML( 'afterbegin', galleryImage );




