const quotes = [
    {
      quote: "You can eat food even if you don't speak Korean!",
      /*author: "D!ng",*/
    },
  ];
  
  const quote = document.querySelector("#quote span:first-child");
  /*const author = document.querySelector("#quote span:last-child");*/
  
  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
  
  quote.innerText = `"${todaysQuote.quote}"`;
  /*author.innerText = ` - ${todaysQuote.author}`;*/