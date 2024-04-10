fetch("http://localhost:3000/users")
.then(res => { return res.json()})
.then(data => {
    data.forEach(user => {
        const markup = `<li>${user.name}</li>`;
        document.querySelector('ul').insertAdjacentHTML('beforeend', markup);
    })
    })
    .catch(error => console.log(error));