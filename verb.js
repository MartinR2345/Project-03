// Create a variable named "output" and grab the div element named "outputText" from the DOM by using the document.getElementById() method. I can use this to read or edit(modify) an HTML element
let output = document.getElementById('outputText');

// Grab my from the DOM the span element "guesses"
let int = document.getElementById('guesses');

// I'm generating a random value by creating a variable, named "number" and assigned Math.floor() with Math.random() times by 100. This will generate a random number that isn't 1 or a whole number and round it to the nearest integer 
let number = Math.floor(Math.random() * 100) + 1

// This will keep track of the number of guesses a user enters
let numberOfGuesses = 0;



function myFunction(e){
    e.preventDefault()
    // alert("form is submitted")\

    // Grab the the text value a user types from the DOM
    let input = document.getElementById('userInput').value;

    // Update my numberOfGuesses 
    numberOfGuesses += 1;
    guesses.innerHTML = numberOfGuesses;

    if (input === number){
        output.innerText = `You guessed right, your number was ${number}`
    } else if (input < number){
        output.innerText = "You guessed too low! Try Again!"  
    } else if (input > number){
        output.innerText = "You guessed too high! Try Again"
    }
    if (numberOfGuesses > 3) {
        guesses.innerText = `Sorry but all three guesses were wrong. Correct number is: ${number}`;
    }
   
}

// RESET BUTTON
// Create a function named "resetForm()" with no parameters that will reset this number guessing game 
function resetForm(){
    // Reset the form 
    document.getElementById('form').value = "";

    // Reset the input text a user enters 
    document.getElementById('userInput').value = "";

    // Reset the output text 
    document.getElementById('outputText').innerText = "";

    // Reset the numberOfGuesses by setting it to 0 and grabbing from Dom the span element "guesses" and changing the innerText to numberOfGuesses
    numberOfGuesses = 0;
    document.getElementById('guesses').innerText = numberOfGuesses;
}