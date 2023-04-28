import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

function EditableTable(props) {
  const [data, setData] = useState(props.data);

  const handleFieldChange = (index, fieldName, value) => {
    const newData = [...data];
    newData[index][fieldName] = value;
    setData(newData);
  };

//   if (data.length === 0) {
//     return <p>No matching records found.</p>;
//   }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {props.columns.map((column) => (
              <TableCell key={column.fieldName}>{column.headerName}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {props.columns.map((column) => (
                <TableCell key={column.fieldName}>
                  <TextField
                    label={column.headerName}
                    value={row[column.fieldName]}
                    fullWidth
                    onChange={(event) =>
                      handleFieldChange(rowIndex, column.fieldName, event.target.value)
                    }
                  />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default EditableTable;
