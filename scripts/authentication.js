var ui = new firebaseui.auth.AuthUI(firebase.auth());

//---------------------------------------
// Add new user to the database
//
//precondition: no user is logged in
//postcondition: adds new user document to database
//----------------------------------------
var uiConfig = {
  callbacks: {
    signInSuccessWithAuthResult: function (authResult, redirectUrl) {
      var user = authResult.user;  //get the user object info
      if (authResult.additionalUserInfo.isNewUser) {
        // create a collection with name "users"
        db.collection("users")
          
          .doc(user.uid).set({ // Write to Database
            name: user.displayName,
            city: 'Burnaby',
            school: 'BCIT'
          }).then(function () {
            window.location.assign("index.html");
          })
          .catch(function (error) {
            console.log(error);
          })

      } else {
        changeButton(user)
        return true;
      }
      return false;
    },
    uiShown: function () {
      // The widget is rendered.
      // Hide the loader.
      document.getElementById('loader').style.display = 'none';
    }
  },
  // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
  signInFlow: 'popup',
  signInSuccessUrl: 'profile_page.html',
  signInOptions: [
    firebase.auth.EmailAuthProvider.PROVIDER_ID,
  ],
  // Terms of service url.
  tosUrl: '<your-tos-url>',
  // Privacy policy url.
  privacyPolicyUrl: '<your-privacy-policy-url>'
};

//---------------------------------------
// change the login button in the profile page
//----------------------------------------
function changeButton(user) {
  localStorage.setItem ('user', user);
}

ui.start('#firebaseui-auth-container', uiConfig);
