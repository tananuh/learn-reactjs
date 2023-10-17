import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Typography, useTheme } from '@mui/material';
import categoryApi from '../../../../api/categoryApi';
import { makeStyles } from '@mui/styles';


FilterByCategory.propTypes = {
    onChange: PropTypes.func
};

const useStyles = makeStyles((theme) => ({
    root: {
        padding: useTheme().spacing(2),
        textAlign: 'left'
    },
    menu: {
        padding: '0',
        margin: '0',
        listStyleType: 'none',
        marginTop: useTheme().spacing(1),
        transition: "all .25s",
        '& li': {
            '&:hover': {
                cursor:'pointer',
                color: useTheme().palette.primary.main
            }
        }
    },
}))

function FilterByCategory({onChange}) {
    const [categoryList, setCategoryList] = useState([]);
    const classes = useStyles();
    useEffect(() => {
        (async() => {
            try {
                const list = await categoryApi.getAll();
                setCategoryList(list.map(x => ({
                    id: x.id,
                    name: x.name
                })));
            } catch (error) {
                console.log("false category lmao", error);
            }
        })()
    }, [])
    const handleCategoryClick = (category) => {
        if(onChange) {
            onChange(category.id);
        }  
    };
    return (
        <Box className={classes.root}>
            <Typography variant='subtitle1'>
                Category
            </Typography>
            <ul className={classes.menu}>
                {categoryList.map(category => 
                    <li key={category.id} onClick={() => handleCategoryClick(category)}>
                        <Typography variant='body2'>
                            {category.name}
                        </Typography>
                    </li>    
                )}
            </ul>
        </Box>
    );
}

export default FilterByCategory;