import React, { Fragment } from "react";
import styles from "./Contact.module.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { DeleteContact } from "../../redux/actions/actions";

const Contact = ({ name, phone, id, onDelete }) => (
  <Fragment>
    <p className={styles.name}>{name}</p>
    <p className={styles.phone}>{phone}</p>
    <button
      type="button"
      className={styles.button}
      onClick={() => onDelete(id)}
    >
      &times;
    </button>
  </Fragment>
);

const mapDispatchToProps = (dispatch) => ({
  onDelete: (id) => dispatch(DeleteContact(id)),
});

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default connect(null, mapDispatchToProps)(Contact);
