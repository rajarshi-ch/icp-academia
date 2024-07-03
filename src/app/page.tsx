import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import MoreStories from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";
import Hero from "./_components/hero";
import { Providers } from "./providers";

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <Providers>
      <main>
        <Container>
          <Hero />
          {/* <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          /> */}
          {morePosts.length > 0 && <MoreStories />}
        </Container>
      </main>
    </Providers>
  );
}
