import React, {Component} from 'react';
import Device from './Device';
import style from '../style';

class DeviceRow extends Component {
  render() {
    let deviceNameRow = this.props.data.map(device => {
      return (
        <Device
          name= {device.name}
          numLeft={device.numLeft}
          uniqueID={device['_id']}
          key={device.id}
        >
        </Device>
      )
    })
    return (

        <table style={style.deviceTable}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Available devices</th>
            </tr>
          </thead>
          <tbody>
            <tr >
              <td>{deviceNameRow}</td>
            </tr>
          </tbody>
        </table>

    )
  }
}

export default DeviceRow;
