import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import Button from "react-bootstrap/Button";
// import { faPen, faTrash, faPlus } from "@fortawesome/free-solid-svg-icons";
function ButtonCRUD({ color, text, icon, onClick }) {
  return (
    <Button
      className="container"
      onClick={onClick}
      style={{ backgroundColor: color }}
    >
      {/* {icon && <FontAwesomeIcon color="white"></FontAwesomeIcon>} */}
      {text}
    </Button>
  );
}
// ButtonCRUD.defaultProps = {
//   color: "red",
//   text: "Nguyễn Minh Sơn",
// };

ButtonCRUD.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
};

export default ButtonCRUD;
