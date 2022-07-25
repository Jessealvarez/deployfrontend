import React from "react";
import App from "../App";

const HomePage = ({
  clientMessage,
  serverMessage,
  setClientMessage,
  sendReceiveMessage,
}) => {
  return (
    <div>
      <p>{clientMessage}</p>
      <p>{serverMessage}</p>
      <input
        type="text"
        onChange={(e) => {
          const dateTime = new Date();
          const message = `Message: ${
            e.target.value
          } at time ${dateTime.toString()}`;
          setClientMessage(message);
        }}
      />
      <button
        onClick={() => {
          sendReceiveMessage();
        }}
      >
        Send
      </button>
    </div>
  );
};

export default HomePage;
