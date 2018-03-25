import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
  Route,
  Link
} from 'react-router-dom';
import DeviceBlock from './DeviceBlock';

const Home = () => (
  <div>
    <h1>Home page</h1>
  </div>
);

class HomeComponent extends Component{
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let mountNode = ReactDOM.findDOMNode(this.refs.links);
    ReactDOM.unmountComponentAtNode(mountNode);
  }

  render() {
    return (
      <div ref="links">
        <ul>
          <li><Link to="/" onClick={this.handleClick}>Home page</Link></li>
          <li><Link to="/devices" onClick={this.handleClick}>Devices</Link></li>
        </ul>
        <Route exact path="/" component={Home}/>
        <Route path="/devices" component={() => <DeviceBlock url='http://localhost:3001/api/devices'/>}/>
      </div>
    );
  }
}

export default HomeComponent;