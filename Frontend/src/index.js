import React from 'react';
import ReactDOM from 'react-dom';
import DeviceBlock from './Components/DeviceBlock';

ReactDOM.render(
  <DeviceBlock
    url='http://localhost:3001/api/devices'
    //pollInterval={500}  />
    />
   ,document.getElementById('root')
);
