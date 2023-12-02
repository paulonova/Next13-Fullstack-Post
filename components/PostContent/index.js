import React from "react";
import styles from "./PostContent.module.css";
import PostHeader from "../PostHeader";
import ReactMarkdown from "react-markdown";

function PostContent({ post }) {
  console.log("POSTHEADER: ", post);
  return (
    <article className={styles.content}>
      <PostHeader post={post} />
      <ReactMarkdown>{post?.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
