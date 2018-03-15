'use strict'

module.exports = (sequelize, DataTypes) => {
  var device = sequelize.define('devices', {
    deviceName: {
      type: DataTypes.STRING,
      validate: {
        len:{
          args: [1, 30],
          msg: 'Device name must be at least 1 character long and less than 30 characters'
        }
      }
    },
    numLeft: {
        type: DataTypes.INTEGER,
        validate: {
          isInt: {
            args: true,
            msg: 'Availavle devices number must be an integer'
          },
          min:{
            args: 1,
            msg: 'Available devices number must be greater than 0'
          }
        }
      }
  });

  device.prototype.url = function() {
    return "/"+this.id;
  }


  return device;

};
