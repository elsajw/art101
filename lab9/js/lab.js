/*
   lab.js - This JavaScript/jQuery script uses buttons to modify some elements on the page

   Requirements: jQuery must be loaded for this script to work.

   Author: Elsa Williams
   Date: May 10 2023
*/

// add button to challenge section
$("#challenge").append("<button id='button-challenge'>Magic Trick!</button>");
    // add a click listener to the challenge button
    $("#challenge").click(function(){
      // now add (or subtract) the "special" class to the section
      $("#challenge").toggleClass("special");
    });



// add button to problems section
$("#problems").append("<button id='button-problems'>Magic Trick!</button>");
    // add a click listener to the problems button
    $("#problems").click(function(){
      // now add (or subtract) the "special" class to the section
      $("#problems").toggleClass("special");
    });


// add button to results section
$("#results").append("<button id='button-results'>Magic Trick!</button>");
    // add a click listener to the results button
    $("#results").click(function(){
      // now add (or subtract) the "special" class to the section
      $("#results").toggleClass("special");
    });
