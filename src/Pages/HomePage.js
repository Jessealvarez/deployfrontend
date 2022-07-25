import React from "react";
import App from "../App";

const HomePage = ({ clientMessage, serverMessage, setClientMessage }) => {
  return (
    <div>
      <p>{clientMessage}</p>
      <p>{serverMessage}</p>
      <input
        type="text"
        onChange={() => {
          const dateTime = new Date();
          const message = `Message: ${
            e.target.value
          } at time ${dateTime.toString()}`;
          setClientMessage(message);
        }}
      />
      <button
        onClick={() => {
          sendReceiveMessage(message);
        }}
      >
        Send
      </button>
    </div>
  );
};

export default HomePage;
