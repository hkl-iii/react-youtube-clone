import React from 'react';
import './suggested.css'

function SuggestedVideos(props) {

    return (
        <div class= "SuggestedVideos" >
            <h1>Recomended</h1>
            { 
            props.recomendedVideos.map((video)=> {
                return (
                    <div class="snippet" >
                        <img class="thumbnail" src={video.thumbnails.medium.url} alt="thumbnail"/>
                    <div class="VideoInfo">
                        <h5 display="grid">{video.title}</h5><br/>
                        <h6 display="grid">{video.channelTitle}</h6>
                    </div>
                    
                    </div>

                )}
            )} 

        </div>
    );
}
export default SuggestedVideos;