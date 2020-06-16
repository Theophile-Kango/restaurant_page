class Render{
    constructor(element, parent){
        this.element = element;
        this.parent = parent;
    }

    classElement(classElement = ''){
        const child = document.createElement(this.element);
        this.parent.appendChild(child).className = classElement;
        return child;
    }
}

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

    document.querySelectorAll('li').forEach( (element, i) => {
        element.textContent = values[i];
    })
}

export { appendItem };
