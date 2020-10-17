function checkForm(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username === "" || password === "") {
        alert("Por favor completa ambos campos para continuar");
        return;
    }
    if (username.includes("@") == false){
        alert("Por favor incluye un @ en tu usuario");
        return;
    }
    document.form.submit();
};