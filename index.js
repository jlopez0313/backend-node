const express = require('express');

const app = express();
app.get('/', (req, res) => {
    return res.status(200).json({
        ok: true,
        mesage: 'Hola Mundo'
    })
})


app.listen(4000, () => {
    console.log('Corriendo en puerto 4000')
})