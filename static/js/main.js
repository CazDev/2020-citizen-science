import {Views} from './views.js';
import {Model} from './model.js';
import {split_hash} from './util.js';

var hashid = 0;

function redraw() { 

    let hash = split_hash(window.location.hash);

    var whatis = document.getElementById("whatis");
    var users = document.getElementById("users");
    var user = document.getElementById("user-list");
    var observations = document.getElementById("observations");
    var observation = document.getElementById("observation");
    var heading = document.getElementById("heading");
    var form = document.getElementById("submit-observation");

    whatis.style.display = "none";
    users.style.display = "none";
    observations.style.display = "none";
    user.style.display = "none";
    observation.style.display = "none";
    heading.style.display = "none";
    form.style.display = "none";

    if (window.location.hash === "#!/observations") {
        observations.style.display = "block";
        heading.style.display = "block";
    }
    else if (window.location.hash === "#!/users"){
        users.style.display = "block";
        heading.style.display = "block";
    }
    else if (window.location.hash === "#!/submit"){
        form.style.display = "block";
    }
    else if (window.location.hash.includes("#!/users/")){
        hashid = hash.id;
        user.style.display = "block";
    }
    else if (window.location.hash.includes("#!/observations/")){
        hashid = hash.id;
        observation.style.display = "block";
    }
    else {
        whatis.style.display = "block";
        users.style.display = "block";
        observations.style.display = "block";
        heading.style.display = "block";
    }
}

window.onload = function() {
    Model.update_observations();
    Model.update_users();
};
window.onhashchange = function() {
    Model.update_observations();
    Model.update_users();
}

window.addEventListener('modelUpdated', function (e) { 
    Views.usersView("users-list", Model.get_users());
    Views.observationsView("recent-observations-list", Model.get_observations());
    Views.userView("user-list", Model.get_user(hashid));
    Views.observationView("observation-list", Model.get_observation(hashid));
    redraw();
}, false);

window.addEventListener('observationAdded', function (e) { 
    
}, false);
