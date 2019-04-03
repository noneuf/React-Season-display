import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import SeasonDisplay from './seasonDisplay';
import Loader from './Loader';

export class App extends Component {

    state = { lat: null, errorMessage: ''}; 

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            (err) => this.setState({ errorMessage: err.message })
        );
    };

    componentDidUpdate() {
        
    }
    
    renderContent() {
        if(this.state.errorMessage && !this.state.lat) {
            return <div>Error: {this.state.errorMessage}</div>
        }

        if (!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat}/>
        }

        return ( 
            <Loader message="Finding your location..."/>
        )
    }

    render() {
        return(
            <div>{this.renderContent()}</div>
        )
    };
}
        
ReactDOM.render(<App />, document.querySelector('#root'));
export default App
