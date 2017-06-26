import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
class BarGraph extends Component {
    render() {
        var utilitiesYearly = this.props.utilities.year;
        var carYearly = this.props.car.year;
        var planeYearly = this.props.plane.year;
        var trainYearly = this.props.train.year;
        var subwayYearly = this.props.subway.year;
        var busYearly = this.props.bus.year;
        var foodYearly = this.props.food.year;
        var chartData = {
            labels: [
                "Utilities",
                "Car",
                "Plane",
                "Train",
                "Subway",
                "Bus",
                "Food"
            ],
            datasets: [
                {
                    label: "Co2 in Pounds",
                    data: [
                        utilitiesYearly,
                        carYearly,
                        planeYearly,
                        trainYearly,
                        subwayYearly,
                        busYearly,
                        foodYearly
                    ],
                    backgroundColor: [
                        "rgba(255, 99, 132, 0.2)",
                        "rgba(54, 162, 235, 0.2)",
                        "rgba(255, 206, 86, 0.2)",
                        "rgba(75, 192, 192, 0.2)",
                        "rgba(153, 102, 255, 0.2)",
                        "rgba(255, 159, 64, 0.2)",
                        "rgba(255, 0, 132, 0.2)"
                    ],
                    borderColor: [
                        "rgba(255,99,132,1)",
                        "rgba(54, 162, 235, 1)",
                        "rgba(255, 206, 86, 1)",
                        "rgba(75, 192, 192, 1)",
                        "rgba(153, 102, 255, 1)",
                        "rgba(255, 159, 64, 1)",
                        "rgba(255, 0, 132, 1)"
                    ],
                    borderWidth: 1
                }
            ]
        };
        var chartOptions = {
            scales: { yAxes: [{ ticks: { beginAtZero: true } }] }
        };
        return <Bar data={chartData} options={chartOptions} />;
    }
}
export default BarGraph;
