import React from "react";
import Navbar from "./Navbar";

class Wrapper extends React.Component {

  componentDidMount() {
    window.externalJS.wrapperNavbar();
  }

  render() {
    return (
      <>
        <header>
          <Navbar />
        </header>
        <main className="mt-5">
          {this.props.children}
        </main>
      </>
    )
  }
}

export default Wrapper;