import Container from "@/app/_components/container";
import { getAllPosts, getBasePath } from "@/lib/api";

export default function Index() {
  const allPosts = getAllPosts();

  return (
    <main>
      <Container>
        {allPosts.map((post) => (
          <div key={post.slug} className="my-2">
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
