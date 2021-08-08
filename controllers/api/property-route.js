const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, Tenant, Comment, Rating, Properties } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
   Properties.findAll({
      attributes: {}
   })
      .then(dbPropertyData => res.json(dbPropertyData))
      .catch(err => {
         console.log(err)
      });
});

router.get('/:id', (req, res) => {
   Properties.findOne({
      where: {
         id:req.params.id
      },
      attributes: {},
   })
      .then(dbPropertyData => {
         if (!dbPropertyData) {
            res.status(404).json({ message: 'No property found with this id' });
            return;
         }
         res.json(dbPropertyData);
      })
      .catch(err => {
         console.log(err);
         res.status(500).json(err);
      });
});

router.post('/', (req, res) => {
   Properties.create({
      number_of_bedrooms: req.body.number_of_bedrooms,
      number_of_bathrooms: req.body.number_of_bathrooms,
      property_type: req.body.property_type,
      location_address: req.body.location_address,
      landlord_id: req.body.landlord_id
   })
      .then(dbPropertyData => {
         if (!dbPropertyData) {
            res.status(404).json({ message: 'No property found with this id' });
            return;
         }
         res.json(dbPropertyData);
      })
      .catch(err => {
         console.log(err);
         res.status(500).json(err);
      });
});

router.put('/', (req, res) => {
   Properties.update(req.body, {
      individualHooks: true,
      where: {
         id: req.params.id
      }
   })
      .then(dbPropertyData => {
         if (!dbPropertyData) {
            res.status(404).json({ message: 'No property found with this id' });
            return;
         }
         res.json(dbPropertyData);
      })
      .catch(err => {
         console.log(err);
         res.status(500).json(err);
      });
});

router.delete('/:id', withAuth, (req, res) => {
   Properties.destroy({
      where: {
         id: req.params.id
      }
   })
      .then(dbPropertyData => {
         if (!dbPropertyData) {
            res.status(404).json({ message: 'No property found with this id' });
            return;
         }
         res.json(dbPropertyData);
      })
      .catch(err => {
         console.log(err);
         res.status(500).json(err);
      });
});

module.exports = router;