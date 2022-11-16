
function displayCards(collection) {
    let GymCardTemplate = document.getElementById("GymCardTemplate");
    let container = document.getElementById("gyms-go-here");

    db.collection(collection).get()
        .then(allGyms => {
            allGyms.forEach(doc => {
                var title = doc.data().name;
                var details = doc.data().description;
                var gymID = doc.data().code;
                var distance_away = doc.data().distance;
                var rate = doc.data().rating;
                var price_point = doc.data().price;
                let testgymCard = GymCardTemplate.content.cloneNode(true);

                testgymCard.querySelector('.card-title').innerHTML = title;
                testgymCard.querySelector('.card-text').innerHTML = details;
                testgymCard.querySelector('.card-image').src = `./images/${gymID}.jpg`; //Example: NV01.jpg
                testgymCard.querySelector('.stars').src = `./text/stars/${rate}.jpg`;
                testgymCard.querySelector('.distance').innerHTML = distance_away;
                testgymCard.querySelector('.price').innerHTML = price_point;
                testgymCard.querySelector('#details_btn').onclick = setGymData(gymID);
                container.appendChild(testgymCard);
            })

        })
}

displayCards("gyms");


function setGymData(id) {
    localStorage.setItem('gymID', id);
}