let ID = localStorage.getItem("gymID");
console.log(ID, 'test')

function populate() {

    db.collection("gyms").where("code", "==", ID).get()
        .then(snap => {
            //var i = 1;  //if you want to use commented out section
            snap.forEach(doc => { //iterate thru each doc
                var title = doc.data().name;        // get value of the "name" key
                var details = doc.data().description;   // get value of the "description" key
                var gymPic = doc.data().code;    //get unique ID to each hike to be used for fetching right image
                var distance_away = doc.data().distance;    //get value of distance
                var rate = doc.data().rating;    //get rating for each gym
                var price_point = doc.data().price;    //get price for each gym

                //update title and text and image
                document.querySelector('#name').innerHTML = title;
                document.querySelector('#details').innerHTML = details;
                document.querySelector('#image').src = `./images/${gymPic}.jpg`; //Example: NV01.jpg
                document.querySelector('#rating').src = `./text/stars/${rate}.jpg`;
                document.querySelector('#distance').innerHTML = distance_away;
                document.querySelector('#price').innerHTML = price_point;
            })
        })

}

populate();