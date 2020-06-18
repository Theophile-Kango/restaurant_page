import Render from './render';
import {
  clickAbout, clickHome, clickContact, clickMenu,
} from './clickEvent';


const appendItem = () => {
  const content = document.querySelector('#content');
  const nav = new Render('nav', content).classElement('navbar navbar-expand-sm');
  const ul = new Render('ul', nav).classElement('navbar-nav');
  const elt = new Render('p', content).classElement('para');

  const links = {
    home: 'home',
    menu: 'menu',
    about: 'about us',
    contacts: 'contacts',
  };

  const keys = Object.keys(links);
  keys.forEach(() => {
    new Render('li', ul).classElement('nav-item');
  });

  ul.querySelectorAll('li').forEach((element, i) => {
    element.textContent = keys[i];
    element.setAttribute('id', keys[i]);
  });

  const home = content.querySelector('#home');
  const about = content.querySelector('#about');
  const contacts = content.querySelector('#contacts');
  const menu = content.querySelector('#menu');

  window.onload = () => {
    home.click();
  };

  home.addEventListener('click', () => {
    clickHome(elt);
  });

  about.addEventListener('click', () => {
    clickAbout(elt);
  });

  contacts.addEventListener('click', () => {
    clickContact(elt);
  });

  menu.addEventListener('click', () => {
    clickMenu(elt);
  });
};

export default appendItem;
