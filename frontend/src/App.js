import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Welcome from './components/Welcome';
import './App.css';

class App extends Component {
  state = {
    profile : []
};
async componentDidMount(){
    try{
        const res = await fetch('http://127.0.0.1:8000/app');
        const profile = await res.json();
        this.setState({
            profile
        });
        
    }catch (e) {
        console.log(e); 
     }
}
  render() {
    return (
      
      <div className="container">
        <div>
                {this.state.profile.map(item => (
                    <div key= {item.Name}>
                        <h1>{item.DOB}</h1>
                        </div>
                ))}
      </div>
        <Router>
        <Route exact path="/" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/welcome" component={Welcome} />
        
        </Router>
        
      </div>
      
    );
  }
}

export default App;