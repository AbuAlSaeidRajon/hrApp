import React from 'react';
import './Box.css';

const Box = ({ name, title, salary, phone, email, animal }) => {
  return (
    <div className="box">
      <h2>{name}</h2>
      <p>Title: {title}</p>
      <p>Salary: {salary}</p>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
      <p>Favorite Animal: {animal}</p>
    </div>
  );
};

export default Box;