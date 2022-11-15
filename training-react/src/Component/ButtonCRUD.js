import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { faPen, faTrash } from "@fortawesome/free-solid-svg-icons";
function ButtonCRUD({ color, text, icon, onClick }) {
  return (
    <button
      className="container"
      onClick={onClick}
      style={{ backgroundColor: color }}
    >
      {icon && (
        <FontAwesomeIcon
          color="white"
          icon={icon === "edit" ? faPen : faTrash}
        ></FontAwesomeIcon>
      )}
      {text}
    </button>
  );
}
// Button.defaultProps = {
//   color: "red",
//   text: "Nguyễn Minh Sơn",
// };

ButtonCRUD.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
};

export default ButtonCRUD;
