//import axios from 'axios';
import React, { Component } from 'react';
import './App.css';
import VideoPlayer from './VideoPlayer/videoPlayer';
import SearchBar from './SearchBar/searchbar';
import SuggestedVideos from './SuggestedVideos/suggestedVideos';
import Comments from './Comment/comments';
import axios from 'axios';


class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            AllVideos: [] ,
            videoById:'',
        }
    }

    async componentDidMount(){
         const response = await axios.get("https://www.googleapis.com/youtube/v3/search?q=super hero&key=AIzaSyCRqFOe1lGNltYuiupQWPkVwBtxYrk2rsg")
        console.log(response.data.items[0].id.videoId)
        
    }


    render() { 
        return ( 
        <body class= "main" style={{color: "white"}}>
          <div class="NavigationBar" style={{background: "teal"}}>
            <SearchBar id="search"/>
          </div>
          <div class="VideoPlayer" style={{background: "orange"}}>
              <VideoPlayer/>
          </div>
          <div class="Comments" style={{background: "white"}}>
            <Comments />
          </div>
          <div class="Recomended" style={{background: "grey"}}>
            <SuggestedVideos  style={{background: "maroon"}}/>
          </div>
          <div class="Footer" style={{background: "brown"}}>
            Footer
          </div>

        </body>
         );
    }
}
 
export default App;