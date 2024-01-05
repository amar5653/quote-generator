const quoteBtn = document.getElementById("quote-btn");
const tweetBtn = document.getElementById("tweet-btn");
const blockQuote = document.querySelector(".quote");
const author = document.querySelector(".author");
const apiUrl = "https://api.quotable.io/random";
const tweeturl = "https://twitter.com/intent/tweet?text=";
async function createQuote(url){
    const response = await fetch(apiUrl);
    var data = await response.json();
    console.log(data);

    blockQuote.innerHTML = data.content;
    author.innerHTML = data.author;
}

createQuote(apiUrl);

async function tweet(){
    window.open(tweeturl+blockQuote.innerHTML+" - "+author.innerHTML,"Tweet Window", "width=600", "height=200");
}