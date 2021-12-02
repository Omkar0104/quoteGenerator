// Get Quote from API
const quoteContainer = document.getElementById("quote-container");
const authorName = document.getElementById("author");
const quoteContent = document.getElementById("quote");
const newQuote = document.getElementById("new-quote");
const quoteContainerClass = document.getElementsByClassName("quote-container");
const spinner = document.querySelector(".spinner");
let requestNo=0;
// spinner.classList.add('loader');

async function getQuote() {
  // const proxyUrl='https://cors-anywhere.herokuapp.com/';
  try{
  const apiURL = "https://api.quotable.io/random?tags=technology,famous-quotes";
  // start loading
  spinner.classList.add("loader");
//  hiding container
  quoteContainer.style.opacity = 0;
  // fetch the quote details
  const response = await fetch(apiURL);
  const data = await response.json();
  // displaying container
  quoteContainer.style.opacity = 1;
  // removing loader
  spinner.classList.remove('loader');
  // displaying quote and author
  quoteContent.innerHTML = data.content;
  authorName.innerHTML = `-${data.author}`;

  let quoteArray = data.content.split(" ");
  let joinedQuote=quoteArray.join('%20');
  let tweetLink = document.getElementById('tweetLink');
  tweetLink.setAttribute('href',`https://twitter.com/intent/tweet?text=${joinedQuote}`);
  }catch(error){
    requestNo++;
    if(requestNo<5)
    getQuote();

  }

}

// onload
getQuote();
newQuote.addEventListener("click", () => getQuote());
