import express from 'express';
import fs from 'fs';
import bodyparser from 'body-parser';


const app = express();
app.use(bodyparser.json());

const readData = () => {
    try {
        const data = fs.readFileSync('./db.json');
        return JSON.parse(data);
    } catch (error) { //gestor de erorr en caso de que no se encuentre el archivo json
        console.log('Error reading file', error);
    }
}

const writeData = (data) => {
    try {
        fs.writeFileSync('./db.json', JSON.stringify(data));
    } catch (error) {
        console.log('Error writing file', error);
    }
}

app.get('/', (req, res) => {
    res.send('Gestion de usuarios');
});

//Leer todos los usuarios registrados
app.get('/users', (req, res) => {
    const data = readData();
    res.json(data.users);
});

//Crear un nuevo usuario
app.post('/users', (req, res) => {
    const data = readData();
    const user = req.body;
    const newUser = {
        id: data.users.length + 1,
        ...user,
    };
    data.users.push(newUser);
    writeData(data);
    res.json(newUser);
});

//Actualizar un usario existente
app.put('/users/:id', (req, res) => {
    const data = readData();
    const User = req.body;
    const id = req.params.id;
    const Userindex = data.users.findIndex((user) => user.id == id);
    data.users[Userindex] = {
        ...data.users[Userindex],
        ...User,
    };
    writeData(data);
    res.json(data.users[Userindex]);
});

//Eliminar un usuario existente
app.delete('/users/:id', (req, res) => {
    const data = readData();
    const id = req.params.id;
    const Userindex = data.users.findIndex((user) => user.id == id);
    data.users.splice(Userindex, 1);
    writeData(data);
    res.json(data.users);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
    });
