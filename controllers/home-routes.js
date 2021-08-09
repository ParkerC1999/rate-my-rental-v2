const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, Tenant, Properties, Landlord } = require('../models');


router.get('/properties', (req, res) => {
   Properties.findAll({
   }).then(dbPostData => {
      const properties = dbPostData.map(properties => properties.get({ plain: true }));
      console.log(properties);
      res.render('property-page', {
         properties,
      });
   }).catch(err => {
      console.log(err);
      res.status(500).json(err);
   });
});

router.get('/landlords', (req, res) => {
   Landlord.findAll({
   }).then(dbPostData => {
      const landlords = dbPostData.map(landlords => landlords.get({ plain: true }));
      console.log(landlords);
      res.render('landlord-page', {
         landlords,
      });
   }).catch(err => {
      console.log(err);
      res.status(500).json(err);
   });
});

// router.get('/', (req, res) => {
//    console.log('======================');
//    Post.findAll({
//       attributes: [
//          'id',
//          'post_url',
//          'title',
//          'created_at',
//          // [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = rating.post_id)'), 'rating_count']
//       ],
//       include: [
//          {
//             model: Comment,
//          },
//          {
//             model: Tenant,
//          }
//       ]
//    })
//       .then(dbPostData => {
//          const posts = dbPostData.map(post => post.get({ plain: true }));

//          res.render('homepage', {
//             posts,
//             loggedIn: req.session.loggedIn
//          });
//       })
// });

// router.get('/post/:id', (req, res) => {
//    Post.findOne({
//       where: {
//          id: req.params.id
//       },
//       attributes: [
//          'id',
//          'post_url',
//          'title',
//          'created_at',
//          // [sequelize.literal('(SELECT COUNT(*) FROM vote WHERE post.id = rating.post_id)'), 'rating_count']
//       ],
//       include: [
//          {
//             model: Comment,
//          },
//          {
//             model: Tenant,
//          }
//       ]
//    })
//       .then(dbPostData => {
//          if (!dbPostData) {
//             res.status(404).json({ message: 'No post found with this id' });
//             return;
//          }

//          const post = dbPostData.get({ plain: true });

//          res.render('single-post', {
//             post,
//             loggedIn: req.session.loggedIn
//          });
//       })
//       .catch(err => {
//          console.log(err);
//          res.status(500).json(err);
//       });
// });

router.get('/login', (req, res) => {
   if (req.session.loggedIn) {
      res.redirect('/');
      return;
   }

   res.render('login');
});

module.exports = router;