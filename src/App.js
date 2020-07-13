import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {observer, inject} from 'mobx-react';

@inject('MainStore')
@observer
class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    }
  }
  changeName = (firstName, lastName) => {
    this.setState({count: this.state.count + 1}, () => {
      this.props.MainStore.changeName(firstName + this.state.count.toString(), lastName + this.state.count.toString());
    })
  }
  render() {
    const user = this.props.MainStore.user;
    return (
      <div style={{
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center',
          height: 120
        }}>
        <div>
          {user.firstName}
        </div>
        <div>
          {user.lastName}
        </div>
        <button style={{ width: 60, height: 60 }} onClick={() => this.changeName('Mobx', 'React')} />
      </div>
    )
  }
}

export default App;
