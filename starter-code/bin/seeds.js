// Iteration #1

const mongoose = require('mongoose');

const DroneModel = require('../models/drone.js');

mongoose.connect('mongodb://localhost/drones-dev');

const droneArray = [{
  droneName: 'terminator',
  propellers: 8,
  maxSpeed: 200
},
{
  droneName: 'the amateur',
  propellers: 2,
  maxSpeed: 20
},
{
  droneName: 'predator',
  propellers: 16,
  maxSpeed: 500
},
{
  droneName: 'the photographer',
  propellers: 4,
  maxSpeed: 50
}
]


DroneModel.create(
  droneArray,
  (err, dronesAfterSave) => {
    if(err){
    console.log('create seed error',err);
    return;
  }
dronesAfterSave.forEach((drone)=>{
  console.log('Drone ---> ' + drone.droneName);
})
}
)
