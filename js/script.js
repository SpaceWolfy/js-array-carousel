//Creazione degli array
const titleSwitch = [
    'Definizione di universo', 
    'Il mito della biga alata', 
    'Cucinare una barbabietola', 
    'La simmetria'
];

const paragraphSwitch = [
    'L’Universo si può definire come “l’insieme di tutte le cose che esistono”: stelle, galassie, pianeti, materia, energia. Ad occhio nudo è visibile solo una piccolissima parte di quello che noi definiamo Universo.',
    'Il mito del carro e dell\'auriga, o della biga alata, tratto dal Fedro di Platone, serve a spiegare la teoria platonica della reminiscenza dell\'anima, un fenomeno che durante la reincarnazione produce ricordi legati alla vita precedente.',
    'Volete preparare un aperitivo insolito? Lasciate stare le patatine e preparate della chips di barbabietola, da servire con noccioline e olive. Tagliate la barbabietola cruda in fettine molto sottili, buttatele nell’olio caldo e lasciate cuocere sino a che non diventeranno croccanti. Asciugate le chips con della carta assorbente e servite caldissime.',
    'Il termine simmetria indica generalmente la presenza di alcune ripetizioni nella forma geometrica di un oggetto.'
];

//Creo la variabile currentIndex, in let, per far sì che possa variare
//questa variabile andrà a lavorare sia per il primo array che per il secondo.
let currentIndex = 0;

//Creo due variabili da correlare a titoli e paragrafi:
let h2Title = document.querySelector('.paragraph-title');
let paragraph = document.querySelector('.paragraph');

//Definisco le variabili relative ai pulsanti:
let btnBackward = document.querySelector('.fa-arrow-circle-left');
let btnForward = document.querySelector('.fa-arrow-circle-right');

//associazione variabili:
/* h2Title = titleSwitch[currentIndex];
paragraph = paragraphSwitch[currentIndex]; */

//output
h2Title.innerHTML = `<h2>${titleSwitch[currentIndex]}</h2>`
paragraph.innerHTML = `<p>${paragraphSwitch[currentIndex]}</p>`

//funzione legata al click della freccia destra (avanti)
btnForward.addEventListener('click', function(){
    currentIndex++
    if(currentIndex > titleSwitch.length -1 && currentIndex > paragraphSwitch.length - 1) {
        currentIndex = 0;
    }
    h2Title.innerHTML = `<h2>${titleSwitch[currentIndex]}</h2>`
    paragraph.innerHTML = `<p>${paragraphSwitch[currentIndex]}</p>`
});

//funzione legata al click della freccia sinistra (indietro)
btnBackward.addEventListener('click', function(){
    currentIndex--
    if(currentIndex === -1) {
        currentIndex = 3;
    }
    console.log(currentIndex)
    h2Title.innerHTML = `<h2>${titleSwitch[currentIndex]}</h2>`
    paragraph.innerHTML = `<p>${paragraphSwitch[currentIndex]}</p>`
});