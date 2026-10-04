// ===============================
// SMART STUDENT HELPER
// Signup + Login + Dashboard
// ===============================


// ---------- SIGN UP ----------
const signupForm = document.getElementById("signupForm");

if (signupForm) {

    signupForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value;
        const confirmPassword =
            document.getElementById("confirmPassword").value;

        // Check passwords
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        // Save student details
        localStorage.setItem("studentName", name);
        localStorage.setItem("studentEmail", email);
        localStorage.setItem("studentPassword", password);

        alert("Account created successfully!");

        // Go to Login page
        window.location.href = "login.html";
    });
}


// ---------- LOGIN ----------
const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const email = document.getElementById("loginEmail").value.trim();
        const password = document.getElementById("loginPassword").value;

        // Get saved details
        const savedEmail = localStorage.getItem("studentEmail");
        const savedPassword = localStorage.getItem("studentPassword");

        // Check login details
        if (email === savedEmail && password === savedPassword) {

            alert("Login successful!");

            // Go to Dashboard
            window.location.href = "dashboard.html";

        } else {

            alert("Invalid email or password!");

        }
    });
}


// ---------- DASHBOARD ----------
const welcomeMessage = document.getElementById("welcomeMessage");

if (welcomeMessage) {

    const studentName = localStorage.getItem("studentName");

    if (studentName) {
        welcomeMessage.innerText =
            "Welcome, " + studentName + "! 👋";
    }
}


// ---------- LOGOUT ----------
function logout() {

    // Go back to Home page
    window.location.href = "index.html";
}
