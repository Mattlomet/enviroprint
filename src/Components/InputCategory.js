import React, { Component } from "react";
import Utilities from "./Utilities";
import Food from "./Food";
import Transportation from "./Transportation";
import "../Stylesheets/InputCategory.css";

class InputCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            question: ""
        };
        this.loadQuestion = this.loadQuestion.bind(this);
    }

    render() {
        var Input;
        if (this.state.question === "Utilities") {
            Input = <Utilities utilities={this.props.utilities} />;
        } else if (this.state.question === "Transportation") {
            Input = (
                <Transportation
                    car={this.props.car}
                    plane={this.props.plane}
                    train={this.props.train}
                    subway={this.props.subway}
                    bus={this.props.bus}
                />
            );
        } else if (this.state.question === "Food") {
            Input = <Food food={this.props.food} />;
        }
        return (
            <div className="InputCategory-div">
                <div className="Sections">
                    <div
                        className="Utilities"
                        onClick={this.loadQuestion}
                        id="1"
                    >
                        Utilities
                    </div>
                    <div
                        className="Transportation"
                        onClick={this.loadQuestion}
                        id="2"
                    >
                        Transportation
                    </div>
                    <div className="Food" onClick={this.loadQuestion} id="3">
                        Food
                    </div>
                </div>
                <div className="Inputs">{Input}</div>
            </div>
        );
    }
    loadQuestion(event) {
        var id = parseInt(event.target.id);
        if (id === 1) {
            this.setState({ question: "Utilities" });
        } else if (id === 2) {
            this.setState({ question: "Transportation" });
        } else if (id === 3) {
            this.setState({ question: "Food" });
        }
    }
}
export default InputCategory;
