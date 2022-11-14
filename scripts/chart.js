let first;
let second;
let third;
let fourth;
let fifth;
let sixth;

function displayHours() {
    db.collection("busyHours").doc("Monday")
        .onSnapshot(mondayDoc => {
            console.log(mondayDoc.data());
            console.log(mondayDoc.data().code);
            console.log(mondayDoc.data().six_AM);
            first = mondayDoc.data().six_AM;
            second = mondayDoc.data().eight_AM;
            third = mondayDoc.data().ten_AM;
            fourth = mondayDoc.data().twelve_PM;
            fifth = mondayDoc.data().two_PM; 
            sixth = mondayDoc.data().four_PM;
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

displayHours();