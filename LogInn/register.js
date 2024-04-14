document.addEventListener("DOMContentLoaded", function() {
    var signUpForm = document.getElementById("signup-form");
    var usernameInput = document.getElementById("username");
    var emailInput = document.getElementById("email");
    var passwordInput = document.getElementById("password");
    var addressInput = document.getElementById("address");
    var genderInput = document.getElementById("gender");
    var signUpButton = document.getElementById("signup-button");

    signUpButton.addEventListener("click", function(event) {
        // Ngăn chặn hành vi mặc định của nút submit
        event.preventDefault();

        // Kiểm tra xem tất cả các trường có đều đã được nhập đúng không
        if (usernameInput.value === "" || emailInput.value === "" || passwordInput.value === "" || addressInput.value === "" || genderInput.value === "") {
            alert("Vui lòng nhập đủ thông tin");
        } else {
            var user = {
                username: usernameInput.value,
                email: emailInput.value,
                password: passwordInput.value,
                address: addressInput.value,
                gender: genderInput.value
            };

            var jsonUser = JSON.stringify(user);
            localStorage.setItem(user.email, jsonUser);

            // Hiển thị thông báo và chuyển hướng sang trang login.html
            alert("Đăng ký thành công!");
            window.location.href = "index.html";
        }
    });
});
