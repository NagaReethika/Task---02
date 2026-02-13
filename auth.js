document.addEventListener("DOMContentLoaded", function () {

    /* ================= REGISTER ================= */

    const registerForm = document.getElementById("registerForm");

    if (registerForm) {
        registerForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const email = document.getElementById("regEmail").value.trim();
            const password = document.getElementById("regPassword").value.trim();

            if (email === "" || password === "") {
                alert("Please fill all fields");
                return;
            }

            localStorage.setItem("userEmail", email);
            localStorage.setItem("userPassword", password);

            alert("Registration successful!");
            window.location.href = "login.html";
        });
    }

    /* ================= LOGIN ================= */

    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        // Auto redirect if already logged in
        if (localStorage.getItem("isLoggedIn") === "true") {
            window.location.href = "dashboard.html";
        }

        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value.trim();

            const savedEmail = localStorage.getItem("userEmail");
            const savedPassword = localStorage.getItem("userPassword");

            if (email === savedEmail && password === savedPassword) {
                localStorage.setItem("isLoggedIn", "true");
                window.location.href = "dashboard.html";
            } else {
                alert("Invalid email or password");
            }
        });
    }

});