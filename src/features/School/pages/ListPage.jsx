import { Box, Container, Grid, Paper } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react';
import schoolApi from '../../../api/schoolApi';
import SchoolList from '../components/SchoolList';
import Pagination from '../../../components/Pagination';
import SchoolSkeletonList from '../components/SchoolSkeletonList';

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
    const [schoolList, setSchoolList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pagination, setPagination] = useState({
        page: 1,
        limit: 12,
        total: 120,
    });
    const [filters, setFilter] = useState({
        page: 1,
        limit: 12
    });


    useEffect(() => { 
        (async () => {
            try {
                const data =  await schoolApi.getAll(filters);
                console.log(data);
                setSchoolList(data.data.object.docs);
                setPagination(prevPagination => ({
                    ...prevPagination,
                    total: data.data.object.total,
                    page: data.pagination.page
                }));
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
            page: page
        }))
    }
    
    const classes = useStyles();
    return (
        <Box>
            <Container>
                <Grid container spacing ={1}>
                    <Grid item className={classes.left}>
                        <Paper elevation={0}>
                            
                            
                        </Paper>
                    </Grid>
                    <Grid item className={classes.right}>
                        <Paper elevation={0} className={classes.paper_right}>
                            {loading? <SchoolSkeletonList />:<SchoolList data={schoolList} />}
                            <Pagination count={Math.ceil(pagination.total / pagination.limit)} page={pagination.page} onChange={handlePageChange} />
                        </Paper>
                    </Grid>
                </Grid>          
            </Container> 
        </Box>
    );
}

export default ListPage;