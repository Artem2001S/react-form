import React, { useCallback, useState } from 'react';
import { connect } from 'react-redux';
import HorizontalList from 'components/HorizontalList/HorizontalList';
import Form from 'components/Form/Form';
import ResultForm from 'components/ResultForm/ResultForm';
import { changeInputValue, validateInputs } from 'redux/actions/actions';
import Alert from 'components/Alert/Alert';

function MainContainer({
  inputsData,
  validationStatus,
  handleChange,
  handleValidation
}) {
  const [alertMessage, setAlertMessage] = useState('');

  const handlePrintClick = () => {
    if (validationStatus === true) {
      window.print();
    } else {
      setAlertMessage(validationStatus);
    }
  };

  const inputChangeHandler = useCallback(
    (value, inputName) => {
      handleChange(value, inputName);
      handleValidation();
      setAlertMessage('');
    },
    [handleChange, handleValidation]
  );

  return (
    <HorizontalList>
      <Form
        inputs={inputsData}
        inputChangeHandler={inputChangeHandler}
        submitHandler={handlePrintClick}
      />
      <ResultForm inputs={inputsData} />
      {!alertMessage || <Alert>{validationStatus}</Alert>}
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
  handleValidation: () => dispatch(validateInputs())
});

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
