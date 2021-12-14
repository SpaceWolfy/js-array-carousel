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

//Image Array 
const imageSwitch = [
    'https://th.bing.com/th/id/R.f51506ed3b421663d941c1ffa9bc9c62?rik=C0rWuaZZsvKKxQ&riu=http%3a%2f%2fwww.fotolip.com%2fwp-content%2fuploads%2f2016%2f05%2funiverse-nebula-galaxy-wallpapers-10.jpg&ehk=T9SnqZeUmdciAxBbW3e7BlLB0sZGmmmQnaEeXZ5Syl8%3d&risl=&pid=ImgRaw&r=0',
    'https://th.bing.com/th/id/R.d208765572b70dce1ecfc725c1ccbd8d?rik=q%2fCjtgZNHK3BGA&riu=http%3a%2f%2f1.bp.blogspot.com%2f-Zrq0nRRtiPk%2fUXxPekOURqI%2fAAAAAAAAAeg%2fEMQGlEOArBU%2fs400%2f287090_365287422_y1pll35debjzxbxt4pmvhx8pk7bxb8hhf3yhedto2fyx1-1zzzftioez_H161647_L.jpg&ehk=hnSu2kqv%2bA3FZ0vO7e5ETC9%2fSNHSco8t49BLKXxDI%2fk%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1',
    'https://www.bing.com/th?id=AMMS_b8af090f59957c846481271f99e48614&w=612&h=353&c=7&rs=1&qlt=80&o=6&cdv=1&pid=16.1',
    'https://th.bing.com/th/id/R.a146284a8b7d56c5dbf760ed830a15c0?rik=mKN3RFHze9lBzw&riu=http%3a%2f%2f4.bp.blogspot.com%2f-5hFMIIxVHRM%2fVMd7HhAy7BI%2fAAAAAAAAFBU%2fR8iprRzY9QE%2fs1600%2fimage.jpg&ehk=QmklfZAKMsUXC7FWPxuBc8ZKy7MgOh8wP8uFaoUKBGQ%3d&risl=&pid=ImgRaw&r=0'
]

//Creo la variabile currentIndex, in let, per far sì che possa variare
//questa variabile andrà a lavorare sia per il primo array che per il secondo.
let currentIndex = 0;

//Creo due variabili da correlare a titoli e paragrafi:
let h2Title = document.querySelector('.paragraph-title');
let paragraph = document.querySelector('.paragraph');

//Creo una variabile da correlare alle immagini
let img = document.querySelector('img')

//Definisco le variabili relative ai pulsanti:
let btnBackward = document.querySelector('.fa-arrow-circle-left');
let btnForward = document.querySelector('.fa-arrow-circle-right');

//associazione variabili:
/* h2Title = titleSwitch[currentIndex];
paragraph = paragraphSwitch[currentIndex]; */

//output
h2Title.innerHTML = `<h2>${titleSwitch[currentIndex]}</h2>`;
paragraph.innerHTML = `<p>${paragraphSwitch[currentIndex]}</p>`;
img.src = imageSwitch[currentIndex];

//funzione legata al click della freccia destra (avanti)
btnForward.addEventListener('click', function(){
    currentIndex++
    if(currentIndex > titleSwitch.length -1 && currentIndex > paragraphSwitch.length - 1) {
        currentIndex = 0;
    }
    h2Title.innerHTML = `<h2>${titleSwitch[currentIndex]}</h2>`;
    paragraph.innerHTML = `<p>${paragraphSwitch[currentIndex]}</p>`;

    if(currentIndex > imageSwitch.length -1) {
        currentIndex = 0;
    }
    /* img.innerHTML = `<img src="${imageSwitch[currentIndex]}" </>`; */
    img.src = imageSwitch[currentIndex]
    console.log(img)
});

//funzione legata al click della freccia sinistra (indietro)
btnBackward.addEventListener('click', function(){
    currentIndex--
    if(currentIndex === -1) {
        currentIndex = 3;
    }

    if(currentIndex === imageSwitch.length -1) {
        currentIndex = 3;
    }
    console.log(currentIndex)
    h2Title.innerHTML = `<h2>${titleSwitch[currentIndex]}</h2>`;
    paragraph.innerHTML = `<p>${paragraphSwitch[currentIndex]}</p>`;
    img.src = imageSwitch[currentIndex];
});