function findgyms() {
    firebase.auth().onAuthStateChanged(user => {
        // Check if user is signed in:
        if (user) {

            //go to the correct user document by referencing to the user uid
            currentUser = db.collection("users").doc(user.uid)
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