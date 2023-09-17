import React from 'react';
import PropTypes from 'prop-types';

AlbumList.propTypes = {
    albumList: PropTypes.array,
};

AlbumList.defaultProps = {
    albumList: [],
}

function AlbumList({albumList}) {
    return (
        <ul className="AlbumList">
            {albumList.map(album => (
                <li key={album.id}>
                    <span>{album.name}</span>
                    <img src={album.thumbnailUrl} alt='' ></img>
                </li>
            ))}
        </ul>
    );
}

export default AlbumList;