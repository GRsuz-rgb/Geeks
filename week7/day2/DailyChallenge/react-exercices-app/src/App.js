import React, { useState } from "react";

function App() {
  // Step 1: Create state with languages and votes
  const [languages, setLanguages] = useState([
    { name: "Php" , votes: 0 },
    { name: "Python" , votes: 0 },
    { name: "JavaScript" , votes: 0 },
    { name: "Java" , votes: 0 },
  ]);

  // Step 2: Function to handle voting
  const handleVote = (index) => {
    // Create a copy of the array
    const updatedLanguages = [...languages];
    // Increment votes for the chosen language
    updatedLanguages[index].votes += 1;
    // Update the state
    setLanguages(updatedLanguages);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Vote Your Language!</h1>
      {languages.map((language, index) => (
        <div key={index} style={{ margin: "10px" }}>
          <span style={{ marginRight: "10px" }}>
            {language.votes}   {language.name}
          </span>
          <button onClick={() => handleVote(index)}>Click Here</button>
        </div>
      ))}
    </div>
  );
}

export default App;
