import React from "react";
import PostItem from "../PostItem";
import styles from "./PostsGrid.module.css";

function PostsGrid({ posts }) {
  console.log("POST GRID: ", posts);
  return (
    <>
      <ul className={styles.grid}>
        {posts?.map((post) => (
          <PostItem post={post} key={post.slug} />
        ))}
      </ul>
    </>
  );
}

export default PostsGrid;
