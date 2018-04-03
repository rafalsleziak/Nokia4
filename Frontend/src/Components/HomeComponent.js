import React, {Component} from 'react';
import {
  Route,
  Link
} from 'react-router-dom';
import DeviceBlock from './DeviceBlock';
import style from '../style';

const Home = () => (
  <div>
    <h1>Home page</h1>
  </div>
);

class HomeComponent extends Component{
  render() {
    return (
      <div>
        <ul style={style.header}>
          <li><Link to='/' style={style.link}>Home page</Link></li>
          <li><Link to="/devices" style={style.link} >Devices</Link></li>
        </ul>
        <div style={style.content}>
          <Route exact path="/" component={Home} />
          <Route path="/devices" component={() => <DeviceBlock url='http://localhost:3001/api/devices'/>}/>
        </div>
      </div>
    );
  }
}

export default HomeComponent;
