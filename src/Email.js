import React, { Component } from 'react';

class Email extends Component {
    render() {
        return (
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
                </div>
                <input id="email" className="form-control" placeholder="Email address" type="email" required></input>
            </div>
        )
    }
}

export default Email;