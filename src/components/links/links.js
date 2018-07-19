import React, { Component } from 'react';
import './links.css';

class Links extends Component {
    constructor() {
        super();
        this.state = {
            links: []
        }
    }

    componentDidMount() {
        fetch('/api/artists/all')
            .then(res => res.json())
            .then(results => {
                // console.log(res);
                // let results = res.body;
                console.log(results);
                // results.shift()
                let links = results;
                this.setState({ links });
            });
    }

    componentDidMount() {
        fetch('/api/artists/artist:')
            .then(res => res.json())
            .then(results => {
                // console.log(res);
                // let results = res.body;
                console.log(results);
                // results.shift()
                let links = results;
                this.setState({ links });
            });
    }

    render() {
        return (
            <div >
                <h2>Links</h2>
                <ul>
                    {this.state.links.map(link =>
                        <li key={link.instance_id}>{link.basic_information.resource_url
                        }</li>

                    )}

                </ul>

            </div>
        );
    }
}

export default Links;
