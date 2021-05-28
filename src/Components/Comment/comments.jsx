import React, { Component } from 'react';
import './comments.css'

class Comment extends Component {
    state = {
        id: '',
        video: '',
        body: '',
        comment: '',
        comment_likes: '',
        comment_dislikes: '',
        reply: ''
     }

     handleChange = (event) =>{
         this.setState({
            [event.target.video]: event.target.value
        })
    }

    handleCommentSubmit = (event) =>{
        event.preventDefault();

        const newComment = {
             //video: 'some video reference',
             body: this.state.body,
             comment_likes: this.state.comment_likes,
             comment_dislikes: this.state.comment_dislikes,
         }
         this.props.Comment(newComment);
     };

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