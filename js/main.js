import { showInputs } from "./showInputs.js";

const app = document.querySelector("#app");

const main = document.createElement('main');
main.className = 'main';

const heading = document.createElement('h1')
heading.className = 'heading';
heading.appendChild(document.createTextNode('Envelo'));

const paragraphFirst = document.createElement('p');
const paragraphSecond = document.createElement('p');
paragraphFirst.className = 'paragraph';
paragraphSecond.className = 'paragraph';
paragraphFirst.appendChild(document.createTextNode('Możesz mieć swoją przesyłkę w kilkanaście sekund.'));
paragraphSecond.appendChild(document.createTextNode('Rozpocznij klikając w przycisk.'));

const button = document.createElement('button');
button.className = 'button';
button.appendChild(document.createTextNode('Odbierz paczkę'));

main.appendChild(heading);
main.appendChild(paragraphFirst);
main.appendChild(paragraphSecond);
main.appendChild(button);
app.appendChild(main);

const onShowInputs = () => {
  showInputs(main, button);
  button.removeEventListener('click', onShowInputs);
}

button.addEventListener('click', onShowInputs);
