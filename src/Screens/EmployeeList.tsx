


import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  employeeName: string,
  designation: string,
  department: string,
  phoneNumber: number,
  employeeId: number,
  emailId:string,
) {
  return { employeeName, designation, department, phoneNumber, employeeId, emailId};
}

const rows = [
  createData('Employee 1', 'Trainee Engineer', 'Development', 24, 1,'xyz@email.com'),
  createData('Employee 1', 'Trainee Engineer', 'Development', 24, 1,'xyz@email.com'),
  createData('Employee 1', 'Trainee Engineer', 'Development', 24, 1,'xyz@email.com'),

];

export default function EmployeeList() {
  return (

    <TableContainer component={Paper} className="mt-10 mx-5 " >
      <Table className="max-w-auto" sx={{  }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Employee Name</TableCell>
            <TableCell align="right">Designation</TableCell>
            <TableCell align="right">Department</TableCell>
            <TableCell align="right">PhoneNumber</TableCell>
            <TableCell align="right">EmployeeId</TableCell>
            <TableCell align="right">EmailId</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.employeeName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.employeeName}
              </TableCell>
              {/* <TableCell align="right">{row.employeeName}</TableCell> */}
              <TableCell align="right">{row.designation}</TableCell>
              <TableCell align="right">{row.department}</TableCell>
              <TableCell align="right">{row.phoneNumber}</TableCell>
              <TableCell align="right">{row.employeeId}</TableCell>
              <TableCell align="right">{row.emailId}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}