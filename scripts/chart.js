let day = "Monday"

function on_option_change() {
    var user_selection = document.getElementById("filter_options");
    selected_day = user_selection.options[user_selection.selectedIndex].value;
    displayHours(selected_day)
}

function displayHours(selected_day) {
    console.log(selected_day)
    db.collection("busyHours").doc(selected_day)
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
            console.log(third);

            var ctx = document.getElementById('myChart').getContext('2d');
            var chart = new Chart(ctx, {
                // type : 'bar' = 막대차트를 의미합니다.
                type: 'bar', 
                data: {
                    labels: ['6-8AM','8-10AM','10AM-12PM', '12PM-2PM', '2PM-4PM', '4PM-6PM', '6PM-8PM'],
                    datasets: [{
                        label: 'Gym1',
                        backgroundColor: 'rgb(255, 99, 132)',
                        borderColor: 'rgb(255, 99, 132)',
                        data: [first, second, third, fourth, fifth, sixth]
                    }]
                },
            });
        })
}

displayHours(day);