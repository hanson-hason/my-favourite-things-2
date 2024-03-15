//Frayz Cumpleeter 9000 by Hanson

//event lissener
document.getElementById("buttun1").addEventListener("click", act);

//Place orderur
function act() {
//Input
let anser = prompt("Get you're act _______ (fill in the blank!)")

//Progress
if (anser == "tugedder") {
    let msg = `correct! the frayz is "get you're act tugedder"`;
} else {
    let msg = `wrong anser. correct is phrase: "get you're act tugedder." you're anser: get you're act ${anser}`
}

//Ouput
alert(msg);
}