import { useState } from "react";
import { data } from "../data/post";

function Posts() {
  const [postLike, setPostLike] = useState(data);

  const handleLike = (id) => {
    let newLike = [...postLike];
    newLike[id].likes = newLike[id].likes + 1;
    setPostLike(newLike);
  };

  const handleDelete = (id) => {
    const deleteLike = [...postLike];
    if (deleteLike[id].likes > 0) {
      deleteLike[id].likes = deleteLike[id].likes - 1;
      setPostLike(deleteLike);
    }
    console.log(id);
  };

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Posts</h1>
      <div className="post-list">
        {data.map((detail) => (
          <div className="post-item" key={detail.id - 1}>
            <div className="post-header">
              <h2>{detail.title}</h2>
              <div className="post-social-media-stats">
                <span className="stats-topic">Likes: </span>
                <span className="post-likes">{detail.likes}</span>
              </div>
            </div>
            <p className="post-content">{detail.content}</p>
            <div className="post-actions">
              <button
                className="like-button"
                onClick={() => handleLike(detail.id - 1)}
              >
                Like
              </button>
              <button
                className="dislike-button"
                onClick={() => handleDelete(detail.id - 1)}
              >
                Dislike
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;
