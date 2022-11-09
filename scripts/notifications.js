function displayCards(collection) {
    let cardTemplate = document.getElementById("NotificationCardTemplate");

    db.collection(collection).get()
        .then(snap => {
            //var i = 1;  //if you want to use commented out section
            snap.forEach(doc => { //iterate thru each doc
                var location = doc.data().gym;      
                var details = doc.data().value;  
                let newcard = cardTemplate.content.cloneNode(true);
                

                //update title and text and image
                newcard.querySelector('.card-title').innerHTML = location;
                newcard.querySelector('.card-text').innerHTML = details;
                //give unique ids to all elements for future use
                // newcard.querySelector('.card-title').setAttribute("id", "ctitle" + i);
                // newcard.querySelector('.card-text').setAttribute("id", "ctext" + i);
                // newcard.querySelector('.card-image').setAttribute("id", "cimage" + i);

                //attach to gallery
                document.getElementById(collection + "-go-here").appendChild(newcard);
                //i++;   //if you want to use commented out section
            })
        })
}

displayCards("notifications");