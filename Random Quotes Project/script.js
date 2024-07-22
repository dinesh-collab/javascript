const quotes = ["Quote 1", "Quote 2", "Quote 3"];
function displayRandomQuote() {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").innerText = randomQuote;
}
