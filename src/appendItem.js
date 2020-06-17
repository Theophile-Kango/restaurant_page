import { Render } from './render.js';
import { clickEvent } from './clikEvent.js';


const appendItem = () => {
    const nav = new Render('nav',content).classElement('navbar navbar-expand-sm');
    const ul = new Render('ul',nav).classElement('navbar-nav');

    const links = {
        home: 'home',
        menu: 'menu',
        about: 'about us',
        contacts: 'contacts'
    }

    const keys = Object.keys(links);
    keys.forEach( element => {
        element = new Render('li',ul).classElement('nav-item');
    });
    
    const values = Object.values(links);

    ul.querySelectorAll('li').forEach( (element, i) => {
        element.textContent = values[i];
        element.setAttribute('id', values[i])
    });
    
    onload = () => {
        home.click();
    }

    home.addEventListener('click',() => {
        clickEvent(home);
    })
}

export { appendItem };
