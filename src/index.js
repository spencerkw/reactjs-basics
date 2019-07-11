import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";

//root component
class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Header />
          </div>
          <div className="col-xs-10 col-xs-offset-1">
            <Home name={"Max"} age={27} />
          </div>
        </div>
      </div>
    );
  }
}

//renders the base App component in place of the #app div in the HTML
render(<App />, window.document.getElementById("app"));