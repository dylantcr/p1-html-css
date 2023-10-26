let product = 100;
//let budget = 10;
let budget = prompt("hoeveel geld heb je?", 0);

let Resultp = document.getElementById("ResultParagraph");
if (product >= budget) {
    Resultp.innerHTML= "Helaas, te weinig geld!";
    Resultp.style.color = "red";
    }
else {
    Resultp.innerHTML = "U heeft genoeg geld!";
    Resultp.style.color = "green"
}