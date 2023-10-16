import React from 'react';
import PropTypes from 'prop-types';
import {Box, Typography} from "@mui/material";

HomePage.propTypes = {
    
};

function HomePage(props) {
    return (
        <Box sx={{
            backgroundColor: 'rgb(244,244,244)'
          }}>
            <Typography>
                Home Page
            </Typography>
        </Box> 
    );
}

export default HomePage;