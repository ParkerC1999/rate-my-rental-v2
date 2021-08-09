const router = require('express').Router();
const { Tenant, Comment, Post, Rating, Landlord } = require('../../models');
const withAuth = require('../../utils/auth')

router.get('/', (req, res) => {
   Tenant.findAll({
      attributes: { exclude: ['password'] }
   })
      .then(dbTenantData => res.json(dbTenantData))
      .catch(err => {
         console.log(err);
         res.status(500).json(err);
      });
});

router.get('/:id', (req, res) => {
   Tenant.findOne({
      where: {
         id: req.params.id
      },
      attributes: { exclude: ['password'] },
   })
      .then(dbTenantData => {
         if (!dbTenantData) {
            res.status(404).json({ message: 'No tenant found with this id' });
            return;
         }
         res.json(dbTenantData);
      })
      .catch(err => {
         console.log(err);
         res.status(500).json(err);
      });
});

// // Tenant Create
router.post('/', (req, res) => {
   Tenant.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
   })
      .then(dbTenantData => {
         req.session.save(() => {
            req.session.tenant_id = dbTenantData.id;
            req.session.username = dbTenantData.username;
            req.session.loggedIn = true;

            res.json(dbTenantData);
         });
      })
      .catch(err => {
         console.log(err);
         res.status(500).json(err);
      });
});

// Login
router.post('/login', withAuth, (req, res) => {
   Tenant.findOne({
      where: {
         email: req.body.email
      }
   }).then(dbTenantData => {
      if (!dbTenantData) {
         res.status(400).json({ message: 'No user with that email address!' });
         return;
      }

      const validPassword = dbTenantData.checkPassword(req.body.password);

      if (!validPassword) {
         res.status(400).json({ message: 'Incorrect password!' });
         return;
      }

      req.session.save(() => {
         req.session.tenant_id = dbTenantData.id;
         req.session.username = dbTenantData.username;
         req.session.loggedIn = true;

         res.json({ tenant: dbTenantData, message: 'You are now logged in!' });
      });
   });
});

// Logout
router.post('/logout', withAuth, (req, res) => {
   if (req.session.loggedIn) {
      req.session.destroy(() => {
         res.status(204).end();
      });
   }
   else {
      res.status(404).end();
   }
});

router.put('/:id', withAuth, (req, res) => {
   Tenant.update(req.body, {
      individualHooks: true,
      where: {
         id: req.params.id
      }
   })
      .then(dbTenantData => {
         if (!dbTenantData) {
            res.status(404).json({ message: 'No tenant found with this id' });
            return;
         }
         res.json(dbTenantData);
      })
      .catch(err => {
         console.log(err);
         res.status(500).json(err);
      });
});

router.delete('/:id', withAuth,(req, res) => {
   Tenant.destroy({
      where: {
         id: req.params.id
      }
   })
      .then(dbTenantData => {
         if (!dbTenantData) {
            res.status(404).json({ message: 'No tenant found with this id' });
            return;
         }
         res.json(dbTenantData);
      })
      .catch(err => {
         console.log(err);
         res.status(500).json(err);
      });
});

module.exports = router;