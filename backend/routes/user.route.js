const express = require('express');
const app = express();
const userRoutes = express.Router();
let userModel = require('../models/user');

// Crear usuario
userRoutes.route('/createUser').post(function (req, res) {
  let userM = new userModel(req.body);

  userM.save().then(user => {
    res.json('Se creo el usuario exitosamente');
  })
    .catch(err => {
      if (err.name === 'MongoError' && err.code === 11000)
      res.json('usuario ya existe');
     
    });


});

// Listar usuarios
userRoutes.route('/listUser').get(function (req, res) {
  userModel.find(function (err, users) {
    if (err) {
      console.log(err);
    }
    else {
      res.json(users);
    }
  });
});

// Obtener usuario
userRoutes.route('/getUser/:id').get(function (req, res) {
  let id = req.params.id;
  userModel.findById(id, function (err, user) {
    res.json(user);
  });
});

//  Modificar usuario
userRoutes.route('/modifyUser/:id').post(function (req, res) {
  userModel.findById(req.params.id, function (err, user) {
    if (!user)
    res.json('No se encontró el usuario');

    else {
      user.firstName = req.body.firstName;
      user.lastName = req.body.lastName;
      user.dni = req.body.dni;
      user.email = req.body.email;
      user.phone = req.body.phone;

      user.save().then(user => {
        res.json('Modificacion exitosa');
      })
        .catch(err => {
          res.status(400).send("No se logro modificar el usuario");
        });
    }
  });
});


module.exports = userRoutes;