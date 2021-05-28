import React, { Component } from 'react';
import './comments.css'

class Comment extends Component {
    state = {
        video_id: '',
        body: '',
        comment: '',
        comment_likes: '',
        comment_dislikes: '',
        reply: ''
     }

     handleCommentChange = (event) =>{
         this.setState({
            [event.target.video]: event.target.value
        })
    }

    handleCommentSubmit = (event) =>{
        event.preventDefault();

        const newComment = {
             //video: 'some video reference',
             body: this.state.body,
         }
         this.props.Comment(newComment);
     };

    componentDidMount() {
    axios.get("http://127.0.0.1:8000/comment/")
    console.log(res.data)
            this.setState({comments: res.data})
    }
    render() {
        return (
            // We can add a thumbs up and down icon to the likes and dislike later. Right now im going to make
            // it possible to increment likes and dislikes. I need to add logic to keep the user from being able
            // like and dislike more than once. They need the ablity to make many comments and many replies to the
            // comments.
            <div>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <div>
                        <label>Comment</label>
                        <input type="text" name="body" onChange={(event) => this.handleChange(event)}/>
                    </div>                
                    <button type="submit" >Comment</button>                    
                </form>
            </div>
         );
    }
}

export default Comment;