import React, { Component } from "react";
import Profile from "./Profile";
import SignIn from "./SignIn";
import InputCategory from "./InputCategory";
import BarGraph from "./BarGraph";
import DoughnutGraph from "./DoughnutGraph";
import LineGraph from "./LineGraph";
import Search from "./Search";
import "./App.css";
import tree from "./tree-logos.png";
import home from "./house.png";
import account from "./account.png";
import save from "./save-icon.png";
import search from "./search.png";

class App extends Component {
    constructor() {
        super();
        this.state = {
            LogIn: false,
            user_id: 0,
            page: "",
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
        this.setLogIn = this.setLogIn.bind(this);
        this.switchPageHome = this.switchPageHome.bind(this);
        this.switchPageProfile = this.switchPageProfile.bind(this);
        this.switchPageSearch = this.switchPageSearch.bind(this);
        this.saveMenu = this.saveMenu.bind(this);
    }
    render() {
        if (this.state.LogIn === false) {
            return (
                <div className="sign-in-component">
                    <h1 className="app-header-sign-in">
                        Carbon Print
                    </h1>
                    <SignIn logInFunction={this.setLogIn} />
                </div>
            );
        } else if (this.state.page === "") {
            return (
                <div className="app-compenent">
                    <div className="top-bar">
                        <img className="tree-image" src={tree} alt="tree" />
                        <h1 className="app-header">Carbon Print</h1>
                        <div className="Nav-bar">
                            <ul className="unordered-list">
                                <li
                                    className="listitem"
                                    onClick={this.switchPageProfile}
                                >
                                    <img
                                        className="account-image"
                                        src={account}
                                        alt="account"
                                    />
                                </li>
                                <li
                                    className="listitem"
                                    onClick={this.switchPageHome}
                                >
                                    <img
                                        className="home-image"
                                        src={home}
                                        alt="home"
                                    />
                                </li>
                                <li
                                    className="listitem"
                                    onClick={this.switchPageSearch}
                                >
                                    <img
                                        className="search-image"
                                        src={search}
                                        alt="search"
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="input-component">
                        <h2 className="pick-an-input">Please pick one</h2>
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
        } else if (this.state.page === "profile") {
            return (
                <div className="profile-container">
                    <div className="top-bar">
                        <img className="tree-image" src={tree} alt="tree" />
                        <h1 className="app-header">Carbon Print</h1>
                        <div className="Nav-bar">
                            <ul className="unordered-list">
                                <li
                                    className="listitem"
                                    onClick={this.switchPageProfile}
                                >
                                    <img
                                        className="account-image"
                                        src={account}
                                        alt="account"
                                    />
                                </li>
                                <li
                                    className="listitem"
                                    onClick={this.switchPageHome}
                                >
                                    <img
                                        className="home-image"
                                        src={home}
                                        alt="home"
                                    />
                                </li>
                                <li className="listitem">
                                    <img
                                        className="save-image"
                                        src={save}
                                        alt="save"
                                        onClick={this.saveMenu}
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="profile-component">
                        <Profile
                            userid={this.state.user_id}
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
            );
        } else if (this.state.page === "search") {
            return (
                <div className="search-container">
                    <div className="top-bar">
                        <img className="tree-image" src={tree} alt="tree" />
                        <h1 className="app-header">Carbon Print</h1>
                        <div className="Nav-bar">
                            <ul className="unordered-list">
                                <li
                                    className="listitem"
                                    onClick={this.switchPageProfile}
                                >
                                    <img
                                        className="account-image"
                                        src={account}
                                        alt="account"
                                    />
                                </li>
                                <li
                                    className="listitem"
                                    onClick={this.switchPageHome}
                                >
                                    <img
                                        className="home-image"
                                        src={home}
                                        alt="home"
                                    />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="search-component">
                        <Search />
                    </div>
                </div>
            );
        }
    }
    saveMenu() {
        var sideBar = document.getElementsByClassName("username-header-bar")[0];
        sideBar.style.display = "Block";
    }
    switchPageHome() {
        this.setState({ page: "" });
    }
    switchPageProfile() {
        this.setState({ page: "profile" });
    }
    switchPageSearch() {
        this.setState({ page: "search" });
    }
    setLogIn(passedLogin, userid) {
        this.setState({ LogIn: passedLogin });
        this.setState({ user_id: userid });
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
