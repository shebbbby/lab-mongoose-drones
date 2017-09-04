const express = require('express');

const DroneModel = require('../models/drone-model.js');

const router = express.Router();

router.get('/drones', (req, res, next) => {
  DroneModel.find(
    (err, allDrones) =>{
      if(err){
        next(err);
        return;
      }
      res.locals.listOfDrones = allDrones;
      res.render('drones/drone-list.ejs')
    }
  )
});


router.get('/drones/new', (req, res, next) => {
  res.render('');
});

router.post('/drones', (req, res, next) => {
  // Iteration #3
});

module.exports = router;
