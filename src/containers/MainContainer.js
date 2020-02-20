import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import HorizontalList from 'components/HorizontalList/HorizontalList';
import Form from 'components/Form/Form';
import ResultForm from 'components/ResultForm/ResultForm';
import Alert from 'components/Alert/Alert';
import { validateInputsArray } from 'utils/validateInputs';
import {
  changeInputValue,
  changeValidationStatus
} from 'redux/actions/actions';

function MainContainer({
  inputsData,
  validationStatus,
  handleChange,
  changeValidationStatusHandler
}) {
  const handlePrintClick = () => {
    changeValidationStatusHandler(validateInputsArray(inputsData));

    if (validateInputsArray(inputsData) === true) {
      window.print();
    }
  };

  const inputChangeHandler = useCallback(
    (value, inputName) => {
      handleChange(value, inputName);
    },
    [handleChange]
  );

  return (
    <HorizontalList>
      <Form
        inputs={inputsData}
        inputChangeHandler={inputChangeHandler}
        submitHandler={handlePrintClick}
      />
      <ResultForm inputs={inputsData} />
      {validationStatus === true || <Alert>{validationStatus}</Alert>}
    </HorizontalList>
  );
}

const mapStateToProps = state => ({
  inputsData: state.formInputs.inputs,
  validationStatus: state.formInputs.validationStatus
});

const mapDispatchToProps = dispatch => ({
  handleChange: (value, inputName) =>
    dispatch(changeInputValue(value, inputName)),
  changeValidationStatusHandler: validationStatus =>
    dispatch(changeValidationStatus(validationStatus))
});

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
