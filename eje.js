const contraseña = document.getElementById("password")
  
formRegistro.addEventListener("submit", e=>{
    e.preventDefault()
    let entrar = false
    let regexCon =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{10,20}$/;
    
    

    if (!regexCon.test(password.value)) {
        alert("Error: La contraseña " + password + " es incorrecta.");
        entrar = true
    }

    
})



