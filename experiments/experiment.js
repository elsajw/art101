console.log("Hello from experiment.js");

function getNameAndDisplay() {
    // When the button is pushed, prompt the user to input their name with 
    let name = prompt("Name please:"); 
    // Use this input to change the text of the h1 using 
    $('#title').html('Hello, ' + name);
}

// Attach a click handler to the button within the JS file
$("#my-button").click(getNameAndDisplay)
