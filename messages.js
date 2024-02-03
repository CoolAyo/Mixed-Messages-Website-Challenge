const programmingQuotes = [
    "First, solve the problem. Then write the code. – John Johnson",
    "The computer was born to solve problems that did not exist before. – Bill Gates",
    "Make it work, make it right, make it fast. – Kent Beck",
    "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live. – Rick Osborne",
    "People don’t care about what you say, they care about what you build. – Mark Zuckerberg",
    "As a programmer, it is your job to put yourself out of business. What you do today can be automated tomorrow. – Doug McIlroy",
    "We have to stop optimizing for programmers and start optimizing for users. – Jeff Atwood",
    "There is a big difference between making a simple product & making a product simple. – Des Traynor",
    "If the code and the comments do not match, possibly both are incorrect. – Norm Schryer",
    "Before software can be reusable it first has to be usable. – Ralph Johnson"
];


document.addEventListener('DOMContentLoaded', function() {

    function getRandomQuote() {
        const messageChoice = Math.floor(Math.random() * programmingQuotes.length);
        document.getElementById("messagesparagraph").innerHTML = programmingQuotes[messageChoice];
    }

    // Initially load a random quote
    getRandomQuote();

    // Setup the button click event handler
    document.getElementById("changeQuoteButton").addEventListener("click", getRandomQuote);
});

