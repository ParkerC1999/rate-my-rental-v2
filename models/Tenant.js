const bcrypt = require('bcrypt');
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Tenant extends Model {
   checkPassword(loginPw) {
      return bcrypt.compareSync(loginPw, this.password);
   }
}

Tenant.init(
   {
      id: {
         type: DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true,
         autoIncrement: true
      },
      username: {
         type: DataTypes.STRING,
         allowNull: false
      },
      email: {
         type: DataTypes.STRING,
         allowNull: false,
         unique: true,
         validate: {
            isEmail: true
         }
      },
      password: {
         type: DataTypes.STRING,
         allowNull: false,
         validate: {
            len: [4]
         }
      }
   },
   {
      hooks: {
         async beforeCreate(newTenantData) {
            newTenantData.password = await bcrypt.hash(newTenantData.password, 10);
            return newTenantData;
         },
         async beforeUpdate(updatedTenantData) {
            updatedTenantData.password = await bcrypt.hash(updatedTenantData.password, 10);
            return updatedTenantData;
         }
      },

      sequelize,
      timestamps: false,
      freezeTableName: true,
      underscored: true,
      modelName: 'tenant'
   }
);

module.exports = Tenant;