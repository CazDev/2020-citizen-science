import {Model} from './model.js';
export {participantid}

var participantid = 0;

const formElem = document.querySelector('form');

formElem.addEventListener('submit', (e) => {
  // on form submission, prevent default
  e.preventDefault();
 
  // construct a FormData object, which fires the formdata event
  new FormData(formElem);
});

formElem.addEventListener('formdata', (e) => {
  var isValid = true;
    
  // Get the form data from the event object
  let formData = e.formData;
  for (var pair of formData.entries()) {
    if (pair[1] == "") {
        let target = document.getElementById("submit-error");
        //Display errors in html
        target.innerHTML = "Error:";
        target.innerHTML += "<p>Missing required field: " + pair[0] + "</p>";
        //Set error state for in valid input
        isValid = false;
    }
    else if (pair[0] == "participant") {
        participantid = pair[1];
    }
  }
    
  // submit the data
    if (isValid) {
        Model.add_observation(formData);
    }
    else {
        return false; // Do not submit when input is not valid
    }
});