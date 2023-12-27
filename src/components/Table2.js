import { Paper, Table, TableBody, TableContainer, TableHead, TableRow, styled } from '@mui/material';
import React from 'react';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

const Table1 = ({ menu2 }) => {
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  return (
    <div style={{padding:60}}>
      
      <TableContainer  component={Paper}>
      <h2 style={{margin:10}}>ad insights</h2>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead >
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell>Group</StyledTableCell>
            <StyledTableCell>Clicks</StyledTableCell>
            <StyledTableCell>Cost</StyledTableCell>
            <StyledTableCell>Conversions</StyledTableCell>
            <StyledTableCell>Revenue</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {menu2.map((group) => (
            <StyledTableRow key={group.Id}>
              <StyledTableCell>{group.Id}</StyledTableCell>
              <StyledTableCell>{group.Group}</StyledTableCell>
              <StyledTableCell>{group.Clicks}</StyledTableCell>
              <StyledTableCell>{group.Cost}</StyledTableCell>
              <StyledTableCell>{group.Conversions}</StyledTableCell>
              <StyledTableCell>{group.Revenue}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
        </Table>
        </TableContainer>
    </div>
  );
};

export default Table1;
