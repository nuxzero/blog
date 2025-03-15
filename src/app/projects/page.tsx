import Link from "next/link";
import Container from "@/app/_components/container";

export default function Projects() {
  return (
    <Container>
      <h1>Projects</h1>
      <ul>
        <li>
          <Link href="/projects/gallery">Gallery</Link>
        </li>
      </ul>
    </Container>
  );
}
