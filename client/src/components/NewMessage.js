import React from "react";

export const NewMessage = () => {
  return (
    <div className="container">
      <form>
        <div className="mb-3">
          <label htmlFor="newMessage" className="form-label">
            Watcha thinkin?
          </label>
          <input type="text" className="form-control" id="newMessage"></input>
        </div>
      </form>
    </div>
  );
};
