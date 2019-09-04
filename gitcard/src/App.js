import React from 'react';
import axios from 'axios';
import './App.css';
import { Grid, Image } from 'semantic-ui-react'


import UserCard from './components/UserCard';
import FollowerList from './components/FollowerList';


class App extends React.Component{
  constructor(){
    super();
    this.state = {
      data: [],
      followers: []
    };
  };
  
  
  componentDidMount() {
    axios
    .get(`https://api.github.com/users/dereketman`)
    // this.setState({data: resp.data.login})
    .then(resp => this.setState({data: resp.data}) )
    .catch( err => console.log("Axios Err: ", err))
    
    axios
    .get(`https://api.github.com/users/dereketman/followers`)
    // this.setState({followers: resp.data})
    //console.log(resp.data)
    .then(resp => (console.log(resp.data), this.setState({followers: resp.data})) )
    .catch( err => console.log("Axios Err: ", err))
    
  };
  
  
  render() {
    return (

      <div className="App">
        <header className="App-header">
          <h1>Hey there, Whats your user name again?</h1>
          <UserCard data={this.state.data}/>

        <h2>Check out some of my friends!</h2>
          <div className="ui Grid">
            <div className="column">
              {this.state.followers.map( followers => {
                return <FollowerList data={followers}/>            
              })}
            </div>
          </div>
          </header>
      </div>
    );
 }
}

export default App;
