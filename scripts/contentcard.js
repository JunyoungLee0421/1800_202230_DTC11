let ID = localStorage.getItem("gymID");

//---------------------------------------
// Dynamically populate content.html with relevant database information
//
//precondition: content.html is loaded
//postcondition: will populate content.html with relevant database information
//----------------------------------------
function populate() {
    console.log(ID)
    db.collection("gym_data").where("gymID", "==", ID).get()               // Read from database
        .then(snap => {
            snap.forEach(doc => {                                           //iterate thru each doc
                var title = doc.data().gym_name;        
                var details = doc.data().description;   
                var gymPic = doc.data().gym_image;   
                var distance_away = doc.data().distance;  
                var rate = doc.data().rating;   
                var price_point = doc.data().price;    
                var operating_hours = doc.data().operating_hours;
                var address = doc.data().address;
                var city = doc.data().city;
                var hours = doc.data().operating_hours;

                //update title and text and image
                document.querySelector('#gym_name').innerHTML = title;
                document.querySelector('#details').innerHTML = details;
                document.querySelector('#image').src = gymPic; //Example: NV01.jpg
                document.querySelector('#rating').src = `./text/stars/${rate}.jpg`;
                document.querySelector('#distance').innerHTML = `${distance_away} km`;
                document.querySelector('#price').innerHTML = `$${price_point} /month`;
                document.querySelector('#address').innerHTML = address;
                document.querySelector('#city').innerHTML = city;
                document.querySelector('#hours').innerHTML = 'Open from ' + hours;
                document.querySelector('#name_2').innerHTML = title;


            })
        })

}
populate();

// ---------------------------------------
// Take user input and add to database
//
//precondition: user review button is clicked
//postcondition: user review is added to database
// ----------------------------------------
function writeReview() {
    let Title = document.getElementById("gym_name").innerHTML.valueOf();
    let Description = document.getElementById("description").value;
    let reccomend = document.getElementById("reccomend").value;
    let expereince = document.getElementById("experience").value;

    db.collection("Reviews").add({                                        // Write to database (create)
        ID: ID,
        title: Title,
        description: Description,
        recommend: reccomend,
        experience: expereince,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    }).then( function () {
        window.location.href = "content.html";
    })
}

//--------------------------------------------------------------
// populate content.html with reviews from review database
//
//precondition: content.html is loaded
//postcondition: will populate content.html with reviews from review database
//--------------------------------------------------------------

function populateReviews() {
    let gymReviewTemplate = document.getElementById("CardTemplate");
    let gymCardGroup = document.getElementById("CardGroup");

    db.collection("Reviews").where("ID", "==", ID).get()
        .then(allReviews => {
            reviews = allReviews.docs
            reviews.forEach(doc => {
                console.log(doc.data())
                var title = doc.data().title;
                var recommend = doc.data().recommend;
                var experience = doc.data().experience;
                var description = doc.data().description;

                let reviewCard = gymReviewTemplate.content.cloneNode(true);
                reviewCard.querySelector('.title').innerHTML = title;
                reviewCard.querySelector('.recommend').innerHTML = `recommend: ${recommend}`;
                reviewCard.querySelector('.experience').innerHTML = `experience: ${experience}`;
                reviewCard.querySelector('.description').innerHTML = `Description: ${description}`;
                gymCardGroup.appendChild(reviewCard);
            });
        })
}

populateReviews();
