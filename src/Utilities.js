import React, { Component } from "react";

class Utilities extends Component {
    constructor(props) {
        super(props);
        this.state = {
            residence: 0,
            choice: ""
        };
        this.setResidence = this.setResidence.bind(this);
        this.setChoice = this.setChoice.bind(this);
        this.setHeatingChoice = this.setHeatingChoice.bind(this);
    }
    render() {
        return (
            <div>
                <div>
                    <h2>How many people live in your house?</h2>
                    <select onChange={this.setResidence}>
                        <option />
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                    </select>
                </div>
                <div>
                    <h2>Heating Choices:</h2>
                    <select onChange={this.setChoice}>
                        <option />
                        <option value="Electricity">Electricity</option>
                        <option value="Natural Gas">Natural Gas</option>
                        <option value="Heating Oil">Heating Oil</option>
                    </select>
                </div>
            </div>
        );
    }
    setResidence(event) {
        var value = parseInt(event.target.value);
        this.setState({ residence: value });
        this.setHeatingChoice(value, this.state.choice);
    }
    setChoice(event) {
        var value = event.target.value;
        this.setState({ choice: value });
        this.setHeatingChoice(this.state.residence, value);
    }
    setHeatingChoice(residence, choice) {
        var number = residence;
        var day;
        var month;
        var year;
        if (choice === "Electricity") {
            day = 14.73 * number;
            month = day * 30;
            year = day * 365;
            this.props.utilities(day, month, year);
        } else if (choice === "Natural Gas") {
            day = 12.08 * number;
            month = day * 30;
            year = day * 365;
            this.props.utilities(day, month, year);
        } else if (choice === "Heating Oil") {
            day = 15.33 * number;
            month = day * 30;
            year = day * 365;
            this.props.utilities(day, month, year);
        }
    }
}
export default Utilities;
