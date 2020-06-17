import { Render } from './render.js';

const text = {
    home: `EATING, ELEVATED Discover an elevated dining experience in downtown Portland – a Pan Asian 
    kitchen from Sage Restaurant Group. Floating atop the landmark Meier & 
    Frank Building, Departure’s ambitious menu captivates diners with its 
    masterful remix of authentic coastal cuisines.`,
    menu: [],
    about: `Those are questions that your restaurant’s mission statement should answer.

    A restaurant’s mission, vision, and values make up part of your brand’s identity. 
    They fuel business decisions while inspiring customers to frequent and employees to work for your restaurant. 
    Creating a mission statement for your restaurant can help you think critically about your goals, 
    beyond serving delicious food.
    
    Crafting a restaurant mission statement that properly represents your restaurant’s manifesto can be hard. 
    These mission statement examples could help you find the right words.`,

    contact: {
        email: 'fadhili.kango@gmail.com',
        address: 'Kigali',
        number: '+250781097715'
    }
}

const clickEvent = (element) => {
    element = new Render('p',content).classElement('para');
    element.textContent = text.contact;
}

export { clickEvent };