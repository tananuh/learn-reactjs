import React from 'react';
import PropTypes from 'prop-types';

import ListPage from './pages/ListPage';
import {Box} from "@mui/material";

ProductFeature.propTypes = {
    
};

function ProductFeature(props) {
    
    return (
        <Box pt={4} sx={{
            backgroundColor: 'rgb(244,244,244)'
          }}>
            <ListPage />
        </Box>
    );
}

export default ProductFeature;