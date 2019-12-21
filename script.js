let userInput = prompt('Would you like your password to have "lowercase", "capital", "numbers" and/or "symbols"?');
let length = prompt('How long would you like your password to be? Must be a number between 8 and 128');
let containerEl = document.querySelector('container');
let buttonEl = document.querySelector('#generate');
let userInputLC = userInput.toLowerCase();

// array that will contain all characters that will be used in password generation
let generatorArray = []; 
//object containing all the different character types stored in arrays
let charTypes = { 
    lowercase : ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
    capital : ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
    numbers : [1,2,3,4,5,6,7,8,9,0],
    symbols : [' ','!','\"','#','$','%','&','\'','(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','\\',']','^','_','`','{','|','}','~']
}

//checks if the user input for length of password is within 8 to 128 and is a number
if(length < 8 || length > 128 || typeof parseInt(length) !== 'number'){
    length = prompt('Please input a number between 8 and 128');
}
//attempts to construct an array of possible random choices
addCharTypes();

//if it could not add anything to the random choices, it will prompt the user again
if(generatorArray.length == 0){
    userInput = prompt('Please input "lowercase", "capital", "numbers", and/or "symbols"');
    userInputLC = userInput.toLowerCase();
    addCharTypes();
}

//will determine what char types the user has input and add them to generatorArray to use for password generation
function addCharTypes(){
    for(let key in charTypes){
        if(userInputLC.includes(key)){
            generatorArray = generatorArray.concat(charTypes[key]);
        }
    }    
}
//generates the password of a given length by the user, writing to the page
function passwordGen(length){
    let password = '';
    for(let i = 0; i < parseInt(length); i++){
        rand = Math.floor(Math.random()*generatorArray.length);
        password = password + generatorArray[rand];
    }
    containerEl.textContent = password;
}

//generates a password when clicking Generate Password button
buttonEl.addEventListener('click', function(){
    passwordGen(length);
});