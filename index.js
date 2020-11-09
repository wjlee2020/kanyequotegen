const kanyeBtn = document.getElementById('kanyeBtn');
const quoteBox = document.getElementById('quote-box');
const newQuoteBtn = document.getElementById('new-quote');
const kanyeApi = 'https://api.kanye.rest';
const kanyeBush = document.getElementById('bush');
const kanyeOpinion = document.getElementById('opinion');
const kanyeRobot = document.getElementById('robot');
let kanyeQuoteArray = [kanyeBush, kanyeOpinion, kanyeRobot];

const kanyeSounds = () => {
        let kanyeSoundbite = kanyeQuoteArray.forEach( sound => {
            sound.play();
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
