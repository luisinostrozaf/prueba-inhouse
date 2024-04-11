const formElement = document.getElementById("crearusuario");

formElement.addEventListener("submit", async (event) => {
    event.preventDefault();
    let name = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let usuario = {name:name, email:email, password:password};
    let usuarioJson = JSON.stringify(usuario);
    fetch("http://localhost:3000/users", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: usuarioJson,
    })
    document.getElementById("message").textContent = "El usuario ha sido creado exitosamente";
});
    