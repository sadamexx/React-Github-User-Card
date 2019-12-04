import React from 'react';
import axios from 'axios';

import UserList from './UserList';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: {},
      followers: []
    };
  }
    
  

  componentDidMount() {
    axios
    .get('https://api.github.com/users/sadamexx')
    .then(response => {
      console.log(response.data);
      this.setState({ user: response.data})
    })
    axios
    .get('https://api.github.com/users/sadamexx/followers')
    .then(response =>{
      console.log(response.data);
      this.setState({ followers: response.data})
    })
    }



  render() {
    return (
      <div className="App">
        <h1>GitHub User Cards</h1>
        <UserList user={this.state.user} followers={this.state.followers}/>
        
      </div>
    );
  }
}

export default App;
