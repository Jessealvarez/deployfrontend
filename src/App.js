import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Router } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import { useState } from "react";
import PostUser from "./Pages/PostUser";

const urlEndpoint = process.env.REACT_APP_URL_ENDPOINT;
function App() {
  const [clientMessage, setClientMessage] = useState("");
  const [serverMessage, setServerMessage] = useState("");

  const sendReceiveMessage = async () => {
    const url = `${urlEndpoint}/post-message`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ clientMessage }),
    });
    const responseJSON = await response.json();
    setServerMessage(responseJSON.serverMessage);
  };

  const postUserData = async (userData) => {
    const url = `${urlEndpoint}/post-user`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userData }),
    });
    const responseJSON = await response.json();
    setServerMessage(responseJSON.serverMessage);
  }

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
          <Route
            path='/post-user'
            element={<PostUser postUserData={postUserData} />}
          ></Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
