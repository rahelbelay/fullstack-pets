const http = require('http');
const express = require('express');


const app = express();
const PORT = 3000;

const server = http.createServer(app);

const pets = require('./models/pets')

// app.get('/pets', async (req, res)=> {
//     const thePets = await pets.all();
//     // res.send('you want /pets');
//     res.json(thePets);
// });


// app.get('/pets/:id', async (req, res)=> {
//     console.log(req.params);
//     const petsId = await pets.one(req.params.id);
//     res.json(petsId)
// });




app.post

app.post('/pets/create', async (req,res)=> {
    const petsForm = await pets.create(req.params.name.species.birthdate.owner_id);
    res.json(petsCreate);

});



server.listen(PORT, ()=>{
    console.log(`listining on${PORT}`);

});



