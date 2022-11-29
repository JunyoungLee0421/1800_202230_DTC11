//------------------------------------
// Dynamincally populate notifications.html with relevant database information
//
//param collection: name of collection to display
//return: the data from each document in the collection
//------------------------------------
function displayCards(collection) {
    let cardTemplate = document.getElementById("NotificationCardTemplate");

    db.collection(collection).get()                                        // read from database
        .then(snap => {
            //var i = 1;  //if you want to use commented out section
            snap.forEach(doc => {                                          //iterate thru each doc
                var location = doc.data().gym;      
                var details = doc.data().value;  
                let newcard = cardTemplate.content.cloneNode(true);
            
                //update title and text and image
                newcard.querySelector('.card-title').innerHTML = location;
                newcard.querySelector('.card-text').innerHTML = details;

                //attach to gallery
                document.getElementById(collection + "-go-here").appendChild(newcard);
            })
        })
}
displayCards("notifications");