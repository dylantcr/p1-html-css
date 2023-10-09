function KleurAanpassen()
{
    document.getElementById("kop1").style.color = "blue";
    document.getElementById("kop1").innerHTML = "i have changed";
}

function Reset()
{
    document.getElementById("kop1").style.color = "black";
    document.getElementById("kop1").innerHTML = "welkom";
}

function Calculate(getal1, getal2)
{
    antwoord = getal1 + getal2;
    console.log("Hello world!");
    console.log(antwoord);
}

Calculate(7,8);