import { showModal } from "./showModal.js";

export const showInputs = (main, button) => {
  const inputs = document.createElement('div');
  inputs.className = 'inputs';
  
  const labelPhone = document.createElement('label');
  const labelCode = document.createElement('label');
  labelPhone.className = 'label';
  labelCode.className = 'label';
  labelPhone.appendChild(document.createTextNode('Numer telefonu'));
  labelCode.appendChild(document.createTextNode('Kod odbioru'));

  const inputPhone = document.createElement('input');
  const inputCode = document.createElement('input');
  inputPhone.className = 'input';
  inputCode.className = 'input';
  inputPhone.setAttribute('type', 'tel');
  inputCode.setAttribute('type', 'text');

  const validText = document.createElement('p');
  validText.className = 'valid-text';

  labelPhone.appendChild(inputPhone);
  labelCode.appendChild(inputCode);
  inputs.appendChild(labelPhone);
  inputs.appendChild(labelCode);
  inputs.appendChild(validText);
  main.insertBefore(inputs, button);

  const validate = () => {
    if(inputPhone.value.trim() && inputCode.value.trim()){
      if(inputPhone.value.length === 9){
        const phoneValid = /^[0-9]+$/;
        const valid = inputPhone.value.match(phoneValid);
        if(!!inputPhone.value.match(phoneValid) === false){
          validText.textContent = 'Nieprawidłowy numer telefonu (format: 555777333)';
          validText.classList.add('active');
          return false;
        }else{
          if(inputCode.value.length === 4){
            const codeValid = /^[0-9]+$/;
            const valid = inputCode.value.match(codeValid);
            if(!!inputCode.value.match(codeValid) === false){
              validText.textContent = 'Nieprawidłowy kod odbioru (format: 4503)';
              validText.classList.add('active');
              return false;
            }else{
              validText.textContent = '';
              validText.classList.remove('active');
              return true;
            }
          }else{
            validText.textContent = 'Nieprawidłowy kod odbioru (format: 4503)';
            validText.classList.add('active');
            return false;
          }
        } 
      }else{
        validText.textContent = 'Nieprawidłowy numer telefonu (format: 555777333)';
        validText.classList.add('active');
        return false;
      }
    }else{
      validText.textContent = 'Nie wszystkie pola zostały wypełnione';
      validText.classList.add('active');
      return false;
    } 
  };

  const onShowModal = () => {
    const valid = validate();
    if(valid){
      showModal(main, button, inputs);
      button.removeEventListener('click', onShowModal);
    }
  };

  button.addEventListener('click', onShowModal);
};