import React from "react";

function App() {
  const webhookURL = "https://webhook.site/#!/view/14a39af2-4635-4ec7-886d-8738cdf1ea3f";

  // Fonction async pour envoyer les données JSON
  const sendData = async () => {
    try {
      const response = await fetch(webhookURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          key1: "myusername",
          email: "mymail@gmail.com",
          name: "Isaac",
          lastname: "Doe",
          age: 27
        })
      });

      console.log("Response from server:", response);
    } catch (error) {
      console.error("Error while sending data:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-2xl font-bold mb-5">POST JSON Data</h1>
      <button
        onClick={sendData}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-800 transition"
      >
        Press me to post some data
      </button>
    </div>
  );
}

export default App;
