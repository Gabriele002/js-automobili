
let auto = [
    { marca: "Fiat", modello: "Utilitaria", alimentazione: "Diesel" },
    { marca: "Bmw", modello: "Sportiva", alimentazione: "Benzina" },
    { marca: "Mercedes", modello: "Sportiva", alimentazione: "Benzina" },
    { marca: "Lancia", modello: "Utilitaria", alimentazione: "Eletrica" },
    { marca: "Fiat", modello: "Utilitaria", alimentazione: "Eletrica" },
    { marca: "Pegaut", modello: "Utilitaria", alimentazione: "Diesel" },
    { marca: "Fiat", modello: "Utilitaria", alimentazione: "Eletrica" },
    { marca: "Bugatti", modello: "Corsa", alimentazione: "Benzina" },
    { marca: "Ferrari", modello: "Corsa", alimentazione: "Eletrica" },
    { marca: "Pagani", modello: "Corsa", alimentazione: "Diesel" }
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


for (let i=0; i< auto.length; i++) {
    document.getElementById("main_auto").innerHTML += `
        
            <div class="col-4 border border-black p-2">             
                <h6 class=" mb-2 text-secondary">${auto[i].marca}</h6>
            </div>
            <div class="col-4 border border-black p-2">   
                <h6 class=" mb-2 text-secondary">${auto[i].modello}</h6>
            </div>
            <div class="col-4 border border-black p-2">     
                <h6 class="mb-2 text-secondary">${auto[i].alimentazione}</h6>
            </div>  
    `
}

