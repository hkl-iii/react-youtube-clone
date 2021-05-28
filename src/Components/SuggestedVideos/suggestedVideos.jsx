import React from 'react';
//import './suggested.css'

function SuggestedVideos(props) {

    console.log("test")
    console.log(props.recomendedVideos)
    console.log("test complete. success")

    return (
        <div >
            <h1>Suggested Videos</h1>
            { 
            props.recomendedVideos.map((video)=> {
                return (
                <h4>{video}</h4>
                )}
            )} 

        </div>
    );
}
export default SuggestedVideos;