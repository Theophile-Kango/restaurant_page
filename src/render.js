class Render{
    constructor(num){
        this.num = num;
    }
    
    appendElement(element, parent, classElement = '') {
        const child = document.createElement(element);
        parent.appendChild(child).className = classElement;
        return child;
    }
    
    repeat(element, parent, classElement = ''){
        for(let i = 0; i < this.num; i++){
            appendElement(element, parent, classElement = '');
        }
    }
}

const nav = new Render(1).repeat('nav',content);
const ul = new Render(1).repeat('ul',nav);
const li = new Render(3).repeat('li',ul);
//export { appendElement };

const nav = new Nav(3).repeat();
