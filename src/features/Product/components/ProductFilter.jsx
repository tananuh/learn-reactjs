import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import FilterByCategory from './Filters/FilterByCategory';
import FilterByPrice from './Filters/FilterByPrice';

ProductFilter.propTypes = {
    filters: PropTypes.object.isRequired,
    onChange: PropTypes.func
};

function ProductFilter({filters, onChange}) {
    if(!onChange) return;
    const handleFilterChange = () => {
        
    }
    const handleCategoryChange = (newCategoryId) => {
        const newFilters = {
            ...filters,
            "category.id": newCategoryId
        }
        onChange(newFilters)
    }

    const handlePriceChange = (values) => {
        onChange(values)
    }
    return (
        <Box>
            <FilterByCategory onChange={handleCategoryChange} />
            <FilterByPrice onChange={handlePriceChange} />
        </Box>
    );
}

export default ProductFilter;