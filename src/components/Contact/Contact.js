import React, { Fragment, Component } from "react";
import styles from "./Contact.module.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { DeleteContact } from "../../redux/actions/actions";

class Contact extends Component {
  state = {};

  onButtonClick = (id) => {
    return () => this.props.onDelete(id);
  };
  render() {
    const { name, phone, id } = this.props;
    return (
      <Fragment>
        <p className={styles.name}>{name}</p>
        <p className={styles.phone}>{phone}</p>
        <button
          type="button"
          className={styles.button}
          onClick={this.onButtonClick(id)}
        >
          &times;
        </button>
      </Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  onDelete: (id) => dispatch(DeleteContact(id)),
});

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
};

export default connect(null, mapDispatchToProps)(Contact);
