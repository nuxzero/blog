import Container from "@/app/_components/container";
import { getAllPosts } from "@/lib/api";
import Header from "./_components/header";

export default function Index() {
  const allPosts = getAllPosts();

  return (
    <main>
      <Container>
        <Header />
        {allPosts.map((post) => (
          <div key={post.slug}>
            <a href={`/posts/${post.slug}`}>
              <span>
                {post.title} - {post.date}
              </span>
            </a>
          </div>
        ))}
      </Container>
    </main>
  );
}
