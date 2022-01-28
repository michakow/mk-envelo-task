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

  labelPhone.appendChild(inputPhone);
  labelCode.appendChild(inputCode);
  inputs.appendChild(labelPhone);
  inputs.appendChild(labelCode);
  main.insertBefore(inputs, button);
};