// AdFormPage.js
import React, { useState } from 'react';
import { Button, Container, Typography, Box, FormControlLabel, Checkbox, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';

const initialTableData = [
  { id: 1, name: 'Item 1', price: 50 },
  { id: 2, name: 'Item 2', price: 30 },
  { id: 3, name: 'Item 3', price: 80 },
  // Add more items as needed
];

function AdFormPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    heading1: '',
    heading2: '',
    marketingImage: '',
    videoUrl: '',
    businessName: '',
    websiteUrl: '',
    description: '',
    portraitImage: '',
    squareImage: '',
  });

  const [textAdChecked, setTextAdChecked] = useState(false);
  const [mediaAdChecked, setMediaAdChecked] = useState(false);

  // Sorting state
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc'); // 'asc' or 'desc'

  const handleCheckboxChange = (name) => (event) => {
    if (name === 'textAd') {
      setTextAdChecked(event.target.checked);
    } else if (name === 'mediaAd') {
      setMediaAdChecked(event.target.checked);
    }
  };

  const handleSort = (column) => {
    if (sortBy === column) {
      // If the same column is clicked again, toggle the sort order
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      // If a new column is clicked, set it as the sorting column with the default order 'asc'
      setSortBy(column);
      setSortOrder('asc');
    }
  };

  const sortedTableData = [...initialTableData].sort((a, b) => {
    const aValue = a[sortBy];
    const bValue = b[sortBy];

    if (sortOrder === 'asc') {
      return aValue - bValue;
    } else {
      return bValue - aValue;
    }
  });

  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        Ad Form
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        {/* ... Existing fields ... */}
        
        {/* Checkbox for Text Ad */}
        <FormControlLabel
          control={
            <Checkbox
              checked={textAdChecked}
              onChange={handleCheckboxChange('textAd')}
              name="textAd"
              color="primary"
            />
          }
          label="Text Ad"
        />
        {/* Checkbox for Media Ad */}
        <FormControlLabel
          control={
            <Checkbox
              checked={mediaAdChecked}
              onChange={handleCheckboxChange('mediaAd')}
              name="mediaAd"
              color="primary"
            />
          }
          label="Media Ad"
        />

        {/* Additional fields based on checkbox selections */}
        {/* ... Existing fields ... */}

        {/* Table with Sorting */}
        <Table>
          <TableHead>
            <TableRow>
              <TableCell onClick={() => handleSort('id')}>ID</TableCell>
              <TableCell onClick={() => handleSort('name')}>Name</TableCell>
              <TableCell onClick={() => handleSort('price')}>Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedTableData.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.price}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        <Button variant="contained" onClick={handleBack}>
          <NavLink to="/">Back</NavLink>
        </Button>
        <Button variant="contained" color="primary" onClick={handleButtonClick}>
          Submit
        </Button>
      </Box>
    </Container>
  );
}

export default AdFormPage;
