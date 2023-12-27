import { Paper, Table, TableBody, TableContainer, TableHead, TableRow, TableSortLabel, styled } from '@mui/material';
import React, { useState } from 'react';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

const Table1 = ({ menu }) => {

  const [sortBy, setSortBy] = useState('Id');
  const [sortOrder, setSortOrder] = useState('asc');

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.white,
      color: theme.palette.common.black,
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
  
  const handleSort = (property) => {
    const isAsc = sortBy === property && sortOrder === 'asc';
    setSortBy(property);
    setSortOrder(isAsc ? 'desc' : 'asc');
  };

  const sortedMenu = menu.slice().sort((a, b) => {
    const order = sortOrder === 'asc' ? 1 : -1;
    return order * (a[sortBy] - b[sortBy]);
  });

  return (
    <div style={{padding:50}}>
      <TableContainer component={Paper}>
      <h2 style={{margin:10}}>ad insights</h2>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead >
          <TableRow>
           <StyledTableCell>
                <TableSortLabel active={sortBy === 'Id'} direction={sortOrder}
                  onClick={() => handleSort('Id')}
                >ID</TableSortLabel>
              </StyledTableCell>
              <StyledTableCell>
                <TableSortLabel active={sortBy === 'Campaigns'} direction={sortOrder}
                  onClick={() => handleSort('Campaigns')}
                >Campaigns</TableSortLabel>
              </StyledTableCell>
              <StyledTableCell>
                <TableSortLabel active={sortBy === 'Clicks'} direction={sortOrder}
                  onClick={() => handleSort('Clicks')}
                >Clicks</TableSortLabel>
              </StyledTableCell>
               <StyledTableCell>
                <TableSortLabel active={sortBy === 'Cost'} direction={sortOrder}
                  onClick={() => handleSort('Cost')}>Cost</TableSortLabel>
              </StyledTableCell>
              <StyledTableCell>
                <TableSortLabel active={sortBy === 'Conversions'} direction={sortOrder}
                  onClick={() => handleSort('Conversions')}> Conversions</TableSortLabel>
              </StyledTableCell>
              <StyledTableCell>
                <TableSortLabel active={sortBy === 'Revenue'} direction={sortOrder}
                  onClick={() => handleSort('Revenue')}
                >Revenue</TableSortLabel>
              </StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedMenu.map((campaign) => (
            <StyledTableRow key={campaign.Id}>
              <StyledTableCell>{campaign.Id}</StyledTableCell>
              <StyledTableCell>{campaign.Campaigns}</StyledTableCell>
              <StyledTableCell>{campaign.Clicks}</StyledTableCell>
              <StyledTableCell>{campaign.Cost}</StyledTableCell>
              <StyledTableCell>{campaign.Conversions}</StyledTableCell>
              <StyledTableCell>{campaign.Revenue}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
        </Table>
        </TableContainer>
    </div>
  );
};

export default Table1;
