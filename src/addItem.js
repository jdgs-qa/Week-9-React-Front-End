import React, { Component } from 'react';
import DataService from './DataService.js';

class AddItem extends Component {
    render() {
        return (
            <div id="loginContent" className="modal-content mt-4 mb-4 mx-auto w-50">
                <div className="modal-header">
                    <h5 className="modal-title " id="exampleModalLabel">Add an Item</h5>
                    <a className="close" href="http://localhost:3000/itemTable" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </a>
                </div>
                <div className="modal-body">
                    <form id="createForm" onSubmit={DataService.doAddItem.bind(this)}>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fa fa-signature"></i> </span>
                            </div>
                            <input id="itemName" className="form-control" placeholder="Item Name" type="text"></input>
                        </div>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fa fa-stamp"></i> </span>
                            </div>
                            <input id="itemBrand" className="form-control" placeholder="Item Brand" type="text"></input>
                        </div>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fa fa-palette"></i> </span>
                            </div>
                            <input id="itemColour" className="form-control" placeholder="Item Colour" type="text"></input>
                        </div>
                        <div className="form-group input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"> <i className="fa fa-pen-nib"></i> </span>
                            </div>
                            <input id="itemType" className="form-control" placeholder="Item Type" type="text"></input>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-block">Add Item</button>
                        </div>
                    </form>
                </div>
            </div>


        )
    }
}

export default AddItem;