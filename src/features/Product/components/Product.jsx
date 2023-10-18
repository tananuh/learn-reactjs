import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from '../../../constants';

const useStyles = makeStyles(theme => ({
    img: {
        objectFit: 'contain',
    }
}))

Product.propTypes = {
    product: PropTypes.object,
};

function Product({product}) {
    const classes = useStyles();
    const thumbnailUrl = product.thumbnail? `${STATIC_HOST}${product.thumbnail.url}` : `${THUMBNAIL_PLACEHOLDER}`;
    return (
        <div>
            <Box padding={1}>
                <Box minHeight="215px">
                    <img className={classes.img} alt={product.name} width="100%" src={thumbnailUrl} />
                </Box>
                <Typography variant='body2' align="left">{product.name}</Typography>
                <Typography variant='body2' align="left">
                    <Box component="span" fontSize="16px" fontWeight="bold" mr={1}>
                        {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(product.salePrice)}
                    </Box>
                    
                    {product.promotionPercent>0?`-${product.promotionPercent}%`:""}
                </Typography>
            </Box>
        </div>
    );
}

export default Product;