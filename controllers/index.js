const router = require('express').Router();

const apiRoutes = require('./api/');
// const propPage = require('./property-route');
const homeRoutes = require('./home-routes.js');
// const dashboardRoutes = require('./dashboard-routes.js');

router.use('/', homeRoutes);
// router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);
// router.use('/properties', propPage);

module.exports = router;