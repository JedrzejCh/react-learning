import React from 'react';
import { AttendanceStyles } from './Attendance.styles';
const Attendance = ({ rate }) => {
  return <AttendanceStyles>Attendance: {rate}</AttendanceStyles>;
};

export default Attendance;
