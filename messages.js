let messages = ["Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
"Success is not final, failure is not fatal: It is the courage to continue that counts",
"Success is not about the destination; it's about the journey. Embrace the challenges, learn from them, and keep moving forward."];
let messageChoice = Math.floor(Math.random() * messages.length) 

window.onload = function(){
    document.getElementById("messagesparagraph").innerHTML = messages[messageChoice];
}
