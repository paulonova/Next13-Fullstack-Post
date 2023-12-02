import React from "react";
import styles from "./AllPosts.module.css";
import PostsGrid from "@/components/PostsGrid";
import { getFeaturedPosts } from "@/lib/post-util";

function AllPosts({ posts }) {
  return (
    <section className={styles.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={posts} />
    </section>
  );
}

export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
  };
}

export default AllPosts;
