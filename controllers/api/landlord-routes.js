const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Tenant, Properties, Landlord } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
   Landlord.findAll({
      attributes: {},
   })
      .then(dbLandLordData => res.json(dbLandLordData))
      .catch(err => {
         console.log(err);
         res.status(500).json(err);
      });
});

router.get('/:id', (req, res) => {
   Landlord.findOne({
      where: {
         id:req.params.id
      },
      attributes: {},
   })
      .then(dbLandLordData => {
         if (!dbLandLordData) {
            res.status(404).json({ message: 'No landlord found with this id' });
            return;
         }
         res.json(dbLandLordData);
      })
      .catch(err => {
         console.log(err);
         res.status(500).json(err);
      });
});

router.post('/', (req, res) => {
   Landlord.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      company_name: req.body.company_name,
      number_of_properties: req.body.number_of_properties,
      contact_info: req.body.contact_info,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
   })
      .then(dbLandLordData => res.json(dbLandLordData))
      .catch(err => {
         console.log(err);
         res.status(500).json(err);
      });
});

// Login
router.post('/login', (req, res) => {
   Landlord.findOne({
      where: {
         email: req.body.email
      }
   }).then(dbLandLordData => {
      if (!dbLandLordData) {
         res.status(400).json({ message: 'No user with that email address!' });
         return;
      }

      const validPassword = dbLandLordData.checkPassword(req.body.password);

      if (!validPassword) {
         res.status(400).json({ message: 'Incorrect password!' });
         return;
      }

      req.session.save(() => {
         req.session.landlord_id = dbLandLordData.id;
         req.session.username = dbLandLordData.username;
         req.session.loggedIn = true;

         res.json({ landlord: dbLandLordData, message: 'You are now logged in!' });
      });
   });
});

// Logout
router.post('/logout', (req, res) => {
   if (req.session.loggedIn) {
      req.session.destroy(() => {
         res.status(204).end();
      });
   }
   else {
      res.status(404).end();
   }
});

// router.put('/:id', withAuth, (req, res) => {
//    Landlord.update(req.body, {
//       individualHooks: true,
//       where: {
//          id: req.params.id
//       }
//    })
//       .then(dbLandLordData => {
//          if (!dbLandLordData) {
//             res.status(404).json({ message: 'No landlord found with this id' });
//             return;
//          }
//          res.json(dbLandLordData);
//       })
//       .catch(err => {
//          console.log(err);
//          res.status(500).json(err);
//       });
// })

// router.delete('/:id', withAuth, (req, res) => {
//    Landlord.destroy({
//       where: {
//          id: req.params.id
//       }
//    })
//       .then(dbLandLordData => {
//          if (!dbLandLordData) {
//             res.status(404).json({ message: 'No Landlord found with this id' });
//             return;
//          }
//          res.json(dbLandLordData);
//       })
//       .catch(err => {
//          console.log(err);
//          res.status(500).json(err);
//       });
// });

module.exports = router;