import React from 'react';
import SongList from './SongList';
import Queue from './Queue';

const MainContainer = (props) => {
    console.log(props)
    // const {title, artist, favorite} = this.props
    // this is undefined
    
    return (
        <div className="simple-flex-row top">
            <SongList /> {/** TODO: What props do I need? */}
            <Queue /> {/** TODO: What props do I need? */}
        </div>
    )
}

export default MainContainer;