// Randam Password Generator

function generatingPassword(length ,
                             includeUppercase ,
                              includeLowercase ,
                               includeNumbers ,
                                includeSymbols
                            ){
    if(length <= 0){
        return "Password length must be greater than 0";
    }


    const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let allowedChars = "";
    let Password = "";

    allowedChars += includeUppercase ? upperCaseChars : "";
    allowedChars += includeLowercase ? lowerCaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";
 
    if(allowedChars.length === 0){
        return "You must select at least one character type";
    }
    
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        Password += allowedChars.charAt(randomIndex);
    }
    return Password;
}

function RandamNum(min , max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}