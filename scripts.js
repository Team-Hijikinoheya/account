function validateLogin() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username === "user" && password === "password") {
        alert("ログイン成功");
        window.location.href = "main.html";
    } else {
        alert("ユーザー名またはパスワードが間違っています");
    }
}
