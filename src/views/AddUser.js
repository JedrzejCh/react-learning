import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import FormField from 'components/molecules/formField/FormField';
import { Button } from 'components/atoms/Button/Button';
import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';
import { StyledTitle } from 'components/organisms/UsersList/UsersList.styles';
import { UsersContext } from 'providers/UsersProvider';
import { UserShape } from 'types';

const initialFormValues = {
  name: '',
  attendance: '',
  average: '',
};
const AddUser = () => {
  const [formValues, formValuesChange] = useState(initialFormValues);
  const context = useContext(UsersContext);

  const handleInputValue = (e) => {
    formValuesChange({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmitUser = (e) => {
    e.preventDefault();
    context.handleSubmit(formValues);
    formValuesChange(initialFormValues);
  };
  return (
    <ViewWrapper as="form" onSubmit={handleSubmitUser}>
      <StyledTitle>Add new student</StyledTitle>
      <FormField label="Name" id="name" name="name" value={formValues.name} onChange={handleInputValue} />
      <FormField label="Attendance" id="attendance" name="attendance" value={formValues.attendance} onChange={handleInputValue} />
      <FormField label="Average" id="average" name="average" value={formValues.average} onChange={handleInputValue} />
      <Button type="submit">Add</Button>
    </ViewWrapper>
  );
};

// AddUser.propTypes = {
//   formValues: PropTypes.shape(UserShape),
//   handleSubmit: PropTypes.func.isRequired,
//   handleInputValue: PropTypes.func.isRequired,
// };

export default AddUser;
