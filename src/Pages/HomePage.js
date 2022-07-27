import React from "react";
// import App from "../App";

const HomePage = ({
  clientMessage,
  serverMessage,
  setClientMessage,
  sendReceiveMessage,
  userList,
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
      {userList.map((user, idx) => (
        <div className="users" key={idx}>
          <strong>{user.id}</strong>
          <p>{user.firstName}</p>
          <p>{user.lastName}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default HomePage;
