import React, { Component } from "react";
import { Line } from "react-chartjs-2";
class LineGraph extends Component {
    render() {
        var utilitiesYearly = this.props.utilities.year;
        var carYearly = this.props.car.year;
        var planeYearly = this.props.plane.year;
        var trainYearly = this.props.train.year;
        var subwayYearly = this.props.subway.year;
        var busYearly = this.props.bus.year;
        var foodYearly = this.props.food.year;

        var total =
            utilitiesYearly ||
            0 + carYearly ||
            0 + planeYearly ||
            0 + trainYearly ||
            0 + subwayYearly ||
            0 + busYearly ||
            0 + foodYearly ||
            0;
        var month = total / 12;
        var jan = month * 1;
        var feb = month * 2;
        var march = month * 3;
        var april = month * 4;
        var may = month * 5;
        var june = month * 6;
        var july = month * 7;
        var august = month * 8;
        var september = month * 9;
        var october = month * 10;
        var november = month * 11;
        var december = month * 12;
        var chartData = {
            labels: [
                "Jan",
                "Feb",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"
            ],
            datasets: [
                {
                    label: "Co2",
                    backgroundColor: [
                        "rgba(255, 99, 132, 0.2)",
                        "rgba(44, 99, 132, 0.2)"
                    ],
                    data: [
                        jan,
                        feb,
                        march,
                        april,
                        may,
                        june,
                        july,
                        august,
                        september,
                        october,
                        november,
                        december
                    ]
                }
            ]
        };
        return <Line data={chartData} />;
    }
}
export default LineGraph;
