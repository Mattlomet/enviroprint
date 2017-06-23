import React, { Component } from "react";
import { Line } from "react-chartjs-2";
class LineGraph extends Component {
    render() {
        var utilitiesYearly = this.props.utilities.year || 0;
        var carYearly = this.props.car.year || 0;
        var planeYearly = this.props.plane.year || 0;
        var trainYearly = this.props.train.year || 0;
        var subwayYearly = this.props.subway.year || 0;
        var busYearly = this.props.bus.year || 0;
        var foodYearly = this.props.food.year || 0;

        var total =
            utilitiesYearly +
            carYearly +
            planeYearly +
            trainYearly +
            subwayYearly +
            busYearly +
            foodYearly;
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

        var americanTotal = 36155.81;
        var americanMonth = americanTotal / 12;
        var americanJan = americanMonth * 1;
        var americanFeb = americanMonth * 2;
        var americanMarch = americanMonth * 3;
        var americanApril = americanMonth * 4;
        var americanMay = americanMonth * 5;
        var americanJune = americanMonth * 6;
        var americanJuly = americanMonth * 7;
        var americanAugust = americanMonth * 8;
        var americanSeptember = americanMonth * 9;
        var americanOctober = americanMonth * 10;
        var americanNovember = americanMonth * 11;
        var americanDecember = americanMonth * 12;

        var swedenTotal = 10141.3;
        var swedenMonth = swedenTotal / 12;
        var swedenJan = swedenMonth * 1;
        var swedenFeb = swedenMonth * 2;
        var swedenMarch = swedenMonth * 3;
        var swedenApril = swedenMonth * 4;
        var swedenMay = swedenMonth * 5;
        var swedenJune = swedenMonth * 6;
        var swedenJuly = swedenMonth * 7;
        var swedenAugust = swedenMonth * 8;
        var swedenSeptember = swedenMonth * 9;
        var swedenOctober = swedenMonth * 10;
        var swedenNovember = swedenMonth * 11;
        var swedenDecember = swedenMonth * 12;

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
                    label: "Your Co2 Emission",
                    backgroundColor: ["rgba(0, 247, 255, 0.75)"],
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
                },
                {
                    label: "American Average",
                    backgroundColor: ["rgba(255, 0, 0, 0.2)"],
                    data: [
                        americanJan,
                        americanFeb,
                        americanMarch,
                        americanApril,
                        americanMay,
                        americanJune,
                        americanJuly,
                        americanAugust,
                        americanSeptember,
                        americanOctober,
                        americanNovember,
                        americanDecember
                    ]
                },
                {
                    label: "Swedish Average",
                    backgroundColor: ["rgba(0, 10, 255, 0.64)"],
                    data: [
                        swedenJan,
                        swedenFeb,
                        swedenMarch,
                        swedenApril,
                        swedenMay,
                        swedenJune,
                        swedenJuly,
                        swedenAugust,
                        swedenSeptember,
                        swedenOctober,
                        swedenNovember,
                        swedenDecember
                    ]
                }
            ]
        };
        return <Line data={chartData} />;
    }
}
export default LineGraph;
