const kanyeBtn = document.getElementById('kanyeBtn');
const quoteBox = document.getElementById('quote-box');
const newQuoteBtn = document.getElementById('new-quote');
const kanyeApi = 'https://api.kanye.rest';


const kanyeQuote = async () => {
    const kanyeResponse = await fetch(kanyeApi);
    const quoteJson = await kanyeResponse.json();
    const randomQuote = document.createElement('h3');
    quoteBox.innerHTML = "";
    randomQuote.innerHTML = quoteJson.quote;
    quoteBox.appendChild(randomQuote);
    kanyeBtn.classList.toggle('hidden');
    newQuoteBtn.classList.toggle('hidden');
}

kanyeBtn.addEventListener('click', kanyeQuote);

newQuoteBtn.addEventListener('click', async () => {
    const kanyeResponse = await fetch(kanyeApi);
    const quoteJson = await kanyeResponse.json();
    const randomQuote = document.createElement('h3');
    quoteBox.innerHTML = "";
    randomQuote.innerHTML = quoteJson.quote;
    quoteBox.appendChild(randomQuote);
    kanyeBtn.classList.toggle('hidden');
    newQuoteBtn.classList.toggle('hidden');
});