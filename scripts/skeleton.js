function loadSkeleton() {

    console.log($('#navbarPlaceholder').load('./text/navbar.html'));
    console.log($('#footer_bar').load('./text/footer.html'));
    console.log($('.stars').load('./text/stars/one_five.html'));
}
loadSkeleton();  //invoke the function
