const categories = document.querySelector('#categories');
categories.style.listStyleType = `none`;
categories.style.marginLeft = `auto`;
categories.style.marginRight = `auto`;
categories.style.paddingLeft = `0`;
categories.style.maxWidth = `392px`;

const categoryItem = categories.querySelectorAll(`.item`);
categoryItem.forEach(item => {
  item.style.marginBottom = `24px`;
  item.style.padding = `16px`;
  item.style.borderRadius = `8px`;
  item.style.backgroundColor = `#f6f6fe`;
 });

const categoryItems = categories.querySelectorAll('li.item');  
console.log(`Number of categories: ${categoryItems.length}`);
categoryItems.forEach(item => {
  const categoryName = item.querySelector('h2').innerText;
  const categoryNames = item.querySelector('h2')
  const elementsInCategory = item.querySelectorAll('ul li').length;
  const ulInCategory = item.querySelector('ul');
  const liInCategory = item.querySelectorAll('li');
  liInCategory.forEach(item => {
    item.style.border = `1px solid #808080`;
    item.style.borderRadius = `4px`;
    item.style.marginBottom = `8px`;
    item.style.padding = `8px 0 8px 16px`;
    item.style.color = `#2e2f42`;
    item.style.fontWeight = `400`;
    item.style.fontSize = `16px`;
    item.style.letterSpacing = `0.04em`;
  });
  ulInCategory.style.listStyleType = `none`;
  ulInCategory.style.paddingLeft = `0px`;
  categoryNames.style.marginBottom = `16px`;
  categoryNames.style.marginTop = `0px`;
  categoryNames.style.fontWeight = `600`;
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${elementsInCategory}`) ;  
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