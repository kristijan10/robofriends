import React from "react";

const Scroll = ({ children }) => {
  return (
    <div style={{ overflowY: "scroll", height: "500px", border: "2px solid" }}>
      {children}
    </div>
  );
};

export default Scroll;
