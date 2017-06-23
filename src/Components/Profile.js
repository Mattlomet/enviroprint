import React, { Component } from "react";
import axios from "axios";
import ProfileBarGraph from "./ProfileBarGraph";
import ProfilePieGraph from "./ProfilePieGraph";
import "../Stylesheets/Profile.css";

class Profile extends Component {
    constructor() {
        super();
        this.state = {
            username: "",
            utilities: [],
            car: [],
            plane: [],
            train: [],
            subway: [],
            bus: [],
            food: []
        };
        this.saveData = this.saveData.bind(this);
        this.runMount = this.runMount.bind(this);
        this.hideSaveMenu = this.hideSaveMenu.bind(this);
    }
    render() {
        var userName = this.state.username;
        return (
            <div className="profile">
                <div className="margin-top">

                    <div
                        className="username-header-bar"
                        onMouseLeave={this.hideSaveMenu}
                    >
                        <div>
                            <h3 className="save-your-data">
                                Save Your Data From The Day
                            </h3>
                            <div
                                className="buttonprofile"
                                onClick={this.saveData}
                            >
                                save
                            </div>
                        </div>
                    </div>
                    <h2 className="username-header">@{userName}'s Page</h2>
                    <div className="profile-graphs">
                        <div className="profile-bar-graph-over">
                            <h4>Saved Data</h4>
                            <div className="profile-bar-graph">
                                <ProfileBarGraph
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
                        <div className="profile-bar-graph-over">
                            <h4>Current Data</h4>
                            <div className="profile-bar-graph">
                                <ProfileBarGraph
                                    utilities={this.props.utilities}
                                    car={this.props.car}
                                    plane={this.props.plane}
                                    train={this.props.train}
                                    subway={this.props.subway}
                                    bus={this.props.bus}
                                    food={this.props.food}
                                />
                            </div>
                        </div>
                        <div className="profile-pie-graph">
                            <ProfilePieGraph
                                utilities={this.state.utilities}
                                car={this.state.car}
                                plane={this.state.plane}
                                train={this.state.train}
                                subway={this.state.subway}
                                bus={this.state.bus}
                                food={this.state.food}
                            />
                            <h4>Saved Data</h4>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
    hideSaveMenu() {
        var sideBar = document.getElementsByClassName("username-header-bar")[0];
        sideBar.style.display = "none";
    }
    runMount() {
        this.componentWillMount();
    }
    componentWillMount() {
        var userid = this.props.userid;
        axios
            .get("/utilities/show", {
                params: {
                    user_id: userid
                }
            })
            .then(
                function(response) {
                    this.setState({ utilities: response.data.utilities || {} });
                    this.setState({ car: response.data.car || {} });
                    this.setState({ bus: response.data.bus || {} });
                    this.setState({ plane: response.data.plane || {} });
                    this.setState({ subway: response.data.subway || {} });
                    this.setState({ food: response.data.food || {} });
                    this.setState({ train: response.data.train || {} });
                }.bind(this)
            );
    }
    saveData() {
        var doctor = this;
        var userid = this.props.userid;
        var utilDay = this.props.utilities.day || 0;
        var utilMonth = this.props.utilities.month || 0;
        var utilYear = this.props.utilities.year || 0;
        var carDay = this.props.car.day || 0;
        var carMonth = this.props.car.month || 0;
        var carYear = this.props.car.year || 0;
        var planeDay = this.props.plane.day || 0;
        var planeMonth = this.props.plane.month || 0;
        var planeYear = this.props.plane.year || 0;
        var trainDay = this.props.train.day || 0;
        var trainMonth = this.props.train.month || 0;
        var trainYear = this.props.train.year || 0;
        var subDay = this.props.subway.day || 0;
        var subMonth = this.props.subway.month || 0;
        var subYear = this.props.subway.year || 0;
        var busDay = this.props.bus.day || 0;
        var busMonth = this.props.bus.month || 0;
        var busYear = this.props.bus.year || 0;
        var foodDay = this.props.food.day || 0;
        var foodMonth = this.props.food.month || 0;
        var foodYear = this.props.food.year || 0;
        axios
            .post("/utilities", {
                data: {
                    day: utilDay,
                    month: utilMonth,
                    year: utilYear,
                    user_id: userid
                }
            })
            .then(function(response) {
                console.log(response);
                axios
                    .post("/cars", {
                        data: {
                            day: carDay,
                            month: carMonth,
                            year: carYear,
                            user_id: userid
                        }
                    })
                    .then(function(response) {
                        console.log(response);
                        axios
                            .post("/planes", {
                                data: {
                                    day: planeDay,
                                    month: planeMonth,
                                    year: planeYear,
                                    user_id: userid
                                }
                            })
                            .then(function(response) {
                                console.log(response);
                                axios
                                    .post("/trains", {
                                        data: {
                                            day: trainDay,
                                            month: trainMonth,
                                            year: trainYear,
                                            user_id: userid
                                        }
                                    })
                                    .then(function(response) {
                                        console.log(response);
                                        axios
                                            .post("/subways", {
                                                data: {
                                                    day: subDay,
                                                    month: subMonth,
                                                    year: subYear,
                                                    user_id: userid
                                                }
                                            })
                                            .then(function(response) {
                                                console.log(response);
                                                axios
                                                    .post("/buses", {
                                                        data: {
                                                            day: busDay,
                                                            month: busMonth,
                                                            year: busYear,
                                                            user_id: userid
                                                        }
                                                    })
                                                    .then(function(response) {
                                                        console.log(response);
                                                        axios
                                                            .post("/foods", {
                                                                data: {
                                                                    day: foodDay,
                                                                    month: foodMonth,
                                                                    year: foodYear,
                                                                    user_id: userid
                                                                }
                                                            })
                                                            .then(function(
                                                                response
                                                            ) {
                                                                console.log(
                                                                    response
                                                                );
                                                                doctor.runMount();
                                                            });
                                                    });
                                            });
                                    });
                            });
                    });
            });
    }
    componentDidMount() {
        var userid = this.props.userid;
        axios
            .get("/users/show", {
                params: {
                    user_id: userid
                }
            })
            .then(
                function(response) {
                    this.setState({ username: response.data });
                }.bind(this)
            );
    }
}
export default Profile;
