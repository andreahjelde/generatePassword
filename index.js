const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

let password1El = document.getElementById("password1-el")
let password2El = document.getElementById("password2-el")

function generatePassword(lengde) {
    let passord = ""
    for (let i = 0; i < lengde; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length)
        passord += characters[randomIndex]
    }
    return passord
}

function generatePasswordHandler() {
    let input = document.getElementById("input").value;
    password1El.textContent = generatePassword(input);
    password2El.textContent = generatePassword(input);
}

function copyPassword1Handler() {
    navigator.clipboard.writeText(document.getElementById("password1-el").innerHTML)
    console.log(document.getElementById("password1-el").innerHTML)
    alert("Password copied")
}


function copyPassword2Handler() {
    navigator.clipboard.writeText(document.getElementById("password1-el").innerHTML)
    alert("Password copied")
    console.log(document.getElementById("password1-el").innerHTML)
}

//Inputfelt som skal ta inn et tall, og det tallet skal være tallet til passordet
//print ut tallet som er skrevet inn i input

//knapp så de kan kopiere ut passordet med  --> clipboard