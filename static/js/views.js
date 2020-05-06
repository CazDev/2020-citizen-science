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

// View to display all observations
//   and insert it at `targetid` in the document
observationsView: function(targetid, observations) {
    let target = document.getElementById(targetid);
    
    let template = Handlebars.compile(
        document.getElementById("observations-template").textContent
    );
    
    let list = template({'observations': observations})
    
    target.innerHTML = list;
},

// View to display an observation
//   and insert it at `targetid` in the document
observationView: function(targetid, observation) {
    let target = document.getElementById(targetid);
    
    let template = Handlebars.compile(
        document.getElementById("observation-template").textContent
    );
    
    let list = template(observation)
    
    target.innerHTML = list;
},

// View to display a user
//   and insert it at `targetid` in the document
userView: function(targetid, user) { 
    let target = document.getElementById(targetid);
    
    let template = Handlebars.compile(
        document.getElementById("user-template").textContent
    );
    
    let list = template(user)
    
    target.innerHTML = list;
},

// View to display obervations belonging to a user
//   and insert it at `targetid` in the document
userObservationsView: function(targetid, observations) {
    let target = document.getElementById(targetid);
    
    let template = Handlebars.compile(
        document.getElementById("user-observations-template").textContent
    );
    
    let list = template({'observations': observations})
    
    target.innerHTML = list;
}

}

