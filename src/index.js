import './style.scss';
import backgroundImg from './background';
import appendItem from './appendItem';


function component() {
  const background = backgroundImg();
  appendItem();

  return background;
}

const content = document.querySelector('#content');
content.appendChild(component());
