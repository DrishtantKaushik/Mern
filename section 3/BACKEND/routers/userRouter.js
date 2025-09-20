const express = require('express');

const router = express.Router();
const Model = require('../models/userModel')

// add
router.post('/add', (req, res) => {
    console.log(req.body);

    new Model(req.body).save()
        .then((result) => {
            res.status(200).json(result);
        }).catch((err) => {
            console.log(err);
             if(err.code === 11000){
             res.status(400).json({message: 'Email alrady exist'});

        } else{
             res.status(500).json({message: 'Somethimg went wrong'});
    
        }
    
        });
});

// url parameter
router.get('/getbycity/:city', (req, res) => {
    console.log(req.params.city);
   
    Model.findOne({ city: req.params.city})
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
        
    }) } );
// url parameter
router.get('/getbyemail/:email', (req, res) => {
    console.log(req.params.city);
   
    Model.findOne({ email: req.params.email})
    .then((result) => {
        res.status(200).json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
        
    });

});
// getbyid
router.get('/getbyid/:id', (req, res) => {
    Model.findById(req.params.id)
    .then((result) => {
      res.send('getbyid response from  user');

     }).catch((err) =>{
        console.log(err);
        res.status(500).json(err);
        
     });
});

// delete
router.get('/delete/:id', (req, res) => {
    
     Model.findByIdAndDelete(req.params.id)
         .then((result) => {
      res.status(200).json(result);

     })
     .catch((err) => {
        console.log(err);
        
       });
        
     });

// getall
router.get('/getall', (req, res) => {
    Model.find()
        .then((result) => {

             res.status(200).json(result)

        }).catch((err) => {         
               res.status(200).json(result)
        })
});
// update
router.get('/update/:id', (req, res) => {
   
     Model.findByIdAndUpdate(req.params.id , req.body , { new: true })
          .then((result) => {
            res.status(200).json(result);

     }).catch((err) =>{
        console.log(err);
        res.status(500).json(err);
        
     });

});

module.exports = router;