//---------------------------------
//If user is logged in, displays gyms in their city
//
//param: None
//precondition: none
//postcondition: if user is logged in, gyms in their city are displayed
//return: None
//---------------------------------
function findgyms() {
    firebase.auth().onAuthStateChanged(user => {
        // Check if user is signed in:
        if (user) {

            //go to the correct user document by referencing to the user uid
            currentUser = db.collection("users").doc(user.uid)                        // Read
            //get the document for current user.
            currentUser.get()
                .then(userDoc => {
                    //get the data fields of the user
                    var userCity = userDoc.data().city;
                    
                    document.querySelector('#gmap_canvas').src = `https://maps.google.com/maps?q=gyms%20in%20${userCity}&t=&z=13&ie=UTF8&iwloc=&output=embed`; 

                })
        } else {
            document.querySelector('#gmap_canvas').src = `https://maps.google.com/maps?q=gyms%20in%20burnaby&t=&z=13&ie=UTF8&iwloc=&output=embed`; 

        }
    });
}
findgyms();