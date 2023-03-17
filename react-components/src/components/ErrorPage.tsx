import React, { Component } from 'react'
import { useRouteError } from "react-router-dom";

export class ErrorPage extends Component<{}> {
  
  constructor(props:any) {
    super(props);
  }

  render() {
      return (
        <div id="error-page">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
        </p>
      </div>
      )
  }
}

export default ErrorPage
