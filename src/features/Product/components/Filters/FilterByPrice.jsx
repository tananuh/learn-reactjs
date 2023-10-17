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
        textAlign: 'left'
    },
    menu: {
        padding: '0',
        margin: '0',
        listStyleType: 'none',
        marginTop: useTheme().spacing(1),
        transition: "all .25s",
        '& li': {
            '&:hover': {
                cursor:'pointer',
                color: useTheme().palette.primary.main
            }
        }
    },
}))

function FilterByPrice({onChange}) {
    const classes = useStyles();
    const [values, setValues] = useState({
        salePrice_gte:0,
        salePrice_lte: 0
    });
    const handleSubmit = () => {
        if(onChange) {
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
        <Box>
            <TextField name='salePrice_gte' value={values.salePrice_gte} onChange={handleChange} />
            -
            <TextField name='salePrice_lte' value={values.salePrice_lte} onChange={handleChange} />
        </Box>
        <Button variant='outlined' color='primary' onClick={handleSubmit} >Apply</Button>
    </Box>
    );
}

export default FilterByPrice;