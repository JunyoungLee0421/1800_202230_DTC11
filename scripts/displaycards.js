function writeGyms() {
    //define a variable for the collection you want to create in Firestore to populate data
    var GymsRef = db.collection("gyms");

    GymsRef.add({
        code: "Gym1",
        name: "Good Life Fitness",    //replace with your own city?
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, eveniet?",
        distance: "0.4 km",
        rating: "three_five",
        price: "$16/mo",
        last_updated: firebase.firestore.FieldValue.serverTimestamp()
    });
    GymsRef.add({
        code: "Gym2",
        name: "Planet Fitness",    //replace with your own city?
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, eveniet?",
        distance: "0.2 km",
        rating: "one_five",
        price: "20$/mo",
        last_updated: firebase.firestore.FieldValue.serverTimestamp()
    });
    GymsRef.add({
        code: "Gym3",
        name: "Golds Gym",    //replace with your own city?
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, eveniet?",
        distance: "0.7 km",
        rating: "four_five",
        rating: "$30/mo",
        last_updated: firebase.firestore.FieldValue.serverTimestamp()
    });
}

function displayCards(collection) {
    let cardTemplate = document.getElementById("GymCardTemplate");

    db.collection(collection).get()
        .then(snap => {
            //var i = 1;  //if you want to use commented out section
            snap.forEach(doc => { //iterate thru each doc
                var title = doc.data().name;        // get value of the "name" key
                var details = doc.data().description;   // get value of the "description" key
                var gymID = doc.data().code;    //get unique ID to each hike to be used for fetching right image
                var distance_away = doc.data().distance;    //get value of distance
                var rate = doc.data().rating;    //get rating for each gym
                var price_point = doc.data().price;    //get price for each gym
                let newcard = cardTemplate.content.cloneNode(true);

                console.log(gymID)

                //update title and text and image
                newcard.querySelector('.card-title').innerHTML = title;
                newcard.querySelector('.card-text').innerHTML = details;
                newcard.querySelector('.card-image').src = `./images/${gymID}.jpg`; //Example: NV01.jpg
                newcard.querySelector('.stars').src = `./text/stars/${rate}.jpg`;
                newcard.querySelector('.distance').innerHTML = distance_away;
                newcard.querySelector('.price').innerHTML = price_point;
                newcard.querySelector('#details_btn').onclick = () => setGymData(gymID);
      

                //attach to gallery
                document.getElementById(collection + "-go-here").appendChild(newcard);
                //i++;   //if you want to use commented out section
            })
        })
}

displayCards("gyms");

function setGymData (id) {
    localStorage.setItem('gymID', id);
}