import _ from 'lodash';
import './style.scss';
//import Image from './restaurant.jpeg';

function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    //element.classList.add('hello');

    //const myImage = new Image();
    //myImage.src = Image;

    //element.appendChild(myImage);
  
    return element;
  }
  
  document.body.appendChild(component());