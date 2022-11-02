function loadNotificationCards() {
    var cards = $('.notifications')

    console.log($(cards).load('./text/notification_card.html'));

}
loadNotificationCards();
// will edit later to determine how many cards to display