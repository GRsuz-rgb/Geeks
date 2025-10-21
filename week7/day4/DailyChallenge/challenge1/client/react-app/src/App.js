import React, { Component } from 'react';

class App extends Component {
  state = {
    getMessage: '',
    postMessage: '',
    inputValue: ''
  };

  async componentDidMount() {
    const response = await fetch('/api/hello');
    const data = await response.json();
    this.setState({ getMessage: data.message });
  }

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.inputValue }),
    });
    const data = await response.json();
    this.setState({ postMessage: data.message });
  };

  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>{this.state.getMessage}</h1>

        <h2>Post to Server:</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handleChange}
            placeholder="Type something"
          />
          <button type="submit">Submit</button>
        </form>

        <p>{this.state.postMessage}</p>
      </div>
    );
  }
}

export default App;
