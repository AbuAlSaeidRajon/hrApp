import "./Footer.css";
const Footer = (props) => {
  return (
    <footer>
      <p>Copyright &copy; Rajon Al Saeid {props.year}</p>
    </footer>
  );
};

export default Footer;