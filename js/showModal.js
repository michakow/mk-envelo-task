import { mainView } from "./main.js";
import { showInputs } from "./showInputs.js";

export const showModal = (main, button, inputs) => {
  const cover = document.createElement('div')
  cover.className = 'cover';

  const modal = document.createElement('div')
  modal.className = 'modal';

  const heading = document.createElement('h2');
  heading.className = 'modal-heading';
  heading.appendChild(document.createTextNode('Paczka odebrana'));

  const paragraph = document.createElement('p');
  paragraph.className = 'paragraph';
  paragraph.appendChild(document.createTextNode('Zrobiłeś to w czasie 10 sekund! Czy możemy zrobić dla Ciebie coś jeszcze?'));

  const buttons = document.createElement('div');
  buttons.className = 'buttons';

  const buttonFirst = document.createElement('button');
  const buttonSecond = document.createElement('button');
  buttonFirst.className = 'modal-button';
  buttonSecond.className = 'modal-button';
  buttonFirst.appendChild(document.createTextNode('To wszystko na dziś'));
  buttonSecond.appendChild(document.createTextNode('Odbierz kolejną paczkę'));

  buttons.appendChild(buttonFirst);
  buttons.appendChild(buttonSecond);
  modal.appendChild(heading);
  modal.appendChild(paragraph);
  modal.appendChild(buttons);
  main.appendChild(cover);
  main.appendChild(modal);

  const handleButtonFirst = () => {
    mainView();
    buttonFirst.removeEventListener('click', handleButtonFirst);
  };

  const handleButtonSecond = () => {
    modal.remove();
    cover.remove();
    inputs.remove();
    showInputs(main, button);
    buttonSecond.removeEventListener('click', handleButtonSecond);
  };

  buttonFirst.addEventListener('click', handleButtonFirst);
  buttonSecond.addEventListener('click', handleButtonSecond);
};