import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, TextField, Typography, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';

FilterByPrice.propTypes = {
    onChange: PropTypes.func
};


const useStyles = makeStyles((theme) => ({
    root: {
        padding: useTheme().spacing(2),
        textAlign: 'left',
        borderTop: `1px solid ${useTheme().palette.grey[300]}`,
    },
    range: {
        display: 'flex',
        flexFlow: 'row nowrap',
        alignItems: 'center' ,
        marginTop: useTheme().spacing(1),
        marginBottom: useTheme().spacing(1),
        '& span': {
            marginLeft: useTheme().spacing(1),
            marginRight: useTheme().spacing(1),
        },
    },
}))

function FilterByPrice({onChange}) {
    const classes = useStyles();
    const [values, setValues] = useState({
        salePrice_gte:0,
        salePrice_lte: 0
    });
    const handleSubmit = () => {
        if(onChange && parseInt(values.salePrice_gte) < parseInt(values.salePrice_lte)) {
            onChange(values);
        }  
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setValues(prevValues => ({
            ...prevValues,
            [name]: value,
        }))
    }
    return (
        <Box className={classes.root}>
        <Typography variant='subtitle1'>
            Price
        </Typography>
        <Box className={classes.range}>
            <TextField name='salePrice_gte' variant="standard" value={values.salePrice_gte} onChange={handleChange} />
            -
            <TextField name='salePrice_lte' variant="standard" value={values.salePrice_lte} onChange={handleChange} />
        </Box>
        <Button variant='outlined' color='primary' onClick={handleSubmit} size='small' >Apply</Button>
    </Box>
    );
}

export default FilterByPrice;