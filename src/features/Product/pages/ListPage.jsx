import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import {Box, Paper, Grid, Container} from '@mui/material';
import productApi from '../../../api/productApi';
import ProductSkeletonList from '../components/ProductSkeletonList';
import ProductList from '../components/ProductList';

ListPage.propTypes = {
    
};

const useStyles = makeStyles(theme => ({
    root: {},
    left: {
        width: '250px'
    },
    right: {
        flex: '1 1 0'
    }
}))

function ListPage(props) {
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => { 
        (async () => {
            try {
                const params = {
                    _page: 1,
                    _limit: 10
                };
                const data =  await productApi.getAll(params);
                setProductList(data);

            } catch (error) {
                console.log('error lmao',error);
            }
            setLoading(false);
        })();
      }, []);
    const classes = useStyles();
    return (
        <Box>
            <Container>
                <Grid container spacing ={1}>
                    <Grid item className={classes.left}>
                        <Paper elevation={0}>
                            Left Column
                        </Paper>
                    </Grid>
                    <Grid item className={classes.right}>
                        <Paper elevation={0}>
                            {loading? <ProductSkeletonList />:<ProductList data={productList.data} />}
                        </Paper>
                    </Grid>
                </Grid>
            </Container> 
        </Box>
    );
}

export default ListPage;