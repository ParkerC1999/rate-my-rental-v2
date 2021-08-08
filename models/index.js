const Post = require('./Post');
const Landlord = require('./Landlord');
const Rating = require('./Rating');
const Comment = require('./Comment');
const Tenant = require('./Tenant');
const Properties = require('./Properties');
const Reply = require('./Reply');

// create associations
Landlord.hasMany(Properties, {
   foreignKey: 'landlord_id'
});

Properties.belongsTo(Landlord, {
   foreignKey: 'landlord_id'
});

Tenant.hasMany(Post, {
   foreignKey: 'tenant_id'
});

Post.belongsTo(Tenant, {
   foreignKey: 'tenant_id'
});

Tenant.belongsToMany(Post, {
   through: Rating,
   //   as: '',
   foreignKey: 'tenant_id'
});

Post.belongsToMany(Tenant, {
   through: Rating,
   //   as: 'ratings',
   foreignKey: 'post_id'
});

Rating.belongsTo(Tenant, {
   foreignKey: 'tenant_id'
});

Rating.belongsTo(Post, {
   foreignKey: 'post_id'
});

Tenant.hasMany(Rating, {
   foreignKey: 'tenant_id'
});

Post.hasMany(Rating, {
   foreignKey: 'post_id'
});

Comment.belongsTo(Tenant, {
   foreignKey: 'tenant_id'
});

Comment.belongsTo(Post, {
   foreignKey: 'post_id'
});

Reply.belongsTo(Landlord, {
   foreignKey: 'landlord_id'
});

Reply.belongsTo(Post, {
   foreignKey: 'post_id'
});

Landlord.hasMany(Reply, {
   foreignKey: 'landlord_id'
});

Tenant.hasMany(Comment, {
   foreignKey: 'tenant_id'
});

Post.hasMany(Comment, {
   foreignKey: 'post_id'
});

module.exports = { Tenant, Landlord, Post, Rating, Comment, Properties, Reply };