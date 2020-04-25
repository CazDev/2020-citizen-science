export {Model};

/* 
 * Model class to support the Citizen Science application
 * this class provides an interface to the web API and a local
 * store of data that the application can refer to.
 * The API generates two different events:
 *   "modelChanged" event when new data has been retrieved from the API
 *   "observationAdded" event when a request to add a new observation returns
*/

const Model = {

    observations_url: '/api/observations', 
    users_url:  '/api/users',   
    
    // this will hold the data stored in the model
    data: {
        observations: [],
        users: []
    },

    // update_users - retrieve the latest list of users 
    //    from the server API
    // when the request is resolved, creates a "modelUpdated" event 
    // with the model as the event detail
    update_users: function() {
        fetch(this.users_url) // how does this not work??
        .then(
            function(response) {
                return response.json();
            }
        )
        .then(
            (data) => {
                this.data.users = data;
                let event = new CustomEvent("modelUpdated");
                window.dispatchEvent(event);
            }
        );
    },

    // update_observations - retrieve the latest list of observations
    //   from the server API
    // when the request is resolved, creates a "modelUpdated" event 
    // with the model as the event detail
    update_observations: function() {
        fetch(this.observations_url) // how does this not work??
        .then(
            function(response) {
                return response.json();
            }
        )
        .then(
            (data) => {
                this.data.observations = data;
                let event = new CustomEvent("modelUpdated");
                window.dispatchEvent(event);
            }
        );
    },

    // get_observations - return an array of observation objects
    get_observations: function() { //done
        return this.data.observations;
    },

    // get_observation - return a single observation given its id
    get_observation: function(observationid) { //done
        if (this.data.observations.some(observation => observation.id == observationid)){
                return this.data.observations.find(observation => observation.id == observationid)
            }
        else {
            return null;
        }
    },
 
    set_observations: function(observations) { //done
        this.data.observations = observations;
    },

    // add_observation - add a new observation by submitting a request
    //   to the server API
    //   data contains all fields in the observation object
    // when the request is resolved, creates an "observationAdded" event
    //  with the response from the server as the detail
    add_observation: function(data) {
        //todo
    },

    // get_user_observations - return just the observations for
    //   one user as an array
    get_user_observations: function(userid) {
        //todo
        return this.data.users.indexOf(this.data.observations);
        //return this.data.observations.find(observation => observation.participant == userid);
    },

    // get_recent_observations - return the N most recent
    //  observations, ordered by timestamp, most recent first
    get_recent_observations: function(N) {
        //todo
    },

    /* 
    * Users
    */
    // get_users - return the array of users
    get_users: function() { //done
        return this.data.users;
    },

    // set_users - set the array of users
    set_users: function(users) { //done
        this.data.users = users;
    },

    // get_user - return the details of a single user given 
    //    the user id
    get_user: function(userid) { //done
        if (this.data.users.some(user => user.id == userid)){
                return this.data.users.find(user => user.id == userid)
            }
        else {
            return null;
        }
    }

};
