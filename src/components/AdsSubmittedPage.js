// AdsSubmittedPage.jsx

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import React from 'react';

const AdsSubmittedPage = () => {
  return (
    <div className='sum1' >
      <CheckCircleIcon /> {/* Display the icon */}
      <h2 className='sum2' > Ads Submitted  <CheckCircleIcon style={{fontSize:50}}/></h2>
      {/* You can add additional content for the Ads Submitted page if needed */}
    </div>
  );
};

export default AdsSubmittedPage;
