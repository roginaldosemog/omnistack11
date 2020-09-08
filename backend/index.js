const express = require('express');

const app = express();
app.use(express.json());

app.post('/users', (request, response) => {
    const body = request.body;
    const query = request.query;
    const params = request.params;

    console.log(body);
    // console.log(query);
    // console.log(params);

    return response.json({
        evento: 'Omnistack 11.0',
        aluno: 'Igor Aragão'
    });
});

app.listen(3333);