import { Render } from './render.js';
import { clickAbout, clickHome, clickContact, clickMenu } from './clikEvent.js';


const appendItem = () => {
    const nav = new Render('nav',content).classElement('navbar navbar-expand-sm');
    const ul = new Render('ul',nav).classElement('navbar-nav');
    const elt = new Render('p',content).classElement('para');

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

    ul.querySelectorAll('li').forEach( (element, i) => {
        element.textContent = keys[i];
        element.setAttribute('id', keys[i])
    });
    
    onload = () => {
        home.click();
    }

    home.addEventListener('click',() => {
        clickHome(elt);
    });

    about.addEventListener('click',() => {
        clickAbout(elt);
    });

    contacts.addEventListener('click', () => {
        clickContact(elt);
    })

    menu.addEventListener('click', () => {
        clickMenu(elt);
    })
}

export { appendItem };
