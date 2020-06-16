import _ from 'lodash';
import './style.scss';
import { backgroundImg } from './background.js'


function component() {
  const background = backgroundImg();
  return background;
}
  
content.appendChild(component());