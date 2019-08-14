import React, { Component } from 'react';

class Marks extends Component {
    constructor() {
        super();
        this.state = {
            Physics: 60,
            Chemistry: 60,
            Mathematics: 99
        }
        this.Update = this.Update.bind(this);
    }

    Update() {
        this.setState(
            {
                Physics: parseFloat(document.getElementById('Physics').value),
                Chemistry: parseFloat(document.getElementById('Chemistry').value),
                Mathematics: parseFloat(document.getElementById('Mathematics').value)

            }
        )
    }

    render() {
        var alertClass = "";
        var alertText = "";
        var phyPc, chePc, matPc, total, totalPc = 0;
        const a = this.state;
        const perPaperMarksPercent = 1.5;
        const totalMarksPercent = 3 * perPaperMarksPercent;
        phyPc = (a.Physics / perPaperMarksPercent).toFixed(1) + "%";
        chePc = (a.Chemistry / perPaperMarksPercent).toFixed(1) + "%";
        matPc = (a.Mathematics / perPaperMarksPercent).toFixed(1) + "%";
        total = a.Physics + a.Chemistry + a.Mathematics;
        totalPc = (total / totalMarksPercent).toFixed(1) + "%";
        if (total / totalMarksPercent >= 60) {
            alertClass = "alert alert-success";
            alertText = "Well Done! You have passed!";
        } else {
            alertClass = "alert alert-danger";
            alertText = "Sorry, you haven't passed the exams";
        }
        return (
            <div className="card  m-4">
                <form className="container m-4">
                    <div className="form-group input-group">
                        <div className="input-group-prepend w-12">
                            <span className="input-group-text w-100"> <i className="fa fa-rocket"> Physics</i></span>
                        </div>
                        <input id="Physics" className="form-control" defaultValue={a.Physics} type="number" min="0" max="150" onChange={this.Update} />
                        <div className="input-group-prepend">
                            <span className="input-group-text">%</span>
                        </div>
                        <input className="form-control w-25" value={phyPc} type="text" readOnly />
                    </div>
                    <div className="form-group input-group">
                        <div className="input-group-prepend w-12">
                            <span className="input-group-text w-100"> <i className="fa fa-flask"> Chemistry</i></span>
                        </div>
                        <input id="Chemistry" className="form-control" defaultValue={a.Chemistry} type="number" min="0" max="150" onChange={this.Update} />
                        <div className="input-group-prepend">
                            <span className="input-group-text">%</span>
                        </div>
                        <input className="form-control w-25" value={chePc} type="text" readOnly />
                    </div>
                    <div className="form-group input-group">
                        <div className="input-group-prepend w-12">
                            <span className="input-group-text w-100"> <i className="fa fa-calculator"> Maths</i></span>
                        </div>
                        <input id="Mathematics" className="form-control" defaultValue={a.Mathematics} type="number" min="0" max="150" onChange={this.Update} />
                        <div className="input-group-prepend">
                            <span className="input-group-text">%</span>
                        </div>
                        <input className="form-control w-25" value={matPc} type="text" readOnly />
                    </div>
                    <div className="form-group input-group">
                        <div className="input-group-prepend w-12">
                            <span className="input-group-text w-100"><i className="fa">Σ Total</i></span>
                        </div>
                        <input className="form-control" value={total} type="number" readOnly />
                        <div className="input-group-prepend">
                            <span className="input-group-text">%</span>
                        </div>
                        <input className="form-control w-25" value={totalPc} type="text" readOnly />
                    </div>
                    <div className={alertClass}>
                        {alertText}
                    </div>
                </form>
            </div>

        )
    }
}

export default Marks;