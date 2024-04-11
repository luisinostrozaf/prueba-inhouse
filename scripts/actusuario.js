const formElement = document.getElementById("actusuario");

formElement.addEventListener("submit", async (event) => {
    event.preventDefault();
    let id = document.getElementById("id").value;
    let name = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let usuario = {id:id, name:name, email:email, password:password};
    let usuarioJson = JSON.stringify(usuario);
    fetch(`http://localhost:3000/users/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: usuarioJson,
    })
    document.getElementById("message").textContent = "El usuario ha sido actualizado exitosamente";
});