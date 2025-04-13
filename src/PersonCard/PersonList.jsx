import React from "react";
import PersonCard from "./PersonCard";
import { employees } from "./employees";

const PersonList = () => {
  return (
    <div className="person-list">
      {employees.map((employee) => (
        <PersonCard key={employee.id} employee={employee} />
      ))}
    </div>
  );
};

export default PersonList;