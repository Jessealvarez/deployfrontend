import React, { useState } from "react";

const PostUser = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div>
      <h1>Post User</h1>
      <input
        type="text"
        placeholder="First Name"
        onChange={(event) => setFirstName(event.target.value)}
      />
      {/* {firstName}
      </input> */}

      <input
        type="text"
        placeholder="Last Name"
        onChange={(event) => setLastName(event.target.value)}
      />
      {/* {lastName}
      </input> */}

      <input
        type="text"
        placeholder="Email"
        onChange={(event) => setEmail(event.target.value)}
      />
      {/* {email}
      </input> */}

      <button
        onClick={() => {
          props.postUserData({
            firstName,
            lastName,
            email,
          });
          console.log("firstname" + firstName);
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default PostUser;
