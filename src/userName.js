import React, { Component } from 'react';

class UserName extends Component {
    render() {
        return (
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text"> <i className="fa fa-at"></i> </span>
                </div>
                <input id="userName" className="form-control" placeholder="Username" type="text" required></input>
            </div>
        )
    }
}

export default UserName;