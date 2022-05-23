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

    let input = document.getElementById('userInput').value;

    numberOfGuesses += 1;
    guesses.innerHTML = numberOfGuesses;

    if (input === number){
        output.innerHTML = `You guessed right, your number was ${number}`
        console.log(input);
    } else if (input < number){
        output.innerHTML = "You guessed too low! Try Again!"  
    } else if (input > number){
        output.innerHTML = "You guessed too high! Try Again"
    }
    if (numberOfGuesses > 3) {
        guesses.innerHTML = `Sorry but all three guesses were wrong. Correct number is: ${number}`;
    }
   
}


// PlAY AGAIN BUTTON
// Create a function named "reloadThePage()" with no parameters that will reload this number guessing game web browser
function reloadThePage(){
    window.location.reload();
     
}