import Container from "@/app/_components/container";
import { getAllPosts, getBasePath } from "@/lib/api";
import Header from "./_components/header";

export default function Index() {
  const allPosts = getAllPosts();

  return (
    <main>
      <Container>
        <Header />
        {allPosts.map((post) => (
          <div key={post.slug} className="mb-8">
            <a href={`${getBasePath()}/posts/${post.slug}`}>
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
