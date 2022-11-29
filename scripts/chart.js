let day = "Monday"

//---------------------------------------
// Gets selected option from html and display busy hour based on user's selection
//
// precondition: default day is set as monday
// post-condition: passes selected day to displayHours(day) function
//----------------------------------------

function on_option_change() {
    var user_selection = document.getElementById("filter_options");
    selected_day = user_selection.options[user_selection.selectedIndex].value;
    displayHours(selected_day)
}

//---------------------------------------
// Get busy hour data from Database and display in content.html as a chart
//----------------------------------------
function displayHours(selected_day) {
    console.log(selected_day)
    db.collection("busyHours").doc(selected_day) // Read from Database (Read)
        .onSnapshot(mondayDoc => {
            console.log(mondayDoc.data());
            console.log(mondayDoc.data().code);
            console.log(mondayDoc.data().six_AM);
            
            let first = mondayDoc.data().six_AM;
            let second = mondayDoc.data().eight_AM;
            let third = mondayDoc.data().ten_AM;
            let fourth = mondayDoc.data().twelve_PM;
            let fifth = mondayDoc.data().two_PM; 
            let sixth = mondayDoc.data().four_PM;
            let seventh = mondayDoc.data().six_PM;
            let eighth = mondayDoc.data().eight_PM;
            console.log(third);

            var ctx = document.getElementById('myChart').getContext('2d');
            var chart = new Chart(ctx, {
                type: 'bar', 
                data: {
                    labels: ['6AM', '8AM','10AM', '12PM', '2PM', '4PM', '6PM', '8PM'],
                    datasets: [{
                        label: 'Busy Hours',
                        backgroundColor: 'rgb(255, 99, 132)',
                        borderColor: 'rgb(255, 99, 132)',
                        data: [first, second, third, fourth, fifth, sixth, seventh, eighth]
                    }]
                },
            });
        })
}

displayHours(day);