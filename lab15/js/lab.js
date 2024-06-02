/**
 * Author:    Elsa Williams
 * Created:  June 2, 2024
 * 
 **/

const URL = "https://yesno.wtf/api";

// create a button listener
$("#my-button").click(function(){
  // call ajax
  $.ajax(ajaxObj);
})

// setup ajax object
const ajaxObj = {
  url: URL,
  // data: {},
  type: "GET",
  dataType: "json",
  success: ajaxSuccess,
  error: ajaxError
}

// create ajax success callback (named)
function ajaxSuccess(data) {
  // console.log("Data:", data);
  // parse json
  const answer = data.answer;

  // put answer in output div
  $("#output").html(answer);
  
}


// create ajax error callback
function ajaxError(request,error){
	  console.log("Oops:", request, error);
}
