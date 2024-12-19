import React from "react";
import "./FileUploader.css";

const FileUploader = ({ id }) => {
  return <input type="file" id={id} name={id} />;
};

export default FileUploader;
