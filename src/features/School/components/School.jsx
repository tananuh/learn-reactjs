import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { THUMBNAIL_PLACEHOLDER } from '../../../constants';

const useStyles = makeStyles(theme => ({
    img: {
        objectFit: 'contain',
    }
}))

School.propTypes = {
    school: PropTypes.object,
};

function School({school}) {
    const classes = useStyles();
    const logoUrl = school.logoUrl? school.logoUrl : `${THUMBNAIL_PLACEHOLDER}`;
    return (
        <div>
            <Box padding={1}>
                <Box minHeight="215px">
                    <img className={classes.img} alt={school.name} width="100%" src={logoUrl} />
                </Box>
                <Typography variant='body2' align="left">{school.name}</Typography>
                <Typography variant='body2' align="left">Address: {school.province}, {school.city}, {school.country}</Typography>
            </Box>
        </div>
    );
}

export default School;