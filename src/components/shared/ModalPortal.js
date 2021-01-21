import React from "react";
import ReactDOM from "react-dom";

const container = document.getElementById("x-modal");

class ModalPortal extends React.Component {
  constructor(props) {
    super(props);
    this.div = document.createElement('div');
  }

  componentDidMount() {
    container.appendChild(this.div);
  }

  componentWillUnmount() {
    container.removeChild(this.div);
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.div
    );
  }
}

export default ModalPortal;