import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import FilterByCategory from './Filters/FilterByCategory';
import FilterByPrice from './Filters/FilterByPrice';
import FilterByService from './Filters/FilterByService';

ProductFilter.propTypes = {
    filters: PropTypes.object.isRequired,
    onChange: PropTypes.func
};

function ProductFilter({filters, onChange}) {
    if(!onChange) return;
    const handleCategoryChange = (newCategoryId) => {
        const newFilters = {
            ...filters,
            "category.id": newCategoryId
        }
        onChange(newFilters)
    }

    const handleChange = (values) => {
        
        onChange(values)
        const newFilters = {
            ...filters,
            ...values
        }
        onChange(newFilters)
    }
    return (
        <Box>
            <FilterByCategory onChange={handleCategoryChange} />
            <FilterByPrice onChange={handleChange} />
            <FilterByService filters={filters} onChange={handleChange} />
        </Box>
    );
}

export default ProductFilter;