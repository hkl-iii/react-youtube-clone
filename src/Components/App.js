//import axios from 'axios';
import React, { Component } from 'react';
import SearchView from './SearchView/searchView';
//import './App.css';
// import VideoPlayer from './VideoPlayer/videoPlayer';
// import SearchBar from './SearchBar/searchbar';
// import SuggestedVideos from './SuggestedVideos/suggestedVideos';
// import Comment from './Comment/comments';
//import SearchView from "./SearchView/searchView";
//import axios from 'axios';
import VideoView from './VideoView/videoView';


class App extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            AllVideos: [] ,
            videoById:'fZcYMQG3FBI',
            View: 'video', // or search,
            RecomendedVideos : [],
            searchResults: [],
            recomendationSnippets: [],
            thumbnail: ""
            
        }
    }

  setCurrentVidoTo(videoID){
    this.setState({
      videoById: videoID,
      view: 'video'
    })
  }

  handleSearch(searchResults){
    this.setState({
      searchResults: searchResults,
      View:"search",
    })
    console.log("search final destination")
    console.log(this.state.searchResults)
    console.log("success")
  }


  

    render() { 
      // maybe adda nother render view called SearchView and dio some logic to be able to flip between the two. propbably on the onsubmit functinality to change the state. view in th main pp. propbably throuigh passing a function down with with rops.
      
        if(this.state.View==='video'){
          return (
            <div>
              <VideoView handleSearch={(data)=>this.handleSearch(data)}/>
            </div>
          );
    }
        else if (this.state.View==='search'){
          return(
            <div>
              <SearchView />
            </div>
      );
    }
  }
}
 
export default App;
//   async getRecomdations(){
//     const curretnVideo = this.state.videoById
//     const response = await axios.get("https://www.googleapis.com/youtube/v3/search",{params: {
//               key:'AIzaSyD6u4DuW6kD0ZBMI791Z8exbPiDOJXUcWI',
//               type: "video",
//               relatedToVideoId: curretnVideo,
//               maxResults: 10,
//               part: 'snippet',
//              }})
//     console.log("recomended list: (populated on startup)")
//     console.log(response.data.items);
//     console.log('succesfully obtained the list')
//     const recomendedVideoID= response.data.items.map((video) => {return video.id.videoId});
//     const recomendationSnippets= response.data.items.map((video) => {return video.snippet});
//     const thumbnail= recomendationSnippets.map((video) => {return video.thumbnails.default.url});
//     console.log("the list of recomended vids. filtered by snippit")
//     console.log(recomendationSnippets)
//     this.setState({
//       RecomendedVideos: recomendedVideoID,
//       recomendationSnippets: recomendationSnippets,
//       thumbnail: thumbnail,
//     });
//     console.log(this.state.recomendationSnippets)
//     console.log(thumbnail)
//      }

// componentDidMount(){
//   this.getRecomdations()
// }
//   <div>
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
        //   <div class="Recomended" style={{background: "rgb(31, 31, 31)"}}>
        //     <SuggestedVideos recomendedVideos={this.state.recomendationSnippets} thumbnail={this.state.thumbnail} videoID={this.state.videoById} />
        //   </div>
        //   <div class="Footer" style={{background: "brown"}}>
        //     Footer
        //   </div>
        //   </div>
          
        
        // </div>


        // <div class="searchView">
        //   <div class="NavigationBar" style={{background: "teal"}}>
        //     <SearchBar id="search" handleSearch={this.SetCurrentSearchResult()}/>
        //   </div>
        //   <div class="SearchBody" style={{background: "white"}}>
        //     <SearchView searchResults={this.state.searchResults}/>
        //   </div>
        //   <div class="Footer" style={{background: "brown"}}>
        //    Footer
        //   </div>
        //   </div>