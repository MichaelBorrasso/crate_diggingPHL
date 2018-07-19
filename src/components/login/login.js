import React, { Component } from 'react';
import './login.css';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            login: []
        }
    }

componentDidMount() {
    fetch('/api/login')
        .then(res => res.json())
        .then(results => {
            // console.log(res);
            // let results = res.body;
            console.log(results);
            // results.shift()
            let login = results;
            this.setState({ login });
        });
}

render() {
    return (
        <div >
            <h2>Login</h2>
           
        
        </div>
    );
}
}

 export default Login;