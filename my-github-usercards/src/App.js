import React from 'react';
import axios from 'axios';
import FollowerList from './FollowerList';
import './App.css';
import {
  Card, CardImg, CardBody,
  CardTitle, CardSubtitle, Col, Container, Row
} from 'reactstrap';

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
      this.setState({user:{  
        name: response.data.name,
        handle: response.data.login,
        link: response.data.html_url,
        followers: response.data.followers,
        location: response.data.location,
        bio: response.data.bio,
        avatar: response.data.avatar_url}
      })
    })
    axios
    .get('https://api.github.com/users/sadamexx/followers')
    .then(response =>{
      console.log(response.data);
      this.setState({ followers: response.data})
    })
    }

    // componentDidUpdate(prevProps, prevState){
    //   if(prevState.user !== this.state.user){
    //     axios
    //     .get(`https://api.github.com/users/${this.state.newUser}`)
    //     .then(response => {
    //       this.setState({})
    //     })
    //   }
    // }

    handleChanges = event => {
      this.setState({
        newUser: event.target.value
      });
    };

    searchNewUser = event => {
      event.preventDefault();
      axios
        .get(`https://api.github.com/users/${this.state.newUser}`)
        .then(response => {
          this.setState({user: {
            name: response.data.name,
            handle: response.data.login,
            link: response.data.html_url,
            followers: response.data.followers,
            location: response.data.location,
            bio: response.data.bio,
            avatar: response.data.avatar_url}
        });
      });
      
      axios
    .get(`https://api.github.com/users/${this.state.newUser}/followers`)
    .then(response =>{
      console.log(response.data);
      this.setState({ followers: response.data})
    })
    };

  render() {
    return (
      <div className="App">
        <h1>GitHub User Cards</h1>
        <input
          type="text"
          value={this.state.newUser}
          onChange={this.handleChanges}
          />
          <button onClick={this.searchNewUser}>Find User</button>
        <Container>
          <Row>
          <Col xs="12" s="6" md="4">
            <Card>
              <h1>Your All Star Coder!</h1>
              <CardImg top width="100%" src={this.state.user.avatar} alt="avatar photo" />
                  <CardBody>
                    <CardTitle className="title">{this.state.user.name}</CardTitle>
                    <CardSubtitle>Handle: {this.state.user.handle}</CardSubtitle>
                    <CardSubtitle>Location: {this.state.user.location}</CardSubtitle>
                    <CardSubtitle>Followers: {this.state.user.followers}</CardSubtitle>
                    <CardSubtitle>Link: <a href={this.state.user.link}>{this.state.user.link}</a></CardSubtitle>
                    <CardSubtitle>Bio: {this.state.user.bio}</CardSubtitle>
                    </CardBody>
            </Card>
            </Col>
          </Row>
      </Container>
        <h2>My Followers</h2>
        <FollowerList followers={this.state.followers}/>
      </div>
    );
  }
}

export default App;
