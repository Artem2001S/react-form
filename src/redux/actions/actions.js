import { CHANGE_INPUT_VALUE } from "./actionTypes";

export function changeInputValue(newValue, inputName) {
  return {
    type: CHANGE_INPUT_VALUE,
    payload: { inputName, newValue }
  };
}
