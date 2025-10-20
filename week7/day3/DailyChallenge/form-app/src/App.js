import React from "react";
import FormComponent from "./FormComponent";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",
      nutsFree: false,
      lactoseFree: false,
      vegan: false
    };
  }

  handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    this.setState({
      [name]: type === "checkbox" ? checked : value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload
    const params = new URLSearchParams(this.state).toString();
    window.location.href = `/?${params}`;
  };

  render() {
    return (
      <div>
        <h1>Sample form</h1>
        <FormComponent
          data={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;
