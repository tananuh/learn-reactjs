import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/Album';
import './styles.scss';
AlbumFeature.propTypes = {
    
};

function AlbumFeature(props) {
    const albumList =[
        {
            id: 1,
            name: 'Chill hits',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/9/2/e/3/92e34e8a92ba589ba41c078bfbbf57f0.jpg'
        },{
            id: 2,
            name: 'Acoustic Thư giãn',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/1/7/3/c/173ce5cfc42b83b9ebe59d4441fbae60.jpg'
        },{
            id: 3,
            name: 'Lofi một chút thôi',
            thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/2/4/5/3/24538985249cd4d3b324b4a4a09ad288.jpg'
        },
    ];
    return (
        <div>
            <h3>
                Album List
            </h3>
            <AlbumList albumList ={albumList}/>
        </div>
    );
}

export default AlbumFeature;