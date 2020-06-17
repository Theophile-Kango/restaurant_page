const text = {
    home: function(){ return `EATING, ELEVATED Discover an elevated dining experience in downtown Portland – a Pan Asian 
    kitchen from Sage Restaurant Group. Floating atop the landmark Meier & 
    Frank Building, Departure’s ambitious menu captivates diners with its 
    masterful remix of authentic coastal cuisines.`},
    menu: 'src/assets/menu.jpg',
    about: function(){ return `Those are questions that your restaurant’s mission statement should answer.

    A restaurant’s mission, vision, and values make up part of your brand’s identity. 
    They fuel business decisions while inspiring customers to frequent and employees to work for your restaurant. 
    Creating a mission statement for your restaurant can help you think critically about your goals, 
    beyond serving delicious food.
    
    Crafting a restaurant mission statement that properly represents your restaurant’s manifesto can be hard. 
    These mission statement examples could help you find the right words.`},

    contact: {
        email: 'fadhili.kango@gmail.com',
        address: 'Kigali',
        number: '+250781097715'
    }
}

const clickHome = (val) => {
    val.textContent = text.home();
}

const clickAbout = (val) => {
    val.textContent = text.about();
}

const clickContact = (val) => {
    const entries = Object.entries(text.contact);
    val.textContent = '';
    for (const [key, value] of entries) {
        val.innerHTML += `${key} : ${value} <br>`;
    }
}

const clickMenu = (val) => {
    const myImage = new Image();
    myImage.src = text.menu;
    val.textContent = ''
    val.appendChild(myImage)
    //return myImage
}

export { clickHome, clickAbout, clickContact, clickMenu };