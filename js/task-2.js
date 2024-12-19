const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  }
];

const createCard = pictureData => {
  return `<li class ="gallery-items">
    <a ref="#">
      <img src="${pictureData.url}" alt="${pictureData.alt}" width="360px" height="300px">
    </a>
  </li>
  `;
}
const createCardTemplates = images.map(image => createCard(image)).join(``);
const galleryListEl = document.querySelector(`.gallery`);
galleryListEl.innerHTML = createCardTemplates;
galleryListEl.style.listStyleType = `none`;
galleryListEl.style.display = `flex`;
galleryListEl.style.padding = `0`;
galleryListEl.style.marginLeft = `auto`;
galleryListEl.style.marginRight = `auto`;
galleryListEl.style.gap = `24px`;
galleryListEl.style.maxWidth = `1130px`;
galleryListEl.style.flexWrap = `wrap`;
const imagesItems = document.querySelectorAll('li');
imagesItems.forEach(item => {
  item.style.display = `block`;
  item.style.height = `300px`;
  item.style.marginBottom = `24px`;
  })

  const link = document.querySelector('a');
    link.style.textDecoration = `none`;
    link.style.border = `1px solid black`;
    link.style.borderRadius = `8px`;
    link.style.padding = `10px 40px`;
    link.style.backgroundColor = `#4E75FF`;
    link.style.border = `1px solid #4E75FF`;
    link.style.color = `#fff`;
    link.style.fontWeight = `600`;
    link.style.fontSize = `16px`;
    
   link.addEventListener('mouseenter', () => {  
   link.style.backgroundColor = '#6c8cff'
   link.style.border = `1px solid #6c8cff`;
  });

   link.addEventListener('mouseleave', () => {  
   link.style.backgroundColor = `#4E75FF`;
   link.style.border = `1px solid #4E75FF`;
  });  

  link.addEventListener('focus', () => {  
  link.style.backgroundColor = '#6c8cff'
  link.style.border = `1px solid #6c8cff`;  
  });

  
  link.addEventListener('blur', () => {  
  link.style.backgroundColor = `#4E75FF`;
  link.style.border = `1px solid #4E75FF`;
  });  