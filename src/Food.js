import React, { Component } from "react";
import "./Food.css";

class Food extends Component {
    constructor(props) {
        super(props);
        this.foodData = this.foodData.bind(this);
    }
    render() {
        return (
            <div className="food-component">
                <div className="food-header">
                    <div className="food-header-text">How do you eat?</div>
                </div>
                <div className="select">
                    <select onChange={this.foodData} className="selectFood">
                        <option value="0.0" />
                        <option value="16.0">
                            Heavy Meat Eater - 100 grams/day
                        </option>
                        <option value="10.3">
                            Light Meat Eater - 50 grams/day
                        </option>
                        <option value="8.7">Fish Eater</option>
                        <option value="8.5">Vegetarian</option>
                        <option value="6.5">Vegan</option>
                    </select>
                </div>
            </div>
        );
    }
    foodData(event) {
        var foodDay = parseInt(event.target.value);
        var foodMonth = event.target.value * 30;
        var foodYear = event.target.value * 365;
        this.props.food(foodDay, foodMonth, foodYear);
    }
}
export default Food;
