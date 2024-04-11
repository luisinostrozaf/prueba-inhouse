document.getElementById("deleteButton").addEventListener("click", function(event) {
    event.preventDefault();
    let id = document.getElementById("id").value;
    fetch(`http://localhost:3000/users/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        } else {
            document.getElementById("message").textContent = "El usuario ha sido eliminado exitosamente";
        }
    })
    .catch(error => console.log('Error:', error));
});