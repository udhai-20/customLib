import PropTypes from "prop-types";
import "./tailwind.css";
import classNameUtil from "./classNamesUtil";
const Button = ({ children, onClick, className, rest }) => {
  console.log(classNameUtil);
  return (
    <div>
      <button
        {...rest}
        onClick={onClick}
        className={`bg-blue-600 p-3 m-auto rounded-lg  text-white ${className}`}
      >
        {children}
      </button>
    </div>
  );
};
Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.any,
  rest: PropTypes.any,
  className: PropTypes.any,
};
export default Button;
