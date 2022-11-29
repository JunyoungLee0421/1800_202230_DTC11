let isUser = localStorage.getItem('user');

//---------------------------------------
// When user is logged in, display Logout button, otherwise, display Login button
//----------------------------------------
function changeButton() {
    if (isUser) {
        document.getElementById("loginMsg").innerHTML = "Logout";
        document.getElementById("loginBtn").href = "./logout.html";
    } else {
        document.getElementById("loginMsg").innerHTML = "Login",
        document.getElementById("loginBtn").href = "./login.html"
    }
}

changeButton();