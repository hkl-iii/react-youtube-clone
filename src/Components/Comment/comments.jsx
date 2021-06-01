import React, { Component } from 'react';
import './comments.css';

class Comment extends Component {
    constructor(props) {
        super(props);
            this.state = {
                video_id: '',
                body: '',
             }
        }
    handleChange = (event) =>{
        this.setState({
        body: event.target.value
        });
        console.log("comment content test:")
        console.log(this.state.body)
        console.log("end of test")
        };

    handleCommentSubmit = (event) =>{
        event.preventDefault();

        const newComment = {
            video_id: this.props.videoId,
            body: this.state.body,
            comment_likes: 0,
            comment_dislikes: 0,
        }
        //  this.props.Comment(newComment);
     };

    // componentDidMount() {
    // axios.get("http://127.0.0.1:8000/comment/")
    // console.log(response.data)
    //      this.setState({comments: response.data})
    // }
    render() {
        return (
           
           
            // We can add a thumbs up and down icon to the likes and dislike later. Right now im going to make
            // it possible to increment likes and dislikes. I need to add logic to keep the user from being able
            // like and dislike more than once. They need the ablity to make many comments and many replies to the
            // comments.
           
           
           <div>
                <form className="commentForm" onSubmit={(event) => this.handleSubmit(event)}>
                    <div>
                        <label>Comment</label>
                    </div> 
                    <div>
                        <input type="text" name="body" onChange={(event) => this.handleChange(event)}/>
                    </div>
                                   
                    <button type="submit" >Comment</button>
                    <button onClick="" >Like</button>                    
                    <button onClick="" >Dislike</button>                    
                    
                </form>
            </div>
         );
    }
}

export default Comment;