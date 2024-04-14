document.addEventListener("DOMContentLoaded", function() {
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");
    var loginButton = document.querySelector(".btn");

    loginButton.addEventListener("click", function(event) {
        event.preventDefault();

        if (emailInput.value === "" || passwordInput.value === "") {
            alert("Please enter Email and Password");
        } else {
            var storedUser = JSON.parse(localStorage.getItem(emailInput.value));

            if (storedUser && storedUser.email === emailInput.value && storedUser.password === passwordInput.value) {
                alert("Login successful!");
                window.location.href = "/Web_Co_Hanh/fruitkha-1.0.0/index.html";
            } else {
                alert("Invalid email or password!");
            }
        }
    });
});
