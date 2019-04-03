import React, { Component } from 'react';


export class Loader extends Component {
  render() {
    return (
        <div className="ui active dimmer">
            <div className="ui text loader">{this.props.message}</div>
        </div>
    );
  };
};

//in case I dont pase a message where I use that component
Loader.defaultProps = {
    message: 'Loading...'
};

export default Loader
