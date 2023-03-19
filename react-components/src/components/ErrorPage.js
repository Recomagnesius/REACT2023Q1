import React, { Component } from 'react';
export class ErrorPage extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", { id: "error-page" },
            React.createElement("h1", null, "Oops!"),
            React.createElement("p", null, "Sorry, an unexpected error has occurred."),
            React.createElement("p", null)));
    }
}
export default ErrorPage;
