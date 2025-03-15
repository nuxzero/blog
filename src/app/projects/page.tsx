import Link from "next/link";

export default function Projects() {
  return (
    <div>
      <h1>Projects</h1>
      <ul>
        <li>
          <Link href="/projects/gallery">Gallery</Link>
        </li>
      </ul>
    </div>
  );
}
