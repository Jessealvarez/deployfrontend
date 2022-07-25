import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Router } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import { useState } from "react";

const urlEndpoint = "https://deploybackend123.herokuapp.com/";
function App() {
  const [clientMessage, setClientMessage] = useState("");
  const [serverMessage, setServerMessage] = useState("");

  const sendReceiveMessage = async () => {
    const url = `${urlEndpoint}/post-message`;
    const response = await fetch(url, {
      method: "POST",

      body: JSON.stringify({ clientMessage }),
    });
    const responseJSON = await response.json();
    setServerMessage(responseJSON.serverMessage);
  };
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route
            index
            element={
              <HomePage
                clientMessage={clientMessage}
                setClientMessage={setClientMessage}
                serverMessage={serverMessage}
                sendReceiveMessage={sendReceiveMessage}
              />
            }
          />
        </Routes>
      </header>
    </div>
  );
}

export default App;
