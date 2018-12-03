// *----------* Modules *----------*
const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');

// *----------* Pool *----------*
const config = {
    host: 'localhost', 
    port: 5432, 
    database: 'gallery', 
    max: 10,
    idleTimeoutMillis: 30000
}

const pg = require('pg');
const Pool = pg.Pool;
const pool = new Pool(config);

pool.on('connect', () => {
    console.log('Postgesql connected');
  });
  
pool.on('error', (err) => {
    console.log('Unexpected error on idle client', err);
});

// *----------* Routes *----------*
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    const queryString = 'UPDATE items SET likes=likes+1	Where id=$1;'

    pool.query(queryString,[galleryId])
    .then((results)=>{
        res.sendStatus(204);
    })
    .catch((err)=>{
        console.log(`Error from DB in put: ${err}`);
        res.sendStatus(500);
    })
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    // Need to ORDER by to ensure consistency in DB
    const queryString = 'SELECT * FROM items ORDER BY id DESC;';

    pool.query(queryString).then((results)=>{
        console.log(results.rows);
        res.send(results.rows)
    }).catch((err)=>{
        console.log(`Error from DB in GET: ${err}`);
        res.sendStatus(500);
    });
}); // END GET Route

router.post('/',(req,res)=>{
    console.log(`Posting ${req.body.description}`);
    const item = req.body;
    const queryString = `INSERT INTO items(imgPath,description,likes) VALUES ($1,$2,0);`;
    pool.query(queryString,[item.imgPath, item.description]).then((results)=>{
        res.sendStatus(204);
    }).catch((err)=>{
        console.log(`Error from DB in post: ${err}`);
        res.sendStatus(500);
    })
})

module.exports = router;