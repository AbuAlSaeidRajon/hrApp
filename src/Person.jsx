import React from 'react';
import './Person.css';

const Person = ({ name, title, salary, phone, email, animal }) => {
  return (
    <div className="person">
      <h2>{name}</h2>
      <p>Title: {title}</p>
      <p>Salary: {salary}</p>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
      <p>Favorite Animal: {animal}</p>
    </div>
  );
};

export default Person;