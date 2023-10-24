import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

pagination.propTypes = {
    onChange: PropTypes.func,
    count: PropTypes.number,
    page: PropTypes.number,
    pageSize: PropTypes.number
};

pagination.defaultProps = {
    pageSize: 3
};

function pagination({onChange, count, page, pageSize}) {
    const onNext = () => {
        onChange(page + 1);
    };
    
    const onPrevious = () => {
        onChange(page - 1);
    };

    const begin = () => {
        if(pageSize>=count) return 0;
        let result = page - Math.round(pageSize/2);
        if(page<=Math.round(pageSize/2)) {
            result =0;
        } else if(page>count-Math.round(pageSize/2)) {
            result = count - pageSize;
        }       
        return result;
    };

    const startPageNumber = begin();
    const last = () => {
        if(pageSize>=count) return count;
        return startPageNumber+pageSize;
    };
    const lastPageNumber =last();
    const styleStartNumber = startPageNumber+1 < 2? {display: 'none'} :{} ;
    const styleEndNumber = lastPageNumber +1 >count ? {display: 'none'} :{};
    const shouldShowDotLeft = startPageNumber+1 <= 2? {display: 'none'} :{} ;
    const shouldShowDotRight = lastPageNumber +1 >= count? {display: 'none'} :{} ;

    return (
        <ul className='pagination'>
            <li><button className={`button pref ${page === 1 ? 'disabled': ''}`} onClick={() => onPrevious()}>&#60;</button></li>
            <li style={styleStartNumber}>
                <button className={`number${page===1?" current-number-page":""}`} onClick={() => onChange(1)}>
                    {1}
                </button>
            </li>
            <li style={shouldShowDotLeft}>...</li>
            {Array.from(new Array(pageSize)).map((x, index) =>(
                <li key={index}>
                    <button className={`number${page===startPageNumber+index+1?" current-number-page":""}`} onClick={() => onChange(startPageNumber + index+1)}>
                        {startPageNumber + index+1}
                    </button>
                </li>      
            ))}
            <li style ={shouldShowDotRight}>...</li>
            <li style ={styleEndNumber}>
                <button className={`number${page===count?" current-number-page":""}`} onClick={() => onChange(count)}>
                    {count}
                </button>
            </li>
            <li><button className={`button next ${page === count ? 'disabled': ''}`} onClick={() => onNext()}>&#62;</button></li>
        </ul>
        
    );
}

export default pagination;