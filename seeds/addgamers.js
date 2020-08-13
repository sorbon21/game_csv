const fs = require('fs');
const model=require('../models');
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('gamers').del()
    .then(function () {
        let data = fs.readFileSync('seeds/gamers.csv')
            .toString()
            .split('\n') // split string to lines
            .map(e => e.trim()) // remove white spaces for each line
            .map(e => e.split(';').map(e => e.trim()));
        let  items=[];
        for (const item in data)
        {
                let  model1=new model(data[item]);
                if (model1.validate()){
                    items.push(model1.getObject());
                    console.log(items);
                }
        }
      return knex('gamers').insert(items);
    });
};
