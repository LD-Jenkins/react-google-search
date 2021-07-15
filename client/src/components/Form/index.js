import React from "react";


// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <input className="form-control" {...props} />
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="20" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button type="button" className="btn btn-secondary" style={{float: "right"}} {...props}>
      {props.children}
    </button>
  );
}
