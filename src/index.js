import _ from 'lodash';
import './style.scss';
import { backgroundImg } from './background.js'
// import { appendElement } from './nav.js'


function component() {
  const background = backgroundImg();
  return background;
}
  
content.appendChild(component());