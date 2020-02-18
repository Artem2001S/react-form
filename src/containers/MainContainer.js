import React from 'react';
import { connect } from 'react-redux';
import HorizontalList from 'components/HorizontalList/HorizontalList';
import Form from 'components/Form/Form';
import ResultForm from 'components/ResultForm/ResultForm';
import { changeInputValue } from 'redux/actions/actions';

function MainContainer({ inputsData, handleChange }) {
  return (
    <HorizontalList>
      <Form inputs={inputsData} inputChangeHandler={handleChange} />
      <ResultForm inputs={inputsData} />
    </HorizontalList>
  );
}

const mapStateToProps = state => ({
  inputsData: state.formInputs
});

const mapDispatchToProps = dispatch => ({
  handleChange: (e, inputName) => { dispatch(changeInputValue(e.target.value, inputName)); }
});

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
