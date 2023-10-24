import { Box, Typography, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';
import PropTypes from 'prop-types';
import React from 'react';

FilterByService.propTypes = {
    filters: PropTypes.object,
    onChange: PropTypes.func
};


const useStyles = makeStyles((theme) => ({
    root: {
        padding: useTheme().spacing(2),
        textAlign: 'left',
        borderTop: `1px solid ${useTheme().palette.grey[300]}`,
    },
    list: {
        padding: '0',
        margin: '0',
        '& li': {
            margin: '0',
            listStyleType: 'none',
        }
    },
}))

function FilterByService({filters = {}, onChange}) {
    const classes = useStyles();
    const handleChange = (e) => {
        if(!onChange) return;
        const {name, checked} = e.target;
        onChange({[name]: checked})
    }
    return (
        <Box className={classes.root}>
        <Typography variant='subtitle1'>
            Service
        </Typography>
        <Box>
            <ul className={classes.list}>
                {[{value:'isPromotion', label:"Promotion"}, {value:'isFreeShip', label:"Free Ship"}].map(service => 
                    <li key={service.value}>
                        <div>
                            <input type="checkbox" name={service.value} checked={Boolean(filters[service.value])} onChange={handleChange} />
                            <span>
                                {service.label}
                            </span>
                        </div>
                    </li>    
                )}
            </ul>
        </Box>
    </Box>
    );
}

export default FilterByService;