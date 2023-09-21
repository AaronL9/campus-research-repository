import React from 'react'

export default function RegisterField() {
  return (
    <input
      type="text"
      name="name"
      placeholder="Name"
      required
      onChange={(e) => setName(e.target.value)}
      value={name}
    />
  );
}
