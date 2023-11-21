import React, { Component } from "react";
import axios from 'axios';

import SearchInput from "./SearchInput";
import ImageList from "./ImageList";

const API_URL = process.env.REACT_APP_API_KEY
console.log(API_URL)

class App extends Component{

    state = {images:[]}

    onSearchSubmit = async(entry) =>{
        const response = await axios.get(`https://pixabay.com/api/?key=${API_URL}&q=${entry}&image_type=photo`)
        this.setState({images:response.data.hits})
    }   
    render(){   
    return(
        <div className="ui container">
            < SearchInput onSearchSubmit={this.onSearchSubmit}/>
            <ImageList images={this.state.images}/>
        </div>
    )
    }
}

export default App;