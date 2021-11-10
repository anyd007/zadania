const show = document.createElement("h2");
const show2 = document.createElement("h2");
const btn = document.querySelector("button");
document.body.append(show);
document.body.append(show2);

// const fuelCost = 6;
// const oferta = {
//   marka: "Kia",
//   model: "Carens",
//   cena: 60000,
//   fuelCost,
//   koszt100km() {
//     return this.spalanie * fuelCost;
//   },
//   wiekSamochodu: function() {
//     let data = new Date().getFullYear()
//     let year = data - this.age
//     if(year == 1){
//         year = `${year} rok`
//     }else if(year >1 && year <5){
//         year = `${year} lata`
//     }else{
//         year = `${year} lat`
//     }
//     return year;
//   },
// };
// oferta.spalanie = 8;
// oferta.age = 2000;
// show.textContent = `spalanie za 100km jazdy to : ${oferta.koszt100km()} zł`;
// show2.textContent = `wiek twojego auta to: ${oferta.wiekSamochodu()}`
let cost = 6;
class Oferta {
  constructor(marka, model, cena) {
    this.marka = marka;
    this.model = model;
    this.cena = cena;
  }
  fuelCost() {
    show.textContent = `srednia cena za przejechane 100km to`;
  }
}
class BetterOffer extends Oferta {
  constructor(marka, model, cena, spalanie, rok) {
    super(marka, model, cena);
    this.spalanie = spalanie;
    this.rok = rok;
  }
  awarydge() {
    return this.spalanie * cost;
  }
}
const newCar = new BetterOffer("Maluch", "126p", 2000, 9.5, 1990);
show.textContent = `mój samochód to ${newCar.marka}, jest z roku ${newCar.rok} i spala ${newCar.spalanie} l/100km`;
show2.textContent = `koszt przejechania 100km to  ${newCar.awarydge()} zł`;
console.log(newCar);

const Komis = {
  oferta1: new BetterOffer("volvo", "s60", 30303),
  oferta2: new BetterOffer("peugot", "607", 4000),
  oferta3: new BetterOffer("audi", "a30", 44444),
  oferta4: new BetterOffer("maluch", "126p", 1000),
};

for (const wypiszOferte in Komis) {
  let btn = document.createElement("button");
  document.body.append(btn);
  console.log(Komis[wypiszOferte]);
  btn.textContent = Komis[wypiszOferte].marka;
}
