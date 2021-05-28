//import axios from 'axios';
import React, { Component } from 'react';
import './App.css';
import VideoPlayer from './VideoPlayer/videoPlayer';
import SearchBar from './SearchBar/searchbar';
import SuggestedVideos from './SuggestedVideos/suggestedVideos';
import Comment from './Comment/comments';
import axios from 'axios';


class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            AllVideos: [] ,
            videoById:'fZcYMQG3FBI',
            View: 'video', // or search,
            RecomendedVideos : [],
        }
    }

  setCurrentVidoTo(videoID){
    this.setState({
      videoById: videoID
    })
  }



  async getRecomdations(){
    const curretnVideo = this.state.videoById
    const response = await axios.get("https://www.googleapis.com/youtube/v3/search",{params: {
              key:"AIzaSyCRqFOe1lGNltYuiupQWPkVwBtxYrk2rsg",
              type: "video",
              relatedToVideoId: curretnVideo,
              maxResults: 20,
             }})
    console.log(response.data.items);
    console.log('succesfully obtained the list')
    const recomendedVideoID= response.data.items.map((video) => {return video.id.videoId});
    console.log(recomendedVideoID)
    this.setState({
      RecomendedVideos: recomendedVideoID
    });
     }

componentDidMount(){
  this.getRecomdations()
}
  

    render() { 
      // maybe adda nother render view called SearchView and dio some logic to be able to flip between the two. propbably on the onsubmit functinality to change the state. view in th main pp. propbably throuigh passing a function down with with rops.
      
        return ( 
          
        // <div class= "VideoView" style={{color: "white"}}>
        //   <div class="NavigationBar" style={{background: "teal"}}>
        //     <SearchBar id="search"/>
        //   </div>
        //   <div class="VideoPlayer" style={{background: "orange"}}>
        //       <VideoPlayer/>
        //   </div>
        //   <div className="AddComment" style={{background: "white"}}>
        //     <Comment />
        //   </div>
        //   <div class="Recomended" style={{background: "grey"}}>
        //     <SuggestedVideos  recomendedVideos={this.state.RecomendedVideos} videoID={this.state.videoById} />
        //   </div>
        //   <div class="Footer" style={{background: "brown"}}>
        //     Footer
        //   </div>

        // </div>


        <div class="searchView">
          <div class="NavigationBar" style={{background: "teal"}}>
            <SearchBar id="search"/>
          </div>
          <div class="SearchBody" style={{background: "white"}}>
            TBD
          </div>
          <div class="Footer" style={{background: "brown"}}>
           Footer
          </div>
          </div>

         );
    }
}
 
export default App;




    

