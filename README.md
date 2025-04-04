# hrApp

hrApp is a React application designed to manage and display information about employees. It includes a header, footer, and a person component that displays details about an employee.

## Features

- **Header Component**: Displays the name of the application.
- **Footer Component**: Includes a copyright notice with "REACT25K".
- **Person Component**: Accepts and displays props for name, title, salary, phone, email, and favorite animal.

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/<your-username>/hrApp.git
    cd hrApp
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Start the development server:
    ```sh
    npm start
    ```

## Usage

After starting the development server, you can access the application at `http://localhost:3000`.

## Components

### Header

The Header component displays the name of the application.

```jsx
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>hrApp</h1>
    </header>
  );
};

export default Header;
```

### Footer

The Footer component includes a copyright notice with "REACT25K".

```jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2025 REACT25K</p>
    </footer>
  );
};

export default Footer;
```

### Person

The Person component accepts and displays props for name, title, salary, phone, email, and favorite animal.

```jsx
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
```

## Styling

### Header CSS

```css
.header {
  background-color: #663399; /* Purple background */
  padding: 20px;
  color: #FFD700; /* Gold text */
  text-align: center;
  font-family: 'Arial', sans-serif;
  font-size: 2em;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  border-bottom: 3px solid #FFD700; /* Gold border */
}
```

### Footer CSS

```css
.footer {
  background-color: #663399; /* Purple background */
  padding: 10px;
  color: #FFD700; /* Gold text */
  text-align: center;
  font-family: 'Arial', sans-serif;
  font-size: 1em;
  position: fixed;
  width: 100%;
  bottom: 0;
  box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.2);
  border-top: 3px solid #FFD700; /* Gold border */
}
```

### Person CSS

```css
.person {
  background-color: #282c34; /* Dark background */
  color: #FFD700; /* Gold text */
  border: 2px solid #FFD700; /* Gold border */
  padding: 20px;
  margin: 20px;
  text-align: left;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  font-family: 'Arial', sans-serif;
  transition: transform 0.2s;
}

.person:hover {
  transform: scale(1.05);
}

.person h2 {
  font-size: 1.5em;
  margin-bottom: 10px;
}

.person p {
  font-size: 1em;
  margin: 5px 0;
}
```

## Contributing

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes.
4. Push your branch and create a pull request.

## License

This project is licensed under the MIT License.