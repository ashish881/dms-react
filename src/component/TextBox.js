import React from "react";
import { TextField } from "@mui/material";

const TextBox = ({
  value,
  label,
  name,
  placeholder,
  type,
  onChange,
  error,
  disabled,
}) => (
  <div className="form-group">
    {/* {label && <label htmlFor="input-field">{label}</label>} */}

    <TextField
      error={error ? error : ""}
      disabled={disabled}
      id="outlined-basic"
      label={label}
      fullWidth={true}
      variant="outlined"
      type={type}
      value={value}
      name={name}
      className="form-control"
      placeholder={placeholder}
      onChange={onChange}
    />
  </div>
);

export default TextBox;
