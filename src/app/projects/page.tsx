import Link from "next/link";

export default function Projects() {
  return (
    <div>
      <h1 className="text-center font-bold text-lg">Projects</h1>
      <ul>
        <li>
          <Link href="/projects/gallery" className="hover:underline">
            Gallery
          </Link>
        </li>
      </ul>
    </div>
  );
}
