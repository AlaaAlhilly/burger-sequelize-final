let express = require('express');

let db = require('./../models');

let router = express.Router();

router.get('/', (req,res) =>{
    
        db.burgers.findAll({}).then((data) =>{
            let burger_obj = {
                burgers: data
            };
            console.log('iam here');
            res.render('index',burger_obj);
        })
   
});
router.post('/api/burger/add', (req,res) =>{ 
    db.burgers.create({
        burger_name: req.body.burger_name,
        devoured: false,
        eaten_by: ''
    }).then((result) =>{
        res.json({id:result.insertId});
    }).catch(() => {
        alert('burger is eaten');
        process.exit(0);
    });
});
router.put('/api/burger/update/:id', (req,res) =>{
    let id = req.params.id;
    let eater = req.body.eater;
    db.burgers.update(
        {
            devoured: true,
            eaten_by: eater
        },
        {
            where: {id:id}
        }

    ).then((result) => {
        res.status(200).end();
    });
});
module.exports = router;