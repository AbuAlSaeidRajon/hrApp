import React from "react";

const PersonCard = ({ employee }) => {
  const { id, name, title, salary, phone, email, animal, startDate, location, department, skills } = employee;

  // Calculate years of service
  const yearsOfService = new Date().getFullYear() - new Date(startDate).getFullYear();

  // Conditional reminders
  let reminder = "";
  if (yearsOfService % 5 === 0 && yearsOfService > 0) {
    reminder = "🎉 Schedule recognition meeting.";
  } else if (yearsOfService < 0.5) {
    reminder = "🔔 Schedule probation review.";
  }

  // Map animals to emojis
  const animalToEmoji = {
    Owl: "🦉",
    Dog: "🐕",
    Cat: "🐈",
    // Add more animals as needed
  };

  return (
    <div className="person-card">
      <h2>{name}</h2>
      <p>Title: {title}</p>
      <p>Department: {department}</p>
      <p>Location: {location}</p>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
      <p>Salary: ${salary}</p>
      <p>Favorite Animal: {animalToEmoji[animal] || animal}</p>
      <p>Years of Service: {yearsOfService} years</p>
      {reminder && <p>{reminder}</p>}
      <p>Skills: {skills.join(", ")}</p>
    </div>
  );
};

export default PersonCard;