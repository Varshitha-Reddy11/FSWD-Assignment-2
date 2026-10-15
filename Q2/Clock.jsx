
import { Component } from "react";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = { time: new Date() };
    this.timer = null;
    console.log("Clock: constructor called");
  }

  componentDidMount() {
    console.log("Clock: componentDidMount - Clock mounted");

    this.timer = setInterval(() => {
      this.setState({ time: new Date() });
    }, 1000);
  }

  componentDidUpdate() {
    console.log("Clock: componentDidUpdate - Clock updated");
  }

  componentWillUnmount() {
    console.log("Clock: componentWillUnmount - Clock removed");
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
