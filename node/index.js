const express = require('express')
const app = express()
const port = 3000
console.log('STARTED');
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

try {
    const create = `CREATE TABLE IF NOT EXISTS people (
        name VARCHAR(255) NOT NULL
    );`;

    connection.query(create)


    const sql = `INSERT INTO people(name) values('Felipe');`
    connection.query(sql)
}
catch (err) {
    console.log(`Error: ${err}`);
}

app.get('/', (req, res) => {
    connection.query('SELECT * FROM people', (err, results) => {
        if (err) {
            console.log(err);
        }
        else {
            res.send(`<h1>Full Cycle Rocks!</h1><br> <ul>${results.map(result => `<li>${result.name}</li>`).join('')}</ul>`);
        }
    });
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})