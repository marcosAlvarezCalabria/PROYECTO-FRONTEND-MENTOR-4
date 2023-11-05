const firstName=document.querySelector('#firstNameInput');
const lastName=document.querySelector('#lastNameInput');
const email=document.querySelector('#emailInput');
const password=document.querySelector('#passwordInput');

const firstNameError=document.querySelector('.firstNameError');
const lastNameError=document.querySelector('.lastNameError');
const emailError=document.querySelector('.emailError');
const passwordError=document.querySelector('.passwordError');

const button= document.querySelector('#button')

const boxBig=document.querySelector('.container-formulario')
const terminos=document.querySelector('.terminos-condiciones')

button.addEventListener('click',(event)=>{
 
  validatEmpty(firstName.value,firstName,firstNameError);
 validatEmpty(lastName.value,lastName,lastNameError);
validatEmpty(email.value,email,emailError);
validatEmpty(password.value,password,passwordError);

})




function validatEmpty(valueInput , divInput, divError){


    if (valueInput.length===0) {
      showError( divInput,divError);//esta es una fucion que nos muestra el error
      
    }
    else{
      hideError(divInput,divError);//esta no nos muestra el error
    }
    
  }
  function showError(divInput,divError){
    divInput.style.border='1px solid red' 
    boxBig.style.height='545px'
    terminos.style.position='relative'
    terminos.style.top='120px';
    divError.style.display='block'
    
    
  }

function hideError(divInput,divError){
  divInput.style.border='solid 1px rgb(219, 211, 211)';
  divError.style.display=' none';
  

 

}