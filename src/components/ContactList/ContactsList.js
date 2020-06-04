import React, { Component } from "react";
import Contact from "../Contact/Contact";
import styles from "./ContactsList.module.css";
import { connect } from "react-redux";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import popTransition from "../transitions/pop.module.css";
import * as Selectors from "../../redux/selectors/selectors";

class ContactsList extends Component {
  state = { showError: false };
  onFilterChange = (contacts, filter) => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  componentDidUpdate(prevProps, prevState) {
    localStorage.setItem("contacts", JSON.stringify(this.props.contacts));
  }

  render() {
    const filteredContacts = this.onFilterChange(
      this.props.contacts,
      this.props.filter
    );
    return (
      <TransitionGroup component="ul" className={styles.list}>
        {filteredContacts.map((contact) => (
          <CSSTransition
            key={contact.id}
            timeout={200}
            classNames={popTransition}
          >
            <li key={contact.id} className={styles.listItem}>
              <Contact {...contact} />
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: Selectors.getAllContacts(state),
  filter: Selectors.getFilterValue(state),
});
export default connect(mapStateToProps)(ContactsList);
