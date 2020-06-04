import { v4 as uuidv4 } from "uuid";
export const Type = {
  SUBMIT: "SUBMIT",
  DELETE: "DELETE",
  FILTER: "FILTER",
};

export const FormSubmit = (name, phone) => ({
  type: Type.SUBMIT,
  payload: { name: name, phone: phone, id: uuidv4() },
});

export const DeleteContact = (id) => ({
  type: Type.DELETE,
  payload: id,
});

export const FilterChange = (value) => ({
  type: Type.FILTER,
  payload: value,
});
