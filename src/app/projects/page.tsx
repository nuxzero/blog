import Link from "next/link";

export default function Projects() {
  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-center font-bold text-lg">Projects</h1>
      <div className="mt-4 flex items-center justify-center">
        <Link href="/projects/gallery" className="hover:underline">
          [ Gallery ] - Halftone bitmap images.
        </Link>
      </div>
    </div>
  );
}
