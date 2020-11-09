const kanyeBtn = document.getElementById('kanyeBtn');
const quoteBox = document.getElementById('quote-box');
const newQuoteBtn = document.getElementById('new-quote');
const kanyeApi = 'https://api.kanye.rest';
const kanyeBush = document.getElementById('bush');
const kanyeOpinion = document.getElementById('opinion');
const kanyeRobot = document.getElementById('robot');
const kanyeGood = document.getElementById('good');
let kanyeQuoteArray = [kanyeBush, kanyeOpinion, kanyeRobot, kanyeGood];

const kanyeSounds = () => {
    let biteIndex = Math.floor((Math.random() * kanyeQuoteArray.length))
    let kanyeSoundbite = kanyeQuoteArray.forEach( (sound, index) => {
        sound.pause(); // reset previous 
        sound.currentTime = 0; // reset position
        if(index === biteIndex) sound.play();
    });
    
    let audio = new Audio(kanyeSoundbite);
    audio.play();
}


const kanyeQuote = async () => {
    const kanyeResponse = await fetch(kanyeApi);
    const quoteJson = await kanyeResponse.json();
    const randomQuote = document.createElement('h3');
    quoteBox.innerHTML = "";
    randomQuote.innerHTML = quoteJson.quote;
    quoteBox.appendChild(randomQuote);
    kanyeBtn.classList.toggle('hidden');
    newQuoteBtn.classList.toggle('hidden');
    kanyeSounds();
}


newQuoteBtn.addEventListener('click',kanyeQuote);
kanyeBtn.addEventListener('click', kanyeQuote)
