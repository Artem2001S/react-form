import { CHANGE_INPUT_VALUE } from "./actionTypes";

export function changeInputValue(inputName, newValue) {
  return {
    type: CHANGE_INPUT_VALUE,
    payload: { inputName, newValue }
  };
}
