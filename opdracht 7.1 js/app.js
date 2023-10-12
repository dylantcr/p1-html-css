let budget = 100;
//let budget = prompt("wat is het saldo?", "")

let productprijs = 60;
//let productprijs = prompt("wat is de prijs van het product?", "")

let saldo = document.getElementById("Resultaat");

if (budget => productprijs) {
    let over = budget - productprijs;
    Saldo.innerHTML = "U heeft genoeg geld!" + over + " is er over van : " + budget + "Euro";
    saldo.style.color = "green";
}
else {
    Saldo.innerHTML = "Helaas, u heeft te weinig geld!";
    saldo.style.color = "red";
}