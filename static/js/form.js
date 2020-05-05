import {Model} from './model.js';

const formElem = document.querySelector('form');

formElem.addEventListener('submit', (e) => {
  // on form submission, prevent default
  e.preventDefault();
 
  // construct a FormData object, which fires the formdata event
  new FormData(formElem);
});

formElem.addEventListener('formdata', (e) => {
  console.log('FormData submitted');
 
  // Get the form data from the event object
  let formData = e.formData;
    
  for (var value of formData.entries()) {
    if (value == "") {
        alert("Missing required field: ");
        return;
    }
  }
    
  // submit the data
    Model.add_observation(formData);
});