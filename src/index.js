import _ from 'lodash';
import './style.scss';
import { backgroundImg } from './background.js';
import { appendItem } from './appendItem.js';


function component() {
  const background = backgroundImg();
  const items = appendItem();
  
  return background;
}
  
content.appendChild(component());
