import FeaturedPosts from "@/components/FeaturedPosts";
import Hero from "@/components/Hero";
import { getFeaturedPosts } from "@/lib/post-util";

function Home({ posts }) {
  return (
    <main>
      <div>
        <Hero />
        <FeaturedPosts posts={posts} />
      </div>
    </main>
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

export default Home;
