let userCharType = prompt('Would you like your password to have lowercase, capital, numbers and/or symbols?');
let length = prompt('How long would you like your password to be?');
let password = "";

// array that will contain all characters that will be used in password generation
let generatorArray = []; 
//object containing all the different character types stored in arrays
let charTypes = { 
    lowercase : ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
    capital : ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
    numbers : [1,2,3,4,5,6,7,8,9,0],
    // symbols : [ ,!,\",#,\$,%,&,\',(,),*,+,",",-,.,/,:,;,<,=,>,?,@,[,\,],^,"_","\`",{,|,},~];
}

for(let key in charTypes){
    addCharTypes(key);
}
//will determine what char types the user has input and add them to generatorArray to use for password generation
function addCharTypes(key){
    if(userCharType.toLowerCase().includes(key)){
        generatorArray = generatorArray.concat(charTypes[key]);
    }
}
function passwordGen(num){
    for(let i = 0; i < parseInt(num); i++){
        rand = Math.floor(Math.random()*generatorArray.length);
        password = password + generatorArray[rand];
    }
    console.log(password);

}
passwordGen(length);
