import fs from "fs";
import path from "path";
import Image from "next/image";
import Container from "@/app/_components/container";

export default function Gallery() {
  const images = fs.readdirSync(path.join(process.cwd(), "/public/gallery"));

  return (
    <Container>
      <h2 className="text-center">Gallery</h2>
      <div className="flex justify-center mt-8">
        <div className="grid grid-cols-3 gap-1 max-w-[800px]">
          {images.map((image) => (
            <div key={image}>
              <Image
                src={`/gallery/${image}`}
                alt={image}
                width={200}
                height={200}
                className="filter-dark image-pixelated aspect-square object-scale-down"
              />
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
