import FeaturedPosts from "@/components/FeaturedPosts";
import Hero from "@/components/Hero";

export default function Home({ posts }) {
  const DUMMY_POSTS = [
    {
      slug: "getting-started-with-nextjs",
      title: "Lorem ipsum dolor sit amet",
      image: "getting-started-nextjs.png",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "2022-02-10",
    },
    {
      slug: "getting-started-with-nextjs2",
      title: "Lorem ipsum dolor sit amet",
      image: "getting-started-nextjs.png",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "2022-10-22",
    },
    {
      slug: "getting-started-with-nextjs3",
      title: "Lorem ipsum dolor sit amet",
      image: "getting-started-nextjs.png",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "2023-07-23",
    },
    {
      slug: "getting-started-with-nextjs4",
      title: "Lorem ipsum dolor sit amet",
      image: "getting-started-nextjs.png",
      excerpt:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "2023-12-25",
    },
  ];
  return (
    <main>
      <div>
        <Hero />
        <FeaturedPosts posts={DUMMY_POSTS} />
      </div>
    </main>
  );
}
