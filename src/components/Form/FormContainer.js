import { connect } from "react-redux";
import { FormSubmit } from "../../redux/actions/actions";
import Form from "./Form";
import * as Selectors from "../../redux/selectors/selectors";

const mapStateToProps = (state) => ({
  contacts: Selectors.getAllContacts(state),
});

const mapDispatchToProps = (dispatch) => ({
  onFormSubmit: (name, phone) => dispatch(FormSubmit(name, phone)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
