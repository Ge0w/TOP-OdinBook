import React from "react";

export const Message = ({ message }) => {
  return (
    <div key={message.id} className="card mt-2">
      <div className="card-body">
        <h5 className="card-title">{message.user}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{message.message}</h6>
      </div>
    </div>
  );
};
