import React from "react";

function FormComponent(props) {
  const { data, handleChange, handleSubmit } = props;

  return (
    <form onSubmit={handleSubmit} style={{ padding: "20px", backgroundColor: "#ddb982" }}>
      
      <input
        type="text"
        name="firstName"
        value={data.firstName}
        placeholder="First Name"
        onChange={handleChange}
      /><br /><br />
      
      <input
        type="text"
        name="lastName"
        value={data.lastName}
        placeholder="Last Name"
        onChange={handleChange}
      /><br /><br />

      <input
        type="number"
        name="age"
        value={data.age}
        placeholder="Age"
        onChange={handleChange}
      /><br /><br />

      <label>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={data.gender === "male"}
          onChange={handleChange}
        /> Male
      </label>
      <br />
      <label>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={data.gender === "female"}
          onChange={handleChange}
        /> Female
      </label>
      <br /><br />

      <label>Select your destination</label><br />
      <select name="destination" value={data.destination} onChange={handleChange}>
        <option value="">-- Please Choose a destination --</option>
        <option value="Japan">Japan</option>
        <option value="Brazil">Brazil</option>
        <option value="France">France</option>
        <option value="Morocco">Morocco</option>
      </select>
      <br /><br />

      <h4>Dietary restrictions:</h4>
      <label>
        <input
          type="checkbox"
          name="nutsFree"
          checked={data.nutsFree}
          onChange={handleChange}
        /> Nuts free
      </label><br />
      <label>
        <input
          type="checkbox"
          name="lactoseFree"
          checked={data.lactoseFree}
          onChange={handleChange}
        /> Lactose free
      </label><br />
      <label>
        <input
          type="checkbox"
          name="vegan"
          checked={data.vegan}
          onChange={handleChange}
        /> Vegan
      </label><br /><br />

      <button type="submit">Submit</button>

      {/* Display the entered information */}
      <div style={{ marginTop: "30px", backgroundColor: "#104F51", color: "white", padding: "20px" }}>
        <h2>Entered information:</h2>
        <p>Your name: {data.firstName} {data.lastName}</p>
        <p>Your age: {data.age}</p>
        <p>Your gender: {data.gender}</p>
        <p>Your destination: {data.destination}</p>
        <p>Your dietary restrictions:</p>
        <p>**Nuts free: {data.nutsFree ? "Yes" : "No"}</p>
        <p>**Lactose free: {data.lactoseFree ? "Yes" : "No"}</p>
        <p>**Vegan meal: {data.vegan ? "Yes" : "No"}</p>
      </div>
    </form>
  );
}

export default FormComponent;

