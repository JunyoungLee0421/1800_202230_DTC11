let gymID = localStorage.getItem("gymID");
console.log(gymID)

function populateReviews() {
    let gymReviewTemplate = document.getElementById("CardTemplate");
    let gymCardGroup = document.getElementById("CardGroup");

    db.collection("Reviews").where("ID", "==", gymID).get()
        .then(allReviews => {
            reviews = allReviews.docs
            reviews.forEach(doc => {
                console.log(doc.data())
                var title = doc.data().gym_name;
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