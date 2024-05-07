/**
 * Author:    Elsa Williams
 * Created:   05.06.2024
 **/

//creating the function
function addsThree(x){
  return (x + 3);
}

//test the function
console.log("What's 3 + 3?", addsThree(3));
console.log("what's 6 + 3?", addsThree(6));

//creating the array
array = [27, -3, 42, 0, 200, 1980];
console.log("My array: ", array);

let result = array.map(addsThree);
//should return [30, 0, 45, 3, 203, 1983]
console.log("Adding 3 to each value in the array:", result);

//second function
let results = array.map(function(x){
  return x * 2;
});
//should return [54, -6, 84, 0, 400, 3960]
console.log("Multiplying the array's values by two: ", results);



 // Your map results data
 let mapResults = "My map results here! ";

 // Use jQuery to select the element by its ID and set the HTML content
 $("#output").html(mapResults);