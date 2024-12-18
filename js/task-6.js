function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function createBoxes(quantity) {  
  const boxesContainer = document.querySelector('#boxes');  
  let boxes = '';  
  for (let i = 0; i < quantity; i++) {  
      const size = 30 + i * 10; 
      const color = getRandomHexColor(); 
      boxes += `<div style="width: ${size}px; height: ${size}px; background-color: ${color};"></div>`;  
  }  
  boxesContainer.innerHTML = boxes;  
}  

function destroyBoxes() {  
  const boxesContainer = document.querySelector('#boxes');  
  boxesContainer.innerHTML = '';  
}  

document.querySelector('[data-create]').addEventListener('click', () => {  
  const inputCase = document.querySelector('input');  
  const quantity = Number(inputCase.value);  

  if (quantity < 1 || quantity > 100) {  
      alert('Введіть число від 1 до 100');  
      return;  
  }  

  createBoxes(quantity); 
  inputCase.value = '';
});  

document.querySelector('[data-destroy]').addEventListener('click', destroyBoxes); 

boxes.style.display = `flex`;
boxes.style.flexDirection = `row`;
boxes.style.flexWrap = `wrap`;
boxes.style.gap = `44px`;
boxes.style.padding = `32px`;
boxes.style.backgroundColor = `#f6f6fe`;
boxes.style.borderRadius = `8px`;
boxes.style.maxWidth = `1120px`;
boxes.style.margin = `0 auto`;

controls.style.margin = `16px auto`;
controls.style.maxWidth = `486px`;
controls.style.backgroundColor = `#f6f6fe`;
controls.style.borderRadius = `8px`;
controls.style.padding = `32px`;
controls.style.display = `flex`;
controls.style.justifyContent = `space-between`;


const divNumber = document.querySelector('input')
divNumber.style.textAlign = `center`;
divNumber.style.width = `150px`;
divNumber.style.height = `40px`;
divNumber.style.border = `1px solid #808080`;
divNumber.style.borderRadius = `8px`;
divNumber.style.fontWeight = `400`;
divNumber.style.fontSize = `16px`;
divNumber.style.color = `#2rede2f42`;

const buttonsArr = document.querySelectorAll(`button`);
buttonsArr.forEach(item => {
 item.style.borderRadius = `8px`;
 item.style.width = `120px`;
 item.style.height = `40px`;
 item.style.fontWeight = `500`;
 item.style.fontSize = `16px`;
 item.style.color = `#fff`;
})
 

buttonsArr[0].style.backgroundColor = `#4E75FF`;
buttonsArr[0].style.border = `1px solid #4E75FF`;

buttonsArr[0].addEventListener('mouseenter', () => {  
  buttonsArr[0].style.backgroundColor = '#6c8cff'
  buttonsArr[0].style.border = `1px solid #6c8cff`;
});

buttonsArr[0].addEventListener('mouseleave', () => {  
  buttonsArr[0].style.backgroundColor = `#4E75FF`;
  buttonsArr[0].style.border = `1px solid #4E75FF`;
});  

buttonsArr[0].addEventListener('focus', () => {  
  buttonsArr[0].style.backgroundColor = '#6c8cff'
  buttonsArr[0].style.border = `1px solid #6c8cff`;  
});

buttonsArr[0].addEventListener('blur', () => {  
  buttonsArr[0].style.backgroundColor = `#4E75FF`;
  buttonsArr[0].style.border = `1px solid #4E75FF`;
});  


buttonsArr[1].style.background = `#ff4e4e`;
buttonsArr[1].style.border = `1px solid #ff4e4e`;

buttonsArr[1].addEventListener('mouseenter', () => {  
  buttonsArr[1].style.backgroundColor = '#ff7070'
  buttonsArr[1].style.border = `1px solid #ff7070`;
});

buttonsArr[1].addEventListener('mouseleave', () => {  
  buttonsArr[1].style.background = `#ff4e4e`;
buttonsArr[1].style.border = `1px solid #ff4e4e`;
});  

buttonsArr[1].addEventListener('focus', () => {  
  buttonsArr[1].style.backgroundColor = '#ff7070'
  buttonsArr[1].style.border = `1px solid #ff7070`;  
});
buttonsArr[1].addEventListener('blur', () => {  
  buttonsArr[1].style.background = `#ff4e4e`;
  buttonsArr[1].style.border = `1px solid #ff4e4e`;
}); 