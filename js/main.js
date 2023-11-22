
let auto = [
    { marca: "fiat", modello: "utilitaria", alimentazione: "diesel" },
    { marca: "bmw", modello: "sportiva", alimentazione: "benzina" },
    { marca: "mercedes", modello: "sportiva", alimentazione: "benzina" },
    { marca: "lancia", modello: "utilitaria", alimentazione: "eletrica" },
    { marca: "fiat", modello: "utilitaria", alimentazione: "eletrica" },
    { marca: "pegaut", modello: "utilitaria", alimentazione: "diesel" },
    { marca: "fiat", modello: "utilitaria", alimentazione: "eletrica" },
    { marca: "bugatti", modello: "corsa", alimentazione: "benzina" },
    { marca: "ferrari", modello: "corsa", alimentazione: "eletrica" },
    { marca: "pagani", modello: "corsa", alimentazione: "diesel" }
]

    let diesel = [];
    let benzina = [];
    let eletrica = [];
auto.forEach(function (auto)  {
    if (auto.alimentazione == "diesel") {
        diesel.push(auto);
    } else if (auto.alimentazione == "benzina") {
        benzina.push(auto);
    }   else {
        eletrica.push(auto);
    }
})

console.log(diesel);
console.log(benzina);
console.log(eletrica);