import React, {Component} from 'react';
import DeviceRow from './DeviceRow';
import DeviceForm from './DeviceForm';
import axios from 'axios';
import style from '../style';

class DeviceTable extends Component {
  constructor(props){
    super(props);
    this.state = {device: []};
    this.loadDeviceFromServer = this.loadDeviceFromServer.bind(this);
    this.handleDeviceSubmit = this.handleDeviceSubmit.bind(this);
    this.pollInterval = null;
  }

  loadDeviceFromServer() {
    axios.get(this.props.url)
      .then(res => {
        this.setState({device: res.data});
      })
  }

  componentDidMount() {
    this.loadDeviceFromServer();
    if(!this.pollInterval){
      this.pollInterval = setInterval(this.loadDeviceFromServer, this.props.pollInterval);
    }
  }

  componentWillUnmount() {
    this.pollInterval && clearInterval(this.pollInterval);
  }

  render() {
    return (
      <div style={style.deviceBox}>
        <h3 style={style.title}>Devices:</h3>
      <DeviceRow
          data={this.state.device}>
      </DeviceRow>
      </div>

    )
  }
}

export default DeviceTable;
