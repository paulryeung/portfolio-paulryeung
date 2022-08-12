import React, { Component } from "react";
import CardTile from "../../Components/CardTile/CardTile";

class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <h1>Welcome to Paul Yeung's Portfolio!</h1>
        <h3>Please make yourself at home and explore!</h3>

        <CardTile />
      </div>
    );
  }
}

export default HomePage;
