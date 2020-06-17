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

export { Render };