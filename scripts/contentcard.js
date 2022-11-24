let ID = localStorage.getItem("gymID");


function populate() {

    db.collection("gym_data").where("gymID", "==", ID).get()
        .then(snap => {
            //var i = 1;  //if you want to use commented out section
            snap.forEach(doc => { //iterate thru each doc
                var title = doc.data().gym_name;        // get value of the "name" key
                var details = doc.data().description;   // get value of the "description" key
                var gymPic = doc.data().gym_image;    //get unique ID to each hike to be used for fetching right image
                var distance_away = doc.data().distance;    //get value of distance
                var rate = doc.data().rating;    //get rating for each gym
                var price_point = doc.data().price;    //get price for each gym
                var operating_hours = doc.data().operating_hours;
                var address = doc.data().address;
                var city = doc.data().city;
                var hours = doc.data().operating_hours;

                //update title and text and image
                document.querySelector('#gym_name').innerHTML = title;
                document.querySelector('#details').innerHTML = details;
                document.querySelector('#image').src = gymPic; //Example: NV01.jpg
                document.querySelector('#rating').src = `./text/stars/${rate}.jpg`;
                document.querySelector('#distance').innerHTML = distance_away;
                document.querySelector('#price').innerHTML = price_point;
                document.querySelector('#address').innerHTML = address;
                document.querySelector('#city').innerHTML = city;
                document.querySelector('#hours').innerHTML = 'Open from ' + hours;
                document.querySelector('#name_2').innerHTML = title;


            })
        })

}
populate();

function writeReview() {
    
    let Title = document.getElementById("gym_name").innerHTML.valueOf();
    let Description = document.getElementById("description").value;
    let reccomend = document.getElementById("reccomend").value;
    let expereince = document.getElementById("experience").value;
    var gymID = ID
   
    // firebase.auth().onAuthStateChanged(user => {
    //     if (user) {
    //         var currentUser = db.collection("users").doc(user.uid)
    //         var userID = user.uid;
    //         //get the document for current user.
    //         currentUser.get()
    //             .then(userDoc => {
    //                 var userEmail = userDoc.data().email;

    if (Description != "") {
        var reviews_data = db.collection("Reviews");

        reviews_data.add({
            ID: gymID,
            title: Title,
            description: Description,
            recommend: reccomend,
            experience: expereince,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        // }).then(() => {

        //             })
        //         })

        // } else {
        //     // No user is signed in.
        // }

    })}else{
        alert.window('you must enter a description!')
}
    window.location.href = "index.html";
}
