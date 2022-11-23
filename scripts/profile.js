var currentUser


function populateInfo() {
    firebase.auth().onAuthStateChanged(user => {
        // Check if user is signed in:
        if (user) {

            //go to the correct user document by referencing to the user uid
            currentUser = db.collection("users").doc(user.uid)
            //get the document for current user.
            currentUser.get()
                .then(userDoc => {
                    //get the data fields of the user
                    var userName = userDoc.data().name;
                    var userSchool = userDoc.data().school;
                    var userCity = userDoc.data().country;
                    var userEmail = userDoc.data().email;

                    //if the data fields are not empty, then write them in to the form.
                    if (userName != null) {
                        document.getElementById("nameInput").value = userName;
                    }
                    if (userSchool != null) {
                        document.getElementById("schoolInput").value = userSchool;
                    }
                    if (userEmail != null) {
                        document.getElementById("EmailInput").value = userEmail;
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

function insertName() {
    firebase.auth().onAuthStateChanged(user => {
        // Check if a user is signed in:
        if (user) {
            // Do something for the currently logged-in user here:
            console.log(user.uid);
            console.log(user.displayName);
            document.querySelector('#login').innerHTML = 'Hello' + user.displayName

            //method #1:  insert with html only
            //document.getElementById("name-goes-here").innerText = user_Name;    //using javascript
            //method #2:  insert using jquery
            // $("#name-goes-here").text(user_Name); //using jquery

        } else {
            console.log('no login')
        }
    });
}
insertName();

function editUserInfo() {
    console.log('works')
    document.getElementById('personalInfoFields').disabled = false;
}

function saveUserInfo() {
    console.log('save')
    userName = document.getElementById('nameInput').value;       //get the value of the field with id="nameInput"
    userSchool = document.getElementById('schoolInput').value;     //get the value of the field with id="schoolInput"
    userCity = document.getElementById('cityInput').value;       //get the value of the field with id="cityInput"
    userEmail = document.getElementById('EmailInput').value;       //get the value of the field with id="cityInput"

    currentUser.update({
        name: userName,
        school: userSchool,
        country: userCity,
        email: userEmail,
    })
        .then(() => {
            window.alert("Your profile has been updated");
        })

    document.getElementById('personalInfoFields').disabled = true;
}


function logout() {
    firebase.auth().signOut().then(() => {
    }).catch((error) => {
        window.alert('no one is logged in!')
    });
    localStorage.clear()
}

if ($('body').is('.profilePg')) {
    populateInfo()
}


