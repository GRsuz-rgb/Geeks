import React, { Component } from 'react';

class Child extends Component {
  componentWillUnmount() {
    alert("The component named Header is about to be unmounted.");
  }

  render() {
    return <h1>Hello World!</h1>;
  }
}

class LifecycleUnmount extends Component {
  constructor(props) {
    super(props);
    this.state = { show: true };
  }

  deleteHeader = () => {
    this.setState({ show: false });
  }

  render() {
    let header;
    if (this.state.show) {
      header = <Child />;
    }
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        {header}
        <button onClick={this.deleteHeader}>Delete Header</button>
      </div>
    );
  }
}

export default LifecycleUnmount;
