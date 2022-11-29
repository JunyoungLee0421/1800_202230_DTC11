// let ID = localStorage.getItem("gymID");

// 0qpNiqTou9oQZoAKF74C
// 1ktOlqlzdR0tfszlC5vC
// 4OIfSgYcffnVR7VYuWiz
// 57APYbKAfUAdbpDChlyI
// 78ib5zbelrS0uiWMkEaj
// 8uZX5BtpVLI8il8cWQAW
// EPntpGIREn87AdgrjdfC
// EWUrCs8OSJwKlOKmfJg6
// HewmNHoTTRGfkkurFNVS
// NeyhhXv5waMCDz710YGu
// Rsryr1EZ28aPeudR0nHb
// RwuxdWLRLBTRroSmjLxT
// SwDuag4ZqoEbvzPg4DGC
// UoR9bTOr7toNHB4ONnx0
// W3HdR2MRrBHyXoLZ1psZ
// YMdjOsiAzw2z2cAV8J1u
// bH3fBySHmBKYARTRmrWU
// bsPj0cx8SmlKSh7ds627
// edd7DgadbwicSli1UFzk
// iH8XWHIaUuvaLoARy6nB
// j5eJ1JUesWbOC3ZvjhoC
// kNiThE2rqgTBN7VjTABx
// mQD3rmXJNm1ibJke2S3a
// mfBDwMLCpqN7Ao7ABr2d
// s84ZKr8j0FYCmNytJ5BE
// xRcF35JljJIfjYdYjAz7

function populate_busyHour() {
    console.log("This is populate function")
    var docRef = db.collection("gym_data");
    
    docRef.forEach(doc => {
        console.log(doc.id)
    })

        // .forEach(element => {
        //     console.log(element)
            // element.add({
            //     busyHours : {
            //         "Monday" : {
            //             six_AM : 0,
            //             eight_AM : 0,
            //             ten_AM : 1,
            //             twelve_PM : 3,
            //             two_PM : 5,
            //             four_PM : 3,
            //             six_PM : 6,
            //             eight_PM : 3
            //         },
            //         "Tuesday" : {
            //             six_AM : 0,
            //             eight_AM : 0,
            //             ten_AM : 1,
            //             twelve_PM : 3,
            //             two_PM : 5,
            //             four_PM : 3,
            //             six_PM : 6,
            //             eight_PM : 3
            //         }
            //     },
            // })
        // });
}

function writeBusyHours() {
    //define a variable for the collection you want to create in Firestore to populate data
    var hoursRef = db.collection("busyHours");

    hoursRef.doc("Monday").set({
        code: "Gym1",
        six_AM : 0,
        eight_AM : 0,
        ten_AM : 1,
        twelve_PM : 3,
        two_PM : 5,
        four_PM : 3,
        six_PM : 6,
        eight_PM : 3
    });

    hoursRef.doc("Tuesday").set({
        code: "Gym1",
        six_AM : 0,
        eight_AM : 0,
        ten_AM : 1,
        twelve_PM : 3,
        two_PM : 5,
        four_PM : 3,
        six_PM : 6,
        eight_PM : 3
    });

    hoursRef.doc("Wednesday").set({
        code: "Gym1",
        six_AM : 0,
        eight_AM : 0,
        ten_AM : 1,
        twelve_PM : 3,
        two_PM : 5,
        four_PM : 3,
        six_PM : 6,
        eight_PM : 3
    });

    hoursRef.doc("Thursday").set({
        code: "Gym1",
        six_AM : 0,
        eight_AM : 0,
        ten_AM : 1,
        twelve_PM : 3,
        two_PM : 5,
        four_PM : 3,
        six_PM : 6,
        eight_PM : 3
    });

    hoursRef.doc("Friday").set({
        code: "Gym1",
        six_AM : 0,
        eight_AM : 0,
        ten_AM : 1,
        twelve_PM : 1,
        two_PM : 3,
        four_PM : 5,
        six_PM : 7,
        eight_PM : 1
    });

    hoursRef.doc("Saturday").set({
        code: "Gym1",
        six_AM : 1,
        eight_AM : 1,
        ten_AM : 1,
        twelve_PM : 3,
        two_PM : 3,
        four_PM : 6,
        six_PM : 6,
        eight_PM : 5
    });

    hoursRef.doc("Sunday").set({
        code: "Gym1",
        six_AM : 0,
        eight_AM : 1,
        ten_AM : 2,
        twelve_PM : 3,
        two_PM : 4,
        four_PM : 5,
        six_PM : 6,
        eight_PM : 5
    });
}

