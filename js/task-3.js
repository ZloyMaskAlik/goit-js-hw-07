const nameInput = document.querySelector('#name-input');  
const nameOutput = document.querySelector('#name-output'); 
const textInput = document.querySelector('h1');
const formInput = document.querySelector('input'); 
 console.log(nameInput);
 console.log(formInput);
 console.log(nameOutput);
 console.log(textInput);

 textInput.style.maxWidth = `360px`;
 textInput.style.margin = `16px auto 0 auto`;
 textInput.style.fontWeight = `600`;
 textInput.style.fontSize = `24px`;
 textInput.style.color = `#2e2f42`;
 
 formInput.style.display = `block`;
 formInput.style.border = `1px solid #808080`;
 formInput.style.borderRadius = `8px`;
 formInput.style.width = `360px`;
 formInput.style.height = `40px`;
 formInput.style.margin = `0 auto`;
 formInput.style.padding = `8px 0 8px 16px`;
 formInput.style.fontSize = `16px`;

 nameInput.addEventListener('input', () => {  
    const trimValue = nameInput.value.trim();  
    nameOutput.textContent = trimValue.length > 0 ? trimValue : 'Anonymous';  
 });  

 formInput.addEventListener('mouseenter', () => {  
   formInput.style.border = `1px solid #000000`;
});
formInput.addEventListener('mouseleave', () => {  
  formInput.style.border = `1px solid #808080`;
});  
