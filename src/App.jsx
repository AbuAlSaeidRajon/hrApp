import "./App.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import PersonList from "./PersonCard/PersonList"; // Updated import for PersonList

const App = () => {
  return (
    <>
      <Header name="Rajon Al Saeid" />
      <main>
        <PersonList /> {/* Updated component */}
      </main>
      <Footer year={2025} />
    </>
  );
};

export default App;