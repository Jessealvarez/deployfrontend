import React, { useState, useEffect } from "react";

const PostUser = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <h1>Post User</h1>
      <input type="text" onChange={(event) => setFirstName(event.target.value)}>
        {firstName}
      </input>
      <input type="text" onChange={(event) => setLastName(event.target.value)}>
        {lastName}
      </input>
      <input type="text" onChange={(event) => setEmail(event.target.value)}>
        {email}
      </input>

      <button
        onClick={() => {
          props.postUserData({
            firstName,
            lastName,
            email,
          });
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default PostUser;
