export {Views};

const Views = {

// userView - generate a view of users
//   and insert it at `targetid` in the document
usersView: function(targetid, users) {
    let target = document.getElementById(targetid);
    
    let template = Handlebars.compile(
        document.getElementById("users-template").textContent
    );
    
    let list = template({'users': users})
    
    target.innerHTML = list;
},

observationsView: function(targetid, observations) {
    let target = document.getElementById(targetid);
    
    let template = Handlebars.compile(
        document.getElementById("observations-template").textContent
    );
    
    let list = template({'observations': observations})
    
    target.innerHTML = list;
},

observationView: function(targetid, observation) {
    let target = document.getElementById(targetid);
    
    let template = Handlebars.compile(
        document.getElementById("observation-template").textContent
    );
    
    let list = template(observation)
    
    target.innerHTML = list;
},

userView: function(targetid, user) {
    let target = document.getElementById(targetid);
    
    let template = Handlebars.compile(
        document.getElementById("user-template").textContent
    );
    
    let list = template(user)
    
    target.innerHTML = list;
}
}

