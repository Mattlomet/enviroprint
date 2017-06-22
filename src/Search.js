import React, { Component } from "react";
import "./Search.css";
import search from "./search.png";
import axios from "axios";
import SearchProfileBar from "./SearchProfileBar";
class Search extends Component {
    constructor() {
        super();
        this.state = {
            searchUser: "",
            searchUtil: [],
            searchBus: [],
            searchCar: [],
            searchFood: [],
            searchPlane: [],
            searchSubway: [],
            searchTrain: []
        };
        this.searchUsername = this.searchUsername.bind(this);
    }
    render() {
        var name = this.state.searchUser;
        return (
            <div className="search-page">
                <div className="search-input-container">
                    <div className="search-header">Find Your Friends</div>
                    <input className="search-input" />
                    <img
                        src={search}
                        className="search-button"
                        alt="seach-button"
                        onClick={this.searchUsername}
                    />
                </div>
                <div className="search-results">
                    <div className="search-results-name">{name}</div>
                    <div className="searchGraph">
                        <SearchProfileBar
                            utilities={this.state.searchUtil}
                            car={this.state.searchCar}
                            plane={this.state.searchPlane}
                            train={this.state.searchTrain}
                            subway={this.state.searchPlane}
                            bus={this.state.searchBus}
                            food={this.state.searchFood}
                        />
                    </div>
                </div>
            </div>
        );
    }
    searchUsername() {
        var usernameValue = document.getElementsByClassName("search-input")[0]
            .value;
        axios
            .get("/trains", {
                params: {
                    username: usernameValue
                }
            })
            .then(
                function(response) {
                    console.log(response.data);
                    this.setState({ searchUser: response.data.user.username });
                    this.setState({
                        searchUtil: response.data.utilities || {}
                    });
                    this.setState({ searchFood: response.data.food || {} });
                    this.setState({ searchBus: response.data.bus || {} });
                    this.setState({ searchCar: response.data.car || {} });
                    this.setState({ searchPlane: response.data.plane || {} });
                    this.setState({ searchTrain: response.data.train || {} });
                    this.setState({ searchSubway: response.data.subway || {} });
                }.bind(this)
            )
            .catch(function(error) {
                alert("There was no user with that profile name");
            });
    }
}

export default Search;
