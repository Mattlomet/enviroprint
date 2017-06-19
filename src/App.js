import React, { Component } from "react";
import InputCategory from "./InputCategory";
import BarGraph from "./BarGraph";
import DoughnutGraph from "./DoughnutGraph";
import LineGraph from "./LineGraph";
import "./App.css";

class App extends Component {
    constructor() {
        super();
        this.state = {
            utilities: [],
            car: [],
            plane: [],
            train: [],
            subway: [],
            bus: [],
            food: []
        };
        this.setUtilities = this.setUtilities.bind(this);
        this.setFood = this.setFood.bind(this);
        this.setCar = this.setCar.bind(this);
        this.setPlane = this.setPlane.bind(this);
        this.setTrain = this.setTrain.bind(this);
        this.setSubway = this.setSubway.bind(this);
        this.setBus = this.setBus.bind(this);
    }
    render() {
        return (
            <div className="app-compenent">
                <h1 className="app-header">Environmental Footprint</h1>
                <div className="input-component">
                    <InputCategory
                        utilities={this.setUtilities}
                        car={this.setCar}
                        plane={this.setPlane}
                        train={this.setTrain}
                        subway={this.setSubway}
                        bus={this.setBus}
                        food={this.setFood}
                    />
                </div>
                <div className="graph-containers">
                    <div className="bar-graph">
                        <BarGraph
                            utilities={this.state.utilities}
                            car={this.state.car}
                            plane={this.state.plane}
                            train={this.state.train}
                            subway={this.state.subway}
                            bus={this.state.bus}
                            food={this.state.food}
                        />
                    </div>
                    <div className="doughnut-graph">
                        <DoughnutGraph
                            utilities={this.state.utilities}
                            car={this.state.car}
                            plane={this.state.plane}
                            train={this.state.train}
                            subway={this.state.subway}
                            bus={this.state.bus}
                            food={this.state.food}
                        />
                    </div>
                    <div className="line-graph">
                        <LineGraph
                            utilities={this.state.utilities}
                            car={this.state.car}
                            plane={this.state.plane}
                            train={this.state.train}
                            subway={this.state.subway}
                            bus={this.state.bus}
                            food={this.state.food}
                        />
                    </div>
                </div>

            </div>
        );
    }
    setUtilities(day, month, year) {
        var utilLog = {
            day: day,
            month: month,
            year: year
        };
        this.setState({ utilities: utilLog });
    }
    setCar(gasDay, gasMonth, gasYear) {
        var gasLog = {
            day: gasDay,
            month: gasMonth,
            year: gasYear
        };
        this.setState({ car: gasLog });
    }
    setPlane(day, month, year) {
        var planeLog = {
            day: day,
            month: month,
            year: year
        };
        this.setState({ plane: planeLog });
    }
    setTrain(day, month, year) {
        var trainLog = {
            day: day,
            month: month,
            year: year
        };
        this.setState({ train: trainLog });
    }
    setSubway(day, month, year) {
        var subwayLog = {
            day: day,
            month: month,
            year: year
        };
        this.setState({ subway: subwayLog });
    }
    setBus(day, month, year) {
        var busLog = {
            day: day,
            month: month,
            year: year
        };
        this.setState({ bus: busLog });
    }
    setFood(foodDay, foodMonth, foodYear) {
        var foodLog = {
            day: foodDay,
            month: foodMonth,
            year: foodYear
        };
        this.setState({ food: foodLog });
    }
}

export default App;
