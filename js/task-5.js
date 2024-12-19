function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector('.change-color');  
const colorSpan = document.querySelector('.color');  
const boxDiv = document.querySelector('.widget'); 
const paragraph = boxDiv.querySelector('p'); 

button.addEventListener('click', () => {  
    const randomColor = getRandomHexColor();  
    document.body.style.backgroundColor = randomColor;  
    colorSpan.textContent = randomColor;
});  


boxDiv.style.margin = `0 auto`;
boxDiv.style.maxWidth = `170px`;
boxDiv.style.display = `flex`;
boxDiv.style.flexDirection = `column`;
boxDiv.style.alignItems = `center`;

paragraph.style.fontWeight = `400`;
paragraph.style.fontSize = `16px`;
paragraph.style.lineHeight = `1.5`;
paragraph.style.letterSpacing = `0.04em`;
paragraph.style.color = `#2e2f42`;

button.style.width = `148px`;
button.style.height = `40px`;
button.style.backgroundColor = `#4E75FF`;
button.style.border = `1px solid #4E75FF`;
button.style.borderRadius = `8px`;
button.style.color = `#fff`;
button.style.fontWeight = `500`;
button.style.fontSize = `16px`;

button.addEventListener('mouseenter', () => {  
  button.style.backgroundColor = '#6c8cff'
  button.style.border = `1px solid #6c8cff`;
});

button.addEventListener('mouseleave', () => {  
  button.style.backgroundColor = `#4E75FF`;
  button.style.border = `1px solid #4E75FF`;
});  

button.addEventListener('focus', () => {  
  button.style.backgroundColor = '#6c8cff'
  button.style.border = `1px solid #6c8cff`;  
});
button.addEventListener('blur', () => {  
  button.style.backgroundColor = `#4E75FF`;
  button.style.border = `1px solid #4E75FF`;
});  

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