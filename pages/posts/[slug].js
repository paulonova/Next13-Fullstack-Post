import { useRouter } from "next/router";
import React from "react";
import PostContent from "@/components/PostContent";
import { getFeaturedPosts } from "@/lib/post-util";

function SinglePostPage({ posts }) {
  const router = useRouter();

  return (
    <div>
      <PostContent post={posts} />
    </div>
  );
}

export function getStaticProps({ params }) {
  const featuredPosts = getFeaturedPosts();
  const post = featuredPosts.find((post) => post.slug === params.slug);

  return {
    props: {
      posts: post,
    },
  };
}

export async function getStaticPaths() {
  const featuredPosts = getFeaturedPosts();

  // Aqui você mapeia os posts para obter os slugs
  const paths = featuredPosts?.map((post) => ({
    params: { slug: post.slug },
  }));

  return {
    paths: paths,
    fallback: true,
  };
}

export default SinglePostPage;
