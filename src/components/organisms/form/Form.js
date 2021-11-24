// import React from 'react';
// import PropTypes from 'prop-types';
// import { StyledTitle } from '../UsersList/UsersList.styles';
// import FormField from 'components/molecules/formField/FormField';

// import { Button } from 'components/atoms/Button/Button';
// import { ViewWrapper } from 'components/molecules/ViewWrapper/ViewWrapper';

// const Form = ({ handleSubmit, formValues: { name, attendance, average }, handleInputValue }) => {
//   return (
//     <>
//       <ViewWrapper as="form" onSubmit={handleSubmit}>
//         <StyledTitle>Add new student</StyledTitle>
//         <FormField label="Name" id="name" name="name" value={name} onChange={handleInputValue} />
//         <FormField label="Attendance" id="attendance" name="attendance" value={attendance} onChange={handleInputValue} />
//         <FormField label="Average" id="average" name="average" value={average} onChange={handleInputValue} />
//         <Button type="submit">Add</Button>
//       </ViewWrapper>
//     </>
//   );
// };

// Form.propTypes = {
//   formValues: PropTypes.shape({
//     name: PropTypes.string.isRequired,
//     average: PropTypes.string.isRequired,
//     attendance: PropTypes.string.isRequired,
//   }),
// };

// export default Form;
