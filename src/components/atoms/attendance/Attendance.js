import React from 'react';
import { AttendanceStyles } from './Attendance.styles';
const Attendance = ({ attendance }) => {
  return <AttendanceStyles>attendance: {attendance}</AttendanceStyles>;
};

export default Attendance;
