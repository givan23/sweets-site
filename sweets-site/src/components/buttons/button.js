import React from "react";
import "./button.css";

export const ButtonComponent = ({label = ""}) => {
  return <button className="button">{label}</button>;
};
