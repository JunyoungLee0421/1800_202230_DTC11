function loadCards() {
    var cards = $('.content_holder')

    console.log($(cards).load('./text/gym_card.html'));

}
loadCards();
// will edit later to determine how many cards to display