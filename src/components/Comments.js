import React, { useState } from 'react'
//  import { submitComment } from './services/CommentService';
import { submitComment } from './services/CommentService';
const Comments = (props) => {
    const [comment, setComment] = useState('');
    const handleChange = (e) => {
        setComment(e.target.value);
        console.log(comment);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("movieid", props)
        console.log("entered", comment);
        const data = {
            message: comment,
            commentor: null,
            movieId: props
        }
        submitComment(data);
        const res = await submitComment(data);
        console.log("2020", res);

    }
    return (
        <div>
            <form onSubmit={handleSubmit} >
                <textarea onChange={handleChange} value={comment} placeholder='Write a comment'></textarea>
                <button type="submit" onClick={handleSubmit}>Submit</button>

                {/* <label for="comments">Enter Comment</label> */}
                {/* <input name="comments" placeholder="enter comment" type="text" value={comment} onChange={handleChange} /> */}
                {/* <button onClick={() => submitComment}>Submit</button> */}
            </form>
        </div>
    )
}

export default Comments
