import { Type } from "../actions/actions";

const INITIAL_STATE = {
  contacts: JSON.parse(localStorage.getItem("contacts")) || [],
  filter: "",
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Type.SUBMIT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };

    case Type.DELETE:
      return {
        ...state,
        contacts: state.contacts.filter(
          (contact) => contact.id !== action.payload
        ),
      };

    case Type.FILTER:
      console.log(state);
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
