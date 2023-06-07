const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '123123',
  database: 'bdaitens',
});

//delete
app.delete("/item/:id",(req,res)=>{
    const {id} =req.params;
    console.log("Informação:", id)
    let SQL = "DELETE FROM listaitens WHERE (`id` = ?)";

    db.query(SQL, id, (err, result) => {
        if (err) {
          console.log(err);
          res.sendStatus(500);
        } else {
          res.send(result);
        }
      });
    });

app.post('/item', (req, res) => {
  const { item } = req.body;
  let SQL = 'INSERT INTO listaitens (itens) VALUES (?)';

  db.query(SQL, [item], (err, result) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});

app.get('/itens', (req, res) => {
  let SQL = 'SELECT * FROM listaitens';

  db.query(SQL, (err, result) => {
    if (err) {
      console.log(err);
      res.sendStatus(500);
    } else {
      res.send(result);
    }
  });
});



app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001');
});



