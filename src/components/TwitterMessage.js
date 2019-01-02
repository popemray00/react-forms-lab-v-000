import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {value: ''};
  }

  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  }

  charCounter = () => {
    const count = this.props.maxChars
  }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.handleChange}  />
      </div>
    );
  }
}

export default TwitterMessage;
