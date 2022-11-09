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