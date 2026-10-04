document.getElementById("signupForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    localStorage.setItem("studentName", name);
    localStorage.setItem("studentEmail", email);
    localStorage.setItem("studentPassword", password);

    alert("Account created successfully!");

    window.location.href = "login.html";
});
