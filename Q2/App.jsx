
import { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);

    this.state = {
      time: new Date(),
    };

    this.timer = null;
    console.log("Clock: constructor");
  }

  componentDidMount() {
    console.log("Clock: componentDidMount");

    this.timer = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }

  componentDidUpdate() {
    console.log("Clock: componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("Clock: componentWillUnmount");
    clearInterval(this.timer);
  }

  render() {
    return (
      <div>
        <h2>Digital Clock</h2>
        <h1>{this.state.time.toLocaleTimeString()}</h1>
      </div>
    );
  }
}

export default Clock;
