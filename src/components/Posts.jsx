import { useState } from "react";
import { postsData } from "./../Data/data.js";

function Posts() {
  const [postList, setPostList] = useState(postsData);

  const addLike = (postIndex) => {
    const newPostList = [...postList];
    newPostList[postIndex].likes += 1;
    setPostList(newPostList);
  };

  const removeLike = (postIndex) => {
    const newPostList = [...postList];
    if (newPostList[postIndex].likes > 0) {
      newPostList[postIndex].likes -= 1;
    }
    setPostList(newPostList);
  };

  return (
    <div class="app-wrapper">
      <h1 class="app-title">Posts</h1>
      <div class="post-list">
        {postList.map((item) => {
          return (
            <div class="post-item" key={item.id - 1}>
              <div class="post-header">
                <h2>{item.title}</h2>
                <div class="post-social-media-stats">
                  <span class="stats-topic">Likes: </span>
                  <span class="post-likes">{item.likes}</span>
                </div>
              </div>
              <p class="post-content">{item.content}</p>
              <div class="post-actions">
                <button
                  class="like-button"
                  onClick={() => addLike(item.id - 1)}
                >
                  Like
                </button>
                <button
                  class="dislike-button"
                  onClick={() => removeLike(item.id - 1)}
                >
                  Dislike
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Posts;
