// Create a variable named "output" and grab the <div> element named "outputText" from the DOM by using the document.getElementById() method.  I can use this to read or edit(modify) an HTML element
let output = document.getElementById('outputText');

// I'm generating a random value by creating a variable, named "number" and I'm assigning the Math.floor() with the Math.random() times by 100.  This will generate a random number that isn't 1 or a whole number and round it to the nearest integer
let number = Math.floor(Math.random() * 100 + 1)

// Create a function named myFunction that takes in one parameter letter "e" and type e.preventDefault() inside the function.
// The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
// Create a variable named input and select the element name "userInput" from the DOM with the getElementById() method.  Assigned the value property to return the value attribute of the text field.\
// I use an if/else statement to create a condition that will check to see if the input is equal to my number variable and if that statement is true then display the output's inner HTML content with the text of "You guessed right, your number was".  I'm using "template literals". 
// Template literals are strings that allow embedded expressions using backtick characters (``).
// If the condition isn't true then check if input is less than number and display the output's inner HTML with the text of "You guessed too low!" inside a string.
// I use another if statement to create a condition that will check if the input is greater than the number variable then display the output's inner HTML with the text of "You guessed too high!" inside of a string.

function myFunction(e){
    e.preventDefault()

    let input = document.getElementById('userInput').value;

    if (input == number){
        output.innerHTML = `You guessed right, your number was ${number}`
    } else if (input < number){
        output.innerHTML = "You guessed too low!"
    };

    if (input > number){
        output.innerHTML = "You guessed too high!"
    }
}

// Create a function named "fun()" with no parameters
// Inside this function, I will select the id name of "form" from the DOM with the document.getElementById() and use the reset() property.
// Select the id name of "userInput" from the DOM with the document.getElementById() and accessed the inner HTML content of that element and assigned it to an empty strings.  This will actually reset the data.
// Select the id name of "outputText" from the DOM with the document.getElementById() and accessed the inner HTML content of that element and assigned it to an empty strings.  This will actually reset the data.

function fun(){
    document.getElementById('form').reset();

    document.getElementById('userInput').innerHTML = "";
    document.getElementById('outputText').innerHTML = "";
}
