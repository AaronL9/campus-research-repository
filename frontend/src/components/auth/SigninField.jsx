import React from "react";

export default function SigninField({ type, currentState, setState }) {
  const label = type.charAt(0).toUpperCase() + type.slice(1);

  return (
    <div className="login-form__field">
      <input
        id={type}
        type={type}
        name={type}
        autoComplete="true"
        required
        value={currentState}
        onChange={(e) => {
          setState(e.target.value);
        }}
      />
      <span></span>
      <label htmlFor={type}>{label}</label>
    </div>
  );
}
