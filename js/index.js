const list = document.querySelector('ul'); 
const link = document.querySelectorAll('a');
link.forEach(element => {
    element.style.textDecoration = `none`;
    element.style.border = `1px solid black`;
    element.style.borderRadius = `8px`;
    element.style.padding = `10px 40px`;
    element.style.backgroundColor = `#4E75FF`;
    element.style.border = `1px solid #4E75FF`;
    element.style.color = `#fff`;
    element.style.fontWeight = `600`;
    element.style.fontSize = `16px`;

   element.addEventListener('mouseenter', () => {  
   element.style.backgroundColor = '#6c8cff'
   element.style.border = `1px solid #6c8cff`;
  });

   element.addEventListener('mouseleave', () => {  
   element.style.backgroundColor = `#4E75FF`;
   element.style.border = `1px solid #4E75FF`;
  });  

  element.addEventListener('focus', () => {  
  element.style.backgroundColor = '#6c8cff'
  element.style.border = `1px solid #6c8cff`;  
  });

  element.addEventListener('blur', () => {  
  element.style.backgroundColor = `#4E75FF`;
  element.style.border = `1px solid #4E75FF`;
  });  
});


list.style.listStyleType = `none`;
list.style.display = `flex`;
list.style.maxWidth = `1000px`;
list.style.height = `120px`;
list.style.backgroundColor = `#f6f6fe`;
list.style.borderRadius = `8px`;

list.style.marginLeft = `auto`;
list.style.marginRight = `auto`;
list.style.marginTop = `150px`;

list.style.paddingLeft = `0`;
list.style.justifyContent = `space-around`;
list.style.alignItems = `center`;

