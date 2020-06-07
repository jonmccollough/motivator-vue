var quotes =[
    "the harder you work for something, the greater you'll feel when you achieve it!",
    "push yourself, because no one else is going to do it for you!",
    "Your only limitation is your imagination!"
]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}