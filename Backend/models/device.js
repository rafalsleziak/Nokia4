<<<<<<< HEAD
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var DeviceSchema = new Schema ( {
  name: {
    type: String,
    required: true,
    max: 30,
  },
  numLeft: {
    type: Number,
     min: 0,
     required: true
  }
});

DeviceSchema.virtual('device_name').get(function() {
  return this.name;
});

DeviceSchema
.virtual('url')
.get(function(){
  return '/api/devices/'+ this._id;
});

module.exports = mongoose.model('Device', DeviceSchema);
=======
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
>>>>>>> b3144d031cc4cba1e14948c7a3938967670870db
