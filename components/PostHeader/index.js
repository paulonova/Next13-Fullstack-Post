import React from "react";
import styles from "./PostHeader.module.css";
import Image from "next/image";

function PostHeader({ post }) {
  const imagePath = `/images/posts/${post?.image}`;
  console.log("URL: ", imagePath);
  return (
    <header className={styles.header}>
      <h1>{post?.title}</h1>
      {post && (
        <Image src={imagePath} alt={post.title} width={200} height={150} />
      )}
    </header>
  );
}

export default PostHeader;
