import React from 'react'

export default function SigninField({type}) {
  const label = type.charAt(0).toUpperCase() + type.slice(1)
  return (
    <div className="login-form__field">
      <input type={type} required />
      <span></span>
      <label>{label}</label>
    </div>
  );
}
