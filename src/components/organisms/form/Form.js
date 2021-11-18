import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, StyledTitle } from '../UsersList/UsersList.styles';
import FormField from 'components/molecules/formField/FormField';
// import { StyledTitle} fr
import { Button } from 'components/atoms/Button/Button';

const Form = ({ handleSubmit, formValues: { name, attendance, average }, handleInputValue }) => {
  return (
    <>
      <Wrapper as="form" onSubmit={handleSubmit}>
        <StyledTitle>Add new student</StyledTitle>
        <FormField label="Name" id="name" name="name" value={name} onChange={handleInputValue} />
        <FormField label="Attendance" id="attendance" name="attendance" value={attendance} onChange={handleInputValue} />
        <FormField label="Average" id="average" name="average" value={average} onChange={handleInputValue} />
        <Button type="submit">Add</Button>
      </Wrapper>
    </>
  );
};

Form.propTypes = {
  formValues: PropTypes.shape({
    name: PropTypes.string.isRequired,
    average: PropTypes.string.isRequired,
    attendance: PropTypes.string.isRequired,
  }),
};

export default Form;
