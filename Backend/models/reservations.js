'use strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ReservationSchema = {
  startDate: {
    type: Date,
    required: true
   },
  endDate: {
    type: Date,
    required: true
   },
  numOfPeople: {
    type: Number,
    required: true,
    min: 0,
    max: 12
  },
  option: {
    type: String,
    enum: ['MakerSpace', 'OpenSpace', 'WholeSpace'],
    required: true
  }
};

ReservationSchema
.virtual('startDate')
.get(function() {
  return this.startDate;
});

ReservationSchema
.virtual('endDate')
.get(function() {
  return this.endDate;
});

ReservationSchema
.virtual('numOfPeople')
.get(function() {
  return this.numOfPeople;
});

ReservationSchema
.virtual('option')
.get(function() {
  return this.option;
});

ReservationSchemaeSchema
.virtual('url')
.get(function()){
  return '/api/reservation/'+ this._id;
}

module.exports = mongoose.model('Reservation', DeviceSchema);
