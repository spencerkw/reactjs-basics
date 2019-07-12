import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";

//root component
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      homeLink: "Home",
      homeMounted: true
    };
  }

  onGreet() {
    alert("Hello!");
  }

  onChangeLinkName(newName) {
    this.setState({
      homeLink: newName
    });
  }

  onChangeHomeMounted() {
    this.setState({
      homeMounted: !this.state.homeMounted
    });
  }

  render() {
    let homeComponent;
    if (this.state.homeMounted) {
      homeComponent = <Home
        name={"Max"}
        initialAge={27}
        greet={this.onGreet}
        changeLink={(newName) => this.onChangeLinkName(newName)}
        initialLinkName={this.state.homeLink}
      />;
    }

    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Header homeLink={this.state.homeLink} />
          </div>
          <div className="col-xs-10 col-xs-offset-1">
            {homeComponent}
          </div>
          <div className="col-xs-10 col-xs-offset-1">
            <button onClick={() => this.onChangeHomeMounted()} className="btn btn-primary">(Un)Mount Home Component</button>
          </div>
        </div>
      </div>
    );
  }
}

//renders the base App component in place of the #app div in the HTML
render(<App />, window.document.getElementById("app"));