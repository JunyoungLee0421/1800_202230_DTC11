var currentUser
var filter_by = "price"

function on_option_change() {

    $("#content").empty()

    var user_selection = document.getElementById("filter_options");
    filter_by = user_selection.options[user_selection.selectedIndex].value;

    displayCards('gym_data', filter_by)
}

function displayCards(collection, filter) {

    console.log(filter)
    let GymCardTemplate = document.getElementById("GymCardTemplate");
    let container = document.getElementById("gyms-go-here");

    db.collection(collection)
        .orderBy(filter, "desc")
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
                // let testgymCard = GymCardTemplate.content.cloneNode(true);

                // testgymCard.querySelector('.card-title').innerHTML = title;
                // testgymCard.querySelector('.card-text').innerHTML = details;
                // testgymCard.querySelector('.card-image').src = image; 
                // testgymCard.querySelector('.stars').src = `./text/stars/${rate}.jpg`;
                // testgymCard.querySelector('.distance').innerHTML = `${distance_away} km`;
                // testgymCard.querySelector('.price').innerHTML = `$${price_point} / month`;
                // testgymCard.querySelector('#details_btn').onclick = () => setGymData(id);
                // container.appendChild(testgymCard);
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

function empty() { // for clearing divs
    $('#content').empty()
}


function setGymData(id) {
    // console.log(id)
    localStorage.setItem('gymID', id);
    window.location.href = './content.html'
}

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

// async function getCSVdata() {
//     // console.log("hello")
//     const response = await fetch('/data.csv'); //send get request must be in same folder as html it is being called from
//     const data = await response.text();      //get file response
//     const list = data.split('\n').slice(1);  //get line
//     list.forEach(row => {
//         // [gymID, gym name, description, address, city, image, operating hours, rating]
//         const columns = row.split(',');
//         const gymID = columns[0];
//         const gym_name = columns[1];
//         const description = columns[2];
//         const address = columns[3];
//         const city = columns[4];
//         const gym_image = columns[5];
//         const operating_hours = columns[6];
//         const rating = columns[7];
//         const distance = Number(columns[8]);
//         const price = Number(columns[9]);


//         db.collection("gym_data").add({   //write to firestore
//             gymID: gymID,
//             gym_name: gym_name,
//             description: description,
//             address: address,
//             city: city,
//             gym_image: gym_image,
//             operating_hours: operating_hours,
//             rating: rating,
//             distance: distance,
//             price: price,
    
//         })
//     })}