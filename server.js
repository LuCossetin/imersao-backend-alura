import express from 'express';

const app = express();      // app = servidor
app.listen(3000, () => {     // servidor do express eu quero que você fique ouvindo na porta 3000 (localhost:3000)
    console.log ('Servidor escutando...');
});

app.get('/api', (req, res) => {       //
    res.status(200).send('Boas Vindas à imersão!');  //http://localhost:3000/api no navegador
});
