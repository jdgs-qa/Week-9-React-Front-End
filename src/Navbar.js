import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar sticky-top navbar-expand-lg">
                <a className="navbar-brand" href="http://localhost:3000/index.html">a Page of Applets</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars"></i>
                </button>
                <div className="navbar-collapse collapse" id="navbar">
                    <ul className="nav navbar-nav m-4">
                        <li className="nav-item">
                            <a href="http://localhost:3000/details">Details Form</a>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav m-4">
                        <li className="nav-item">
                            <a href="http://localhost:3000/testscores">Test Scores</a>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav">
                        <li className="nav-item m-4">
                            <a href="http://localhost:3000/itemTable">Catalogue</a>
                        </li>
                    </ul>
                    <ul className="nav navbar-nav">
                        <li className="nav-item m-4">
                            <a href="http://localhost:3000/">Something Else</a>
                        </li>
                    </ul>
                </div>
            </nav>)
    };
}

export default Navbar;