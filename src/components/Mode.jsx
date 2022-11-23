import React from "react";

const Mode = ({ mode }) => {
  return (
    <div>
      {mode === "work" ? (
        <h2 className="text">Working time!</h2>
      ) : (
        <h2 className="text">You're on Break!</h2>
      )}
    </div>
  );
};

export default Mode;
