import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

chip.propTypes = {
    onDelete: PropTypes.func,
    label: PropTypes.string,
    clickable: PropTypes.bool,
    onClick: PropTypes.func,
    color: PropTypes.string
};


function chip({onDelete, label, clickable, onClick, color}) {
    const closeButtonStyle = clickable? {display: 'none'} :{} ;
    const colorStyles =[{
        name: 'primary',
        value: 'blue'
    },
    {
        name: 'default',
        value: 'rgba(0, 0, 0, 0.12)'
    }];
    const chipStyleColor = colorStyles.find(colorStyle => {
        return colorStyle.name === color;
      }).value;
    const chipStyle = {background:chipStyleColor};
    return (
        <div className="chip" onClick={onClick} style={chipStyle}>
            <button className="close" onClick={onDelete} style={closeButtonStyle}>x</button>
            <span>{label}</span>
        </div>
        
    );
}

export default chip;