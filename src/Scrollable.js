import React from "react";

const Scrollable = (props) => {
  return <div className="overflow-y-auto" style={{height: '700px'}}>{props.children}</div>;
};

export default Scrollable;
