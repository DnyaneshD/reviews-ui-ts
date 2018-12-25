import * as React from "react";
import { Component } from "react";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
