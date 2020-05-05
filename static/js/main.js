import {Views} from './views.js';
import {Model} from './model.js';
import {split_hash} from './util.js';

var hashid = 0; // VaLue to hold user IDs and observation IDs

//Main redraw function to update the page display
function redraw() { 

    let hash = split_hash(window.location.hash);

    var whatis = document.getElementById("whatis"); // define page elements to display
    var users = document.getElementById("users");
    var user = document.getElementById("user");
    var observations = document.getElementById("observations");
    var observation = document.getElementById("observation");
    var heading = document.getElementById("heading");
    var form = document.getElementById("submit-observation");
    var userObservations = document.getElementById("user-observations");

    whatis.style.display = "none"; // Hide all elements
    users.style.display = "none";
    observations.style.display = "none";
    user.style.display = "none";
    observation.style.display = "none";
    heading.style.display = "none";
    form.style.display = "none";
    userObservations.style.display = "none";

    if (window.location.hash === "#!/observations") { // observations page
        observations.style.display = "block"; // Display relevant elements
        heading.style.display = "block";
    }
    else if (window.location.hash === "#!/users"){ // Users page
        users.style.display = "block"; // Display relevant elements
        heading.style.display = "block";
    }
    else if (window.location.hash === "#!/submit"){ // Form submission page 
        form.style.display = "block"; // Display relevant elements
    }
    else if (window.location.hash.includes("#!/users/")){ // Specific user page
        hashid = hash.id; // Get ID to be used in View function
        user.style.display = "block"; // Display relevant elements
        userObservations.style.display = "block";
    }
    else if (window.location.hash.includes("#!/observations/")){ // Specific observation page
        hashid = hash.id; // Get ID to be used in View function
        observation.style.display = "block"; // Display relevant elements
    }
    else { // Main page
        whatis.style.display = "block"; // Display relevant elements
        users.style.display = "block";
        observations.style.display = "block";
        heading.style.display = "block";
    }
}

window.onload = function() {
    Model.update_observations(); // update api information
    Model.update_users();
};
window.onhashchange = function() {
    Model.update_observations(); // update api information
    Model.update_users();
}

window.addEventListener('modelUpdated', function (e) { // Apply views when model is updated
    Views.usersView("users-list", Model.get_users());
    Views.observationsView("recent-observations-list", Model.get_observations());
    Views.userView("user-list", Model.get_user(hashid));
    Views.observationView("observation-list", Model.get_observation(hashid));
    Views.userObservationsView("user-observations-list", Model.get_user_observations(hashid));

    redraw(); // after all views are updated then display page with redraw
}, false);

window.addEventListener('observationAdded', function (e) {  // View observation when observation is added
    console.log( "Observation added" );
    window.location.hash = "#!/observations/" + Model.get_observations().length;
    Views.observationView("observation-list", Model.get_observation(Model.get_observations().length));

    redraw(); // after all views are updated then display page with redraw
}, false);
