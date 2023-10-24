import { Box, Container, Grid, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import productApi from '../../../api/productApi';
import FilterViewer from '../components/Filters/FilterViewer';
import ProductFilter from '../components/ProductFilter';
import ProductList from '../components/ProductList';
import ProductSkeletonList from '../components/ProductSkeletonList';
import ProductSort from '../components/ProductSort';
import Pagination from '../../../components/Pagination';

ListPage.propTypes = {
    
};

const useStyles = makeStyles((theme) => ({
    root: {},
    left: {
        width: '250px'
    },
    right: {
        flex: '1 1 0'
    },
    pagination: {
        marginTop: '20px',
        '& ul':{
            justifyContent: 'center'
        },
    },
    paper_right: {
        paddingBottom: "20px"
    }
}))

function ListPage(props) {
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchParams, setSearchParams] = useSearchParams();
    const [pagination, setPagination] = useState({
        page: 1,
        limit: 12,
        total: 120,
    });
    const [filters, setFilter] = useState({
        _page: 1,
        _limit: 12,
        _sort: "salePrice:ASC"
    });

    useEffect(() => { 
        setSearchParams(filters);
    }, [setSearchParams, filters]);

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


    const handlePageChange = (page) => {
        setLoading(true);
        setFilter(prevFilters => ({
            ...prevFilters,
            _page: page
        }))
    }

    const handleSortChange = (newSortValue) => {
        setLoading(true);
        setFilter(prevFilters => ({
            ...prevFilters,
            _sort: newSortValue
        }))
    }
    const handleFilterChange = (newFilters) => {
        setLoading(true);
        setFilter(newFilters);
    }
    const setNewFilter = (newFilters) => {
        setFilter(prevFilters => ({
            ...prevFilters,
            ...newFilters
        }))
    }
    
    const classes = useStyles();
    return (
        <Box>
            <Container>
                <Grid container spacing ={1}>
                    <Grid item className={classes.left}>
                        <Paper elevation={0}>
                            <ProductFilter filters={filters} onChange={handleFilterChange} />
                            
                        </Paper>
                    </Grid>
                    <Grid item className={classes.right}>
                        <Paper elevation={0} className={classes.paper_right}>
                            <ProductSort currentSort={filters._sort} onChange={handleSortChange} />
                            <FilterViewer filters={filters} onChange={setNewFilter} />
                            {loading? <ProductSkeletonList />:<ProductList data={productList} />}
                            <Pagination count={Math.ceil(pagination.total / pagination.limit)} page={pagination.page} onChange={handlePageChange} />
                        </Paper>
                    </Grid>
                </Grid>          
            </Container> 
        </Box>
    );
}

export default ListPage;