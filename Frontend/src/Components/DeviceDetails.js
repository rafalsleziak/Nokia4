import React, {Component} from 'react'
import style from '../style'

class DeviceDetails extends Component {
  constructor(props){
    super(props);
    this.state = {data: []};
  }
  render(){
    return (
        <div style={this.props.numLeft > 0 ? style.available : style.unavailable}>
            {(this.props.numLeft > 0) ?
              (
                <p>There are {this.props.numLeft} devices in lab currently</p>
              ) :
              (
                <p>Device is currently unavailable</p>
              )}
        </div>
    )
  }
}

export default DeviceDetails;
