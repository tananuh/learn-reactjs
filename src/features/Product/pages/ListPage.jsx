import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import {Box, Paper, Grid, Container, Pagination} from '@mui/material';
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
    },
    pagination: {
        '& ul':{
            justifyContent: 'center'
        }
    }
}))

function ListPage(props) {
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pagination, setPagination] = useState({
        page: 1,
        limit: 12,
        total: 120,
    });
    const [filters, setFilter] = useState({
        _page: 1,
        _limit: 12
    });
    useEffect(() => { 
        (async () => {
            try {
                const data =  await productApi.getAll(filters);
                setProductList(data.data);
                setPagination(data.pagination);
            } catch (error) {
                console.log('error lmao',error);
            }
            setLoading(false);
        })();
    }, [filters]);


    const handlePageChange = (e, page) => {
        setLoading(true);
        setFilter(prevFilters => ({
            ...prevFilters,
            _page: page
        }))
    }

    
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
                            {loading? <ProductSkeletonList />:<ProductList data={productList} />}
                            <Pagination color="primary" count={Math.ceil(pagination.total / pagination.limit)} page={pagination.page} className={classes.pagination} onChange={handlePageChange}></Pagination>
                        </Paper>
                    </Grid>
                </Grid>          
            </Container> 
        </Box>
    );
}

export default ListPage;