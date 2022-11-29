var currentUser

//---------------------------------
// if a user is logged in, display their name, location, and school
//
//precondition: user is logged in
//postcondition: user's name, location, and school are displayed
//---------------------------------
function populateInfo() {
    firebase.auth().onAuthStateChanged(user => {
        // Check if user is signed in:
        if (user) {

            //go to the correct user document by referencing to the user uid
            currentUser = db.collection("users").doc(user.uid)                      // Read
            //get the document for current user.
            currentUser.get()
                .then(userDoc => {
                    //get the data fields of the user
                    var userName = userDoc.data().name;
                    var userSchool = userDoc.data().school;
                    var userCity = userDoc.data().city;

                    //if the data fields are not empty, then write them in to the form.
                    if (userName != null) {
                        document.getElementById("nameInput").value = userName;
                    }
                    if (userSchool != null) {
                        document.getElementById("schoolInput").value = userSchool;
                    }
                    if (userCity != null) {
                        document.getElementById("cityInput").value = userCity;
                    }
                })
        } else {
            window.alert('you must sign in')
            window.location.replace("./profile.html");
        }
    });
}


//---------------------------------
// if a user is logged in display their name
//
//
//precondition: user is logged in
//postcondition: user's name is displayed
//---------------------------------
function insertName() {
    firebase.auth().onAuthStateChanged(user => {
        // Check if a user is signed in:
        if (user) {
            document.querySelector('#login').innerHTML = 'Hello ' + user.displayName
        } else {
            console.log('no login')
        }
    });
}
insertName();


//---------------------------------
//enables the user to edit their profile
//
//
//precondition: user is logged in
//precondition: edit button is clicked
//return: boolean True
//---------------------------------
function editUserInfo() {
    document.getElementById('personalInfoFields').disabled = false;
}

//--------------------------------
//updates the user's profile information to database
//
//
//precondition: user is logged in
//postcondition: user's profile information is updated
//--------------------------------
function saveUserInfo() {
    console.log('save')
    userName = document.getElementById('nameInput').value;       
    userSchool = document.getElementById('schoolInput').value;   
    userCity = document.getElementById('cityInput').value;       

    currentUser.update({                               // Update
        name: userName,
        school: userSchool,
        city: userCity,
    })
        .then(() => {
            window.alert("Your profile has been updated");
            window.location.replace("./index.html");
        })

    document.getElementById('personalInfoFields').disabled = true;
}

//---------------------------------
//logs the user out
//
//
//precondition: user is logged in
//postcondition: user is logged out
//---------------------------------
function logout() {
    firebase.auth().signOut().then(() => {
    }).catch((error) => {
        window.alert('no one is logged in!')
    });
    localStorage.clear()
}

//---------------------------------
//guard to ensure current page is profile_page.html
//
//param: None
//return: None
//---------------------------------
if ($('body').is('.profilePg')) {
    populateInfo()
}


