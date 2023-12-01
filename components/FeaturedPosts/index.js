import React from "react";
import styles from "./FeaturedPosts.module.css";
import PostsGrid from "../PostsGrid";

function FeaturedPosts({ posts }) {
  return (
    <section className={styles.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}

export default FeaturedPosts;
