import React, { Component } from "react";

class SearchInput extends Component {
    state ={search: ''}

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSearchSubmit(this.state.search);
        
    
    }
    render(){
        return(
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <div className="ui massive icon input">
                            <input type="text"
                            onChange={(event) => {
                                this.setState({search: event.target.value})
                            }}
                            value={this.state.search}/>
                            <i className="search icon"></i>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}
export default SearchInput;