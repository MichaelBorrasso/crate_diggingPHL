
import React, { Component } from 'react';
import './albums.css';

class Albums extends Component {
    constructor() {
        super();
        this.state = {
            albums: [],
            album: undefined
        }
    }

    // componentDidMount() {
    //     fetch('/api/artists/all')
    //         .then(res => res.json())
    //         .then(results => {
    //             // console.log(res);
    //             // let results = res.body;
    //             console.log(results);
    //             // results.shift()
    //             let albums = results;
    //             this.setState({ albums });
    //         });
    // }

    componentDidMount() {
        fetch('/api/all/artists')
            .then(res => res.json())
            .then(results => {
                // console.log(res);
                // let results = res.body;
                console.log(results);
                // results.shift()
                let albums = results;
                this.setState({ albums });
            });
    }

    handleClick(e, id) {
        e.preventDefault()
        console.log(id)
        // console.log(id.basic_information.resource_url)
        //  this.setState({album: result})
      }

    render() {
        return (
            <div className="row">
                    <div className="col-sm" id="Albums">
                    <div>
                        <h2> Artists </h2>
                        
                        <ul>
                            {this.state.albums.map(album =>
                                <a href='#' onClick={e => this.handleClick(e, album.instance_id)}><li key={album.instance_id}>{album.basic_information.title}</li></a>
                                
                            )}
                            
                        </ul>
                        
                    </div>
                    </div>
                    <div className="col-sm" id="Links">
                        { this.state.album ?
                             <div>
                               <h2>Found it</h2>
                               <a href ='#' onClick={e => this.handleClick(e, this.state.album.instance_id)}><li key= {this.state.album.instance_id}>{this.state.album.basic_information.resource_url}</li></a>
                             </div>
                              : 
                             <div><h2>Click it!</h2></div>}

                    </div>
                </div>
           
        );
    }
}

export default Albums;

//  <a href src= {album.basic_information.resource_url} className="Album-Link" alt="Discogs-link"/>