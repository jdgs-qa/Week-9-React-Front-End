import React, { Component } from 'react';
import UserName from './userName';
import FullName from './fullName';
import Email from './Email';


class Details extends Component {
    render() {
        return (
            <div className="card  m-4 mx-auto">
                <form className="container m-4 mx-auto">
                    <UserName />
                    <FullName first="Your First Name" last="Your Last Name" />
                    <FullName first="Mother's First Name" last="Mother's Last Name" />
                    <Email />
                </form>
            </div >
        )
    }
}

export default Details;