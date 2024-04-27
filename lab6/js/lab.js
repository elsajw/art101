/**
 * Author:    Elsa Williams
 * Created:   04.27.2024
 * 
 **/

// Define Variables
const myTransport = ["walking", "bus", "car"];

// Creating an Object for my Main Ride
const myMainRide = {
  make: "Ford",
  model: "Taurus",
  color: "pink",
  year: 2004,
  age: function() {
      return 2024 - this.year;
  }
}

//Output
document.writeln("How I Get Around: " + myTransport + "<br>");

document.writeln ("My Imaginary Main Ride: <pre> ",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");

