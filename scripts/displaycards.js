var currentUser
var filter_by = "price"


function on_option_change() {

    $("#content").empty()

    var user_selection = document.getElementById("filter_options");
    filter_by = user_selection.options[user_selection.selectedIndex].value;

    displayCards('gym_data', filter_by)
}

//---------------------------------------------
// Reads from database and populates index.html with relevant database information
//
//param collection: name of collection in database
//param filter: filter to sort by
//return: the information of each doc in the collection
//---------------------------------------------
function displayCards(collection, filter) {

    console.log(filter)
    let GymCardTemplate = document.getElementById("GymCardTemplate");
    let container = document.getElementById("gyms-go-here");

    db.collection(collection)
        .orderBy(filter, "desc")                                           // read from database
        .get()
        .then(allGyms => {
            allGyms.forEach(doc => {
                var title = doc.data().gym_name;
                var details = doc.data().description;
                var image = doc.data().gym_image;
                var distance_away = doc.data().distance;
                var rate = doc.data().rating;
                var price_point = doc.data().price;
                var id = doc.data().gymID
                $('#content').append(
                `<div class="card" style="width: 100%; border-radius: 20px; margin: 10px 0px">
                            <img class="card-image card-img-top" src="${image}" alt="..." style="margin: 5px 0px">
                        <div class="card-body">
                            <h5 class="card-title">${title}</h5>
                          
                            <img class="stars" src="./text/stars/${rate}.jpg" alt="" style="width: 30%"></p>
                            <p class="distance" style="font-size:small; color: gray; margin: 0px 0px">
                                ${distance_away} km
                            </p>
                            <p class="price" style="font-size:small; color: gray;">
                                $ ${price_point} / month
                            </p>
                            <button onclick="setGymData(id)" id='${id}'>details</button>


                        </div>
                    </div>`
             ) })

        })
      
}
displayCards("gym_data", filter_by);

//---------------------------------------------
// function to empty content div
//
// precondition: user selects new filter
// postcondition: content div is emptied
//---------------------------------------------
function empty() { 
    $('#content').empty()
}

//---------------------------------------------
// Grabs ID of specific gym card and set it to local storage
//
//param id: id of gym card
//postcondition: id of gym card is set to local storage
//return: none
//---------------------------------------------
function setGymData(id) {
    // console.log(id)
    localStorage.setItem('gymID', id);
    window.location.href = './content.html'
}


//---------------------------------------------
// Displays user name to screen if user is logged in
//
//param: none
//precondition: user is logged in
//postcondition: user name is displayed to screen
//return: none
//---------------------------------------------
function insertName() {
    firebase.auth().onAuthStateChanged(user => {
        // Check if a user is signed in:
        if (user) {
            // Do something for the currently logged-in user here: 
            console.log(user.uid);
            console.log(user.displayName);
            document.querySelector('#username').innerHTML = 'Hello ' + user.displayName

            //method #1:  insert with html only
            //document.getElementById("name-goes-here").innerText = user_Name;    //using javascript
            //method #2:  insert using jquery
            // $("#name-goes-here").text(user_Name); //using jquery

        } else {
            document.querySelector('#username').innerHTML = null
        }
    });
}
insertName();