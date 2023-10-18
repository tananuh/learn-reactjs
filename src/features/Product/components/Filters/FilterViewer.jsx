import React from 'react';
import PropTypes from 'prop-types';
import { Box, Chip, useTheme } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexFlow: 'row wrap',
        alignItems: 'center',
        margin: useTheme().spacing(2, 0),
        listStyleType: 'none',
        '& li': {
            margin: '0',
            padding: useTheme().spacing(1),
        }
    },
}))

const FILTER_LIST = [
    {
        id: 1,
        getLabel: () => 'Free Ship',
        isActive: (filters) => filters.isFreeShip,
        isVisible: () => true,
        isRemovable: false,
        onRemove: () => {},
        onToggle: (filters) => {
            const newFilters = {...filters};
            if(newFilters.isFreeShip) {
                newFilters.isFreeShip = null;
            } else {
                newFilters.isFreeShip = true;
            }
            return newFilters;
        },
    },
    {
        id: 2,
        getLabel: () => 'Promotion',
        isActive: () => true,
        isVisible: (filters) => {
            return filters.isPromotion
        },
        isRemovable: true,
        onRemove: (filters) => {
            const newFilters = {...filters};

            newFilters.isPromotion = null;
            return newFilters;
        },
        onToggle: null,
    },
    {
        id: 3,
        getLabel: (filters) => `from ${filters.salePrice_gte} to ${filters.salePrice_lte}`,
        isActive: () => true,
        isVisible: (filters) => {
            return filters.salePrice_lte > 0
        },
        isRemovable: true,
        onRemove: (filters) => {
            const newFilters = {...filters};

            newFilters.salePrice_gte = null;
            newFilters.salePrice_lte = null;

            return newFilters;
        },
        onToggle: null,
    },
    {
        id: 4,
        getLabel: (filters) => `${filters['category.id']}`,
        isActive: () => true,
        isVisible: (filters) => {
            return filters['category.id']
        },
        isRemovable: true,
        onRemove: (filters) => {
            const newFilters = {...filters};

            newFilters['category.id'] = null;
            return newFilters;
        },
        onToggle: null,
    }
];

FilterViewer.propTypes = {
    filters: PropTypes.object,
    onChange: PropTypes.func
};

function FilterViewer({filters = {}, onChange}) {
    const classes = useStyles();
    return (
        <Box component="ul" className={classes.root}>
            {FILTER_LIST.filter(x => x.isVisible(filters)).map(x => (
                <li key ={x.id}>
                    <Chip
                        label={x.getLabel(filters)}
                        color={x.isActive(filters) ? 'primary': 'default'}
                        clickable={!x.isRemovable}
                        onClick={x.isRemovable? null : () =>{
                            if(!onChange) return;
                            const newFilter = x.onToggle(filters)
                            onChange(newFilter)
                        }}
                        onDelete={x.isRemovable? () => {
                            if(!onChange) return;
                            const newFilter = x.onRemove(filters)
                            onChange(newFilter)
                        } : null}

                    />
                </li>
            ))}
        </Box>
    );
}

export default FilterViewer;