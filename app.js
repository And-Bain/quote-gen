function newQuote() {
    // alert('ya done touched me')
    var quotes = [
        "Why Hello There.",
        "I Am That Duck!",
        "*Laughing Wheeze*",
        "I AM THE BARREL MAKER.",
        "*SIGH OF DISSAPOINTMENT*",
        "CEEEEAAAASER!!!",
        "SpeedwaGON!",
        "Get chance and luck.",
        "just wild heaven.",
        "send my love to jesus man.",
        "Crazy baby!",
        "knocking on heaven's door."
    ]
    var randNum = Math.floor(Math.random() * (quotes.length))
    document.getElementById('quoteDisplay').innerHTML = quotes[randNum]
}