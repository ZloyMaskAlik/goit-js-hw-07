const loginForm = document.querySelector('.login-form');  
const labelItems = loginForm.querySelectorAll('label');  
loginForm.style.padding = `24px`;
loginForm.style.maxWidth = `408px`;
loginForm.style.marginLeft = `auto`;
loginForm.style.marginRight = `auto`;
loginForm.style.color = ` #2e2f42`;
loginForm.style.fontWeight = `400`;
loginForm.style.fontSize = `16px`;


labelItems.forEach(item => {
  item.style.display = `flex`;
  item.style.flexDirection = `column`;
  const itemInput = item.querySelectorAll(`input`);
  itemInput.forEach(el => {
    el.style.border = `1px solid #808080`;
    el.style.borderRadius = `8px`;
    el.style.width = `360px`;
    el.style.height = `40px`;
    el.style.margin = `8px 0`;
    el.style.color = ` #2e2f42`;
    el.style.padding = `8px 0 8px 16px`;
    el.style.fontSize = `16px`;})
})

const buttonForm = document.querySelector('button');
buttonForm.addEventListener('mouseenter', () => {  
  buttonForm.style.backgroundColor = '#6c8cff'
  buttonForm.style.border = `1px solid #6c8cff`;
});
buttonForm.addEventListener('mouseleave', () => {  
  buttonForm.style.backgroundColor = `#4E75FF`;
});   

buttonForm.addEventListener('focus', () => {  
  buttonForm.style.backgroundColor = '#6c8cff'
  buttonForm.style.border = `1px solid #6c8cff`;  
});
buttonForm.addEventListener('blur', () => {  
  buttonForm.style.backgroundColor = `#4E75FF`;
  buttonForm.style.border = `1px solid #4E75FF`;
});  

buttonForm.style.width = `86px`;
buttonForm.style.height = `40px`;
buttonForm.style.backgroundColor = `#4E75FF`;
buttonForm.style.border = `1px solid #4E75FF`;
buttonForm.style.borderRadius = `8px`;
buttonForm.style.marginTop = `8px`;
buttonForm.style.color = `#fff`;
buttonForm.style.fontWeight = `500`;
buttonForm.style.fontSize = `16px`;

loginForm.addEventListener('submit', (event) => {  
  event.preventDefault();


  const email = loginForm.elements.email.value.trim();  
  const password = loginForm.elements.password.value.trim();  

  if (email === '' || password === '') {  
    alert('All form fields must be filled in');  
    return;  
  }  

  const formData = {  
    email: email,  
    password: password  
  };  

  console.log(formData);
  loginForm.reset();  
});  
