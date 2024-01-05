import React from 'react';

const students = [
  {
    id: 1,
    name: 'Amy',
  },
  {
    id: 2,
    name: 'Hana',
  },
  {
    id: 3,
    name: 'sorrel',
  },
];

function Attendance(props) {
  return (
    <ul>
      {students.map((student) => (
        <li key={student.id}>{student.name}</li>
      ))}
    </ul>
  );
}

export default Attendance;
