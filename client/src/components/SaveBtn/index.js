import React from "react";
import "./style.css";

function SaveBtn(props) {
  return (
    <span>
      <button className="btn btn-success" {...props} role="button" tabIndex="0" style={{ float: "right" }}>
        SAVE
      </button>
    </span>

  );
}

export default SaveBtn;
