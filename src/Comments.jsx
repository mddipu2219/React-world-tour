import { useEffect, useState } from "react";
import Comment from "./Comment";
import "./Comment.css";

const Comments = () => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);
  return (
    <div className="Style">
      <p>Comments:{comments.length}</p>
      {comments.map((comment) => (
        <Comment key={comment.id} comment={comment}></Comment>
      ))}
    </div>
  );
};

export default Comments;
