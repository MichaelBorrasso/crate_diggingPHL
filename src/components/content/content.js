import React, { Component } from 'react';
import Albums from '../albums';
import Links from '../links';
import './content.css';

class Content extends Component {
  
    render() {
        return (
            <div className="container">
               <Albums />
            </div>
                    
        );
    }
}

export default Content;