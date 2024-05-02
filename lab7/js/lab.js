/**
 * Author:    Elsa Williams
 * Created:   05.02.2024
 **/

//sortUserName- function that takes user input an sorts the letters of their name

function sortUserName() {
  let userName = window.prompt("Hello! Please tell me your name, and I'll cook it into alphabet soup.")
  console.log("userName=", userName);
  // split string to array
  let nameArray = userName.split('');
  console.log("nameArray=", nameArray);
  // sort the array
  let nameArraySort = nameArray.sort();
  console.log("nameArraySort =", nameArraySort);
  // join array back into a string
  let nameSorted = nameArraySort.join('');
  console.log("nameSorted =", nameSorted);
  // results
  return nameSorted;
}

//output
document.writeln("Here you go. Eat up! ",
  sortUserName(), "</br>");
