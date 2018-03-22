var DeviceItem = require('./models/device.js');



  //mongoose.connection.db.dropDataBase();

  var seedDevices = [{
    name: "3d printer",
    numLeft: 5
  },{
    name: "pc",
    numLeft: 7
  }];

  DeviceItem.remove({}, ()=>{
    seedDevices.forEach(function(item){
      new DeviceItem(item).save();
    })
  })
