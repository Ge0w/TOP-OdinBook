import React, { useState, useContext } from "react";
import { GlobalContext } from "../../context/GlobalState";

export const NewMessage = () => {
  const [message, setMessage] = useState("");
  const { addMessage } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();

    const newMessage = {
      message,
    };

    addMessage(newMessage);
  };

  return (
    <div className="container mt-4">
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="newMessage" className="form-label">
            Watcha thinkin?
          </label>
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="form-control"
            id="newMessage"
          ></input>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};
