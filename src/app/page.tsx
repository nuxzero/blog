import { getAllPosts, getBasePath } from "@/lib/api";

export default function Index() {
  const allPosts = getAllPosts();

  return (
    <main>
      <div className="max-w-2xl mx-auto px-2">
        {allPosts.map((post) => (
          <div key={post.slug} className="my-2">
            <a
              href={`${getBasePath()}/posts/${post.slug}`}
              className="flex justify-between hover:underline"
            >
              <span>{ellipsis(post.title, 70)}</span>
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}

function ellipsis(text: string, length: number) {
  return text.length > length ? text.substring(0, length) + "..." : text;
}
