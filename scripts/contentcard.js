let ID = localStorage.getItem("gymID");

function populate() {
    console.log(ID)
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

function writeReview() {
    let Title = document.getElementById("gym_name").innerHTML.valueOf();
    let Description = document.getElementById("description").value;
    let reccomend = document.getElementById("reccomend").value;
    let expereince = document.getElementById("experience").value;

    db.collection("Reviews").add({
        ID: ID,
        title: Title,
        description: Description,
        recommend: reccomend,
        experience: expereince,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    }).then( function () {
        window.location.href = "content.html";
    })
    // } else {
    //     alert('you must enter a description!')
}
