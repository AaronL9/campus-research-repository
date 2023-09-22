import React from 'react'
import CreateButton from './CreateButton'

export default function Profile() {
  return (
    <div className="profile">
      <div className="container">
        <img src="/svg/profile.svg" alt="Profile" />
        <span>Aaron</span>
        <p className="email">aaron.lomibao09@gmail.com</p>
      </div>
      <div className="line"></div>
      <CreateButton />
    </div>
  );
}
