// Login functionality
const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        let email = document.getElementById("loginEmail").value;
        let password = document.getElementById("loginPassword").value;

        let savedEmail = localStorage.getItem("studentEmail");
        let savedPassword = localStorage.getItem("studentPassword");

        if (email === savedEmail && password === savedPassword) {
            alert("Login successful!");
            window.location.href = "dashboard.html";
        } else {
            alert("Invalid email or password!");
        }
    });
}
