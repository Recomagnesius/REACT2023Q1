import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ErrorPage.css';

export class ErrorPage extends Component<object> {
  constructor(props: object) {
    super(props);
  }

  render() {
    return (
      <section className="page_404">
        <div className="container">
          <div className="row ">
            <div className="col-sm-12 align-center">
              <div className="col-sm-10 col-sm-offset-1 align-center text-center">
                <div className="four_zero_four_bg">
                  <h1 className="text-center align-center">404</h1>
                </div>

                <div className="contant_box_404 align-center">
                  <h3 className="h2">Look like you&apos;re lost</h3>

                  <p>the page you are looking for not avaible!</p>

                  <Link to={`/`}>
                    <a href="" className="link_404">
                      Go to Home
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ErrorPage;
