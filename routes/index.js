const express = require('express');
const router = express.Router();
const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]
const db = require('knex')(config)

/* GET home page. */
router.get('/', function(req, res, next)
{
  let items=db.from('gamers').where({status:'On'}).orderBy('created_at','asc');
  items.then(function (rows) {
    res.render('index', { rows: rows });

  });
});

module.exports = router;
