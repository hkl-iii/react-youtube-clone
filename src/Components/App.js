//import axios from 'axios';
import React, { Component } from 'react';
import SearchView from './SearchView/searchView';
import VideoView from './VideoView/videoView';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videoById:'fZcYMQG3FBI',
            View: 'video', // or search,
            searchResults: [],
            
        }
    }

  updateVideo(videoID){
    this.setState({
      videoById: videoID,
      View: 'video'
    })
  }

  handleSearch(searchResults){

    this.setState({
      searchResults: searchResults,
      View:'search',
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
              <VideoView handleSearch={(data)=>this.handleSearch(data)} videoId={this.state.videoById}/>
            </div>
          );
    }
        else if (this.state.View==='search'){
          return(
            <div>
              <SearchView searchResults={this.state.searchResults} selectVideo={(data)=>this.updateVideo(data)}/>
            </div>
      );
    }
  }
}
 
export default App;
