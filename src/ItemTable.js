import React, { Component } from 'react';
import DataService from './DataService.js';

class ItemTable extends Component {
    constructor() {
        super();
        this.state = {
            records: [],
            reload: false
        }
        let promise = DataService.getAllItems();
        promise.then(response => {
            this.setState({
                records: response.data,
                reload: false
            })
        }).catch(error => { console.warn({ error }) });
    }

    deleteItem(id) {
        DataService.doDelItem(id).then(
            this.setState({
                reload: true
            })
        );

    }

    render() {

        return (
            <div>
                <div id="table" className="mx-auto">
                    <table className="table table-striped">
                        <thead className="thead-light">
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Brand</th>
                                <th scope="col">Type</th>
                                <th scope="col">Colour</th>
                                <th scope="col" className="text-right"> <button type="button" className="btn btn-success" data-toggle="modal" data-target="#addItemModal"><i className="fa fa-plus-square"></i> Add Item</button></th>
                            </tr>
                        </thead>
                        <tbody id="tableBody" className="tableBody">
                            {
                                this.state.records.map((record, i) => {
                                    var s = record.itemType;
                                    const id = record.itemId;
                                    return (
                                        <tr key={"A" + i}>
                                            <td>{record.itemId}</td>
                                            <td>{record.itemName}</td>
                                            <td>{record.itemBrand}</td>
                                            <td>{s.replace(/_/g, " ")}</td>
                                            <td>{record.itemColour}</td>
                                            <td className="text-right">
                                                <div className="btn-group" role="group" aria-label="Basic example">
                                                    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#updateItemModal"><i className="fa fa-edit"></i></button>
                                                    <button type="button" className="btn btn-danger"> <i className="fa fa-trash-alt" onClick={this.deleteItem.bind(this, id)}></i></button>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    <div className="modal fade" id="updateItemModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div id="loginContent" className="modal-content mt-4 mb-4 mx-auto">
                                <div className="modal-header">
                                    <h5 className="modal-title " id="exampleModalLabel">Update Item no. {}</h5>
                                    <button className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div className="modal-body">
                                    <form id="updateForm" onSubmit={DataService.doUpdateItem.bind(this)}>
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"> <i className="fa fa-signature"></i> </span>
                                            </div>
                                            <input id="updateItemName" className="form-control" type="text"></input>
                                        </div>
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"> <i className="fa fa-stamp"></i> </span>
                                            </div>
                                            <input id="updateItemBrand" className="form-control" type="text"></input>
                                        </div>
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"> <i className="fa fa-palette"></i> </span>
                                            </div>
                                            <input id="updateItemColour" className="form-control" type="text"></input>
                                        </div>
                                        <div className="form-group input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"> <i className="fa fa-pen-nib"></i> </span>
                                            </div>
                                            <input id="updateItemType" className="form-control" type="text"></input>
                                        </div>
                                        <div className="form-group">
                                            <button type="submit" className="btn btn-primary btn-block">Save Changes</button>
                                        </div>
                                    </form>
                                </div>
                            </div></div></div>

                    <div className="modal fade" id="addItemModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog" role="document">
                            <div id="modal" className="modal-content mt-4 mb-4 mx-auto">
                                <div className="modal-header">
                                    <h5 className="modal-title " id="exampleModalLabel">Add an Item</h5>
                                    <button className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
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
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ItemTable;