import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';


class Welcome extends Component {
    
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
            <div>
                {this.state.profile.map(item => (
                    <div key= {item.Name}>
                        <h1>{item.DOB}</h1>
                        </div>
                ))}
            </div>
        );
    }
}
export default Welcome;