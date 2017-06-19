import React, { Component } from "react";

class Transportation extends Component {
    constructor(props) {
        super(props);
        this.setGas = this.setGas.bind(this);
        this.setPlane = this.setPlane.bind(this);
        this.setTrain = this.setTrain.bind(this);
        this.setSubway = this.setSubway.bind(this);
        this.setBus = this.setBus.bind(this);
    }
    render() {
        return (
            <div>
                <h2>How much gas do you use a week?</h2>
                <label><input onChange={this.setGas} />/gals</label>
                <h2>How many miles do you use per month with the follow:</h2>
                <label>
                    Plane:<input onChange={this.setPlane} />
                </label>
                <label>
                    Train:<input onChange={this.setTrain} />
                </label>
                <label>
                    Subway:<input onChange={this.setSubway} />
                </label>
                <label>
                    Bus:<input onChange={this.setBus} />
                </label>
            </div>
        );
    }
    setGas(event) {
        var gas = event.target.value / 7;
        var gasDay = gas * 19.64;

        var gasMonth = gasDay * 30;
        var gasYear = gasDay * 365;
        this.props.car(gasDay, gasMonth, gasYear);
    }
    setPlane(event) {
        var planeDay = event.target.value * 0.44;
        var planeMonth = planeDay * 30;
        var planeYear = planeDay * 365;
        this.props.plane(planeDay, planeMonth, planeYear);
    }
    setTrain(event) {
        var trainDay = event.target.value * 0.37;
        var trainMonth = trainDay * 30;
        var trainYear = trainDay * 365;
        this.props.train(trainDay, trainMonth, trainYear);
    }
    setSubway(event) {
        var subwayDay = event.target.value * 0.27;
        var subwayMonth = subwayDay * 30;
        var subwayYear = subwayDay * 365;
        this.props.subway(subwayDay, subwayMonth, subwayYear);
    }
    setBus(event) {
        var busDay = event.target.value * 0.12;
        var busMonth = busDay * 30;
        var busYear = busDay * 365;
        this.props.bus(busDay, busMonth, busYear);
    }
}
export default Transportation;
