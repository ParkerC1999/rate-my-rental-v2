const router = require('express').Router();

const tenantRoutes = require('./tenant-routes.js');
// const postRoutes = require('./post-routes');
// const commentRoutes = require('./comment-routes');
const propPage = require('./property-route');
const landlordPage = require('./landlord-routes');

router.use('/tenants', tenantRoutes);
// router.use('/posts', postRoutes);
// router.use('/comments', commentRoutes);
router.use('/properties', propPage);
router.use('/landlords', landlordPage);

module.exports = router;