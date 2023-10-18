import React from 'react';
import PropTypes from 'prop-types';
import { Tab, Tabs } from '@mui/material';

ProductSort.propTypes = {
    currentSort: PropTypes.string.isRequired,
    onChange: PropTypes.func
};

function ProductSort({currentSort, onChange}) {
    const handleSortChange = (event, newValue) => {
        if(onChange) onChange(newValue)
    }
    return (
        <Tabs
            value={currentSort}
            onChange={handleSortChange}
            textColor="secondary"
            indicatorColor="secondary"
        >
            <Tab label="Lowest to Highest" value="salePrice:ASC">

            </Tab>
            <Tab label="Lowest to Highest" value="salePrice:DESC">
                
            </Tab>
        </Tabs>
    );
}

export default ProductSort;