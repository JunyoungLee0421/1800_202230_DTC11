//-------------------------------
//
//precondition: pahe is loaded
//postcondition: will load navbar and footer
//-------------------------------

function loadSkeleton() {

    console.log($('#navbarPlaceholder').load('./text/navbar.html'));
    console.log($('#footer_bar').load('./text/footer.html'));
}
loadSkeleton(); 
