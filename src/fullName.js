import React, { Component } from 'react';

class FullName extends Component {
    render() {
        return (
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                </div>
                <input id="firstName" className="form-control" placeholder={this.props.first} type="text" required />
                <input id="lastName" className="form-control" placeholder={this.props.last} type="text" required />

            </div>
        )
    }
}

export default FullName;