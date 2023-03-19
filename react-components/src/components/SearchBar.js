import React, { Component } from 'react';
import './SearchBar.css';
// eslint-disable-next-line @typescript-eslint/ban-types
export class SearchBar extends Component {
    constructor(props) {
        super(props);
        console.log(this?.state?.searchValue + ' constr');
        this.state = {
            searchValue: localStorage.getItem('searchValue') || '',
        };
        console.log(this?.state?.searchValue + ' constr');
        this.updateSearchValue = this.updateSearchValue.bind(this);
    }
    componentDidMount() {
        let val;
        if (localStorage.getItem('searchValue') == null)
            val = '';
        else {
            val = localStorage.getItem('searchValue');
        }
        this.setState({
            searchValue: localStorage.getItem('searchValue'),
        });
        console.log(this.state.searchValue + ' mount');
    }
    componentWillUnmount() {
        localStorage.setItem('searchValue', this.state.searchValue);
        console.log(this.state.searchValue + ' unmount');
    }
    updateSearchValue(evt) {
        const val = evt.target.value;
        this.setState({
            searchValue: val,
        });
        localStorage.setItem('searchValue', this.state.searchValue);
        console.log(this.state.searchValue + ' update');
    }
    render() {
        return (React.createElement("div", { className: "search-bar" },
            React.createElement("input", { value: this.state.searchValue, onChange: this.updateSearchValue, id: "search", type: "text", className: "search-bar__input", placeholder: "Type your request here" }),
            React.createElement("button", { type: "submit", className: "search-bar__btn" },
                React.createElement("i", { className: "gg-search " }))));
    }
}
export default SearchBar;
