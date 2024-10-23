import PropTypes from "prop-types";
import "../Button/Button.scss";

// La props className permet d'appliquer des styles css au bouton

const Button = ({ textContain, className, onClick }) => {
  const buttonClass = `${className || ""}`;
  return (
    <button className={buttonClass} onClick={onClick}>
      {textContain}
    </button>
  );
};

Button.propTypes = {
  textContain: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
