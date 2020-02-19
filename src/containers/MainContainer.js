import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import HorizontalList from 'components/HorizontalList/HorizontalList';
import Form from 'components/Form/Form';
import ResultForm from 'components/ResultForm/ResultForm';
import { changeInputValue, validateInputs } from 'redux/actions/actions';

function MainContainer({
  inputsData,
  validationStatus,
  handleChange,
  handleValidation
}) {
  console.log(validationStatus);

  useEffect(() => {
    if (validationStatus === true) {
      window.print();
    }
  }, [validationStatus]);

  return (
    <HorizontalList>
      <Form
        inputs={inputsData}
        inputChangeHandler={handleChange}
        submitHandler={handleValidation}
      />
      <ResultForm inputs={inputsData} />
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
