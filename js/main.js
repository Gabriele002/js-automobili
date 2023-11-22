
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
    document.getElementById("myBtn").addEventListener("click", addCar);
function addCar(event) {
    event.preventDefault();

    let newMarca = document.getElementById("marca").value;
    let newModello = document.getElementById("modello").value;
    let newAlimentazione = document.getElementById("alimentazione").value;

    let newCar = {
        marca: newMarca,
        modello: newModello,
        alimentazione: newAlimentazione,
    }

    auto.push(newCar);
    
        for (let i=0; i< 1; i++) {
        document.getElementById("main_auto").innerHTML += `
            
                <div class="col-4 border border-black p-2">             
                    <h6 class=" mb-2 text-secondary">${newCar.marca}</h6>
                </div>
                <div class="col-4 border border-black p-2">   
                    <h6 class=" mb-2 text-secondary">${newCar.modello}</h6>
                </div>
                <div class="col-4 border border-black p-2">     
                    <h6 class="mb-2 text-secondary">${newCar.alimentazione}</h6>
                </div>  
        `
    }
    
}