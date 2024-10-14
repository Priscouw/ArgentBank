import PropTypes from "prop-types";
import "../Button/Button.scss";

// La props className permet d'appliquer des styles css au bouton

const Button = ({ textContain, className }) => {
  const buttonClass = `${className || ""}`;
  return <button className={buttonClass}>{textContain}</button>;
};

Button.propTypes = {
  textContain: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Button;
