import React, {Component} from 'react'
import style from '../style'
import edit_logo from '../images/editlogo.png';
import delete_logo from '../images/deletelogo.png';

class Device extends Component {
  constructor(props){
    super(props);
    this.state = {
      toBeUpdated: false,
      name: '',
      numLeft: ''
    };

    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleNumLeftChange = this.handleNumLeftChange.bind(this);
    this.deleteDevice = this.deleteDevice.bind(this);
  }

  deleteDevice(e) {
    e.preventDefault()
    let id = this.props.uniqueID;
    this.props.onDeviceDelete(id);
    console.log('deleted');
  }

  handleNameChange(e) {
    this.setState({name: e.target.value})
  }

  handleNumLeftChange(e) {
    this.setState({numLeft: e.target.value})
  }

  render() {
    return (
      <div style={style.device} >
        <table>
          <thead style={style.tablehead}>
            <th>Device Name:</th>
            <th>Available Devices:</th>
            <th></th>
            <th></th>
          </thead>
          <tr style={style.row}>
            <td>{this.props.name}</td>
            <td>{this.props.numLeft}</td>
            <td><img alt="edit device" src={edit_logo} width="48" height="48"/></td>
            <td>
              <a href='' onClick={this.deleteDevice}>
                <img src={delete_logo} width="48" height="48" alt="delete device"/>
              </a>
            </td>
          </tr>
        </table>
      </div>
    )
  }
}

export default Device
