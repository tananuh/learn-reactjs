import React from 'react';
import PropTypes from 'prop-types';

import ListPage from './pages/ListPage';
import {Box} from "@mui/material";

SchoolFeature.propTypes = {
    
};

function SchoolFeature(props) {
    
    return (
        <Box pt={4} sx={{
            backgroundColor: 'rgb(244,244,244)'
          }}>
            <ListPage />
        </Box>
    );
}

export default SchoolFeature;