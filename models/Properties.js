
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Properties extends Model { }

Properties.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    number_of_bedrooms: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    number_of_bathrooms: {
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
    property_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // square_footage: {
    //   type: DataTypes.INTERGER,
    //   allowNull: false,
    // },
    // year_built: {
    //   type: DataTypes.INTERGER,
    //   allowNull: false,
    // },
    location_address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    landlord_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'landlord',
        key: 'id'
      }
    },
    // location_city: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    // location_state: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    // zip_code: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    // },
    // parking_type: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    // },
    // parking_spaces: {
    //   type: DataTypes.STRING,
    //   allowNull: true,
    // },
    // homeowners_association: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    // hoa_fee: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    // },
    // utilities: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    // rent_ammount: {
    //   type: DataTypes.STRING,
    //   allowNull: false
    // }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "properties"
  }
);

module.exports = Properties;