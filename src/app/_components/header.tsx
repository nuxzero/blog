import Image from "next/image";
import AsciiArt from "./ascii-art";
import Link from "next/link";

const Header = () => {
  const images = ["test2.png", "test3.png", "black-sabbath.png"];
  return (
    <div>
      <h2 className="text-center justify-center text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 flex items-center">
        <Link href="/" className="justify-center">
          <Image
            src="darth-vader5.png"
            alt="logo"
            width={200}
            height={200}
            className="filter-dark image-pixelated"
          />
          <br />
          <Image
            src="death-star.png"
            alt="logo"
            width={200}
            height={200}
            className="filter-dark image-pixelated"
          />
          <br />
          {images.map((image) => (
            <div>
              <Image
                src={image}
                alt={image}
                width={320}
                height={320}
                className="filter-dark image-pixelated"
              />
              <br />
            </div>
          ))}
          {/* <AsciiArt fileName="coffee-mug" /> */}
          <span>nux&nbsp;&nbsp;</span>
        </Link>
      </h2>
      <div>
        <ul>
          <li>
            <Link href="/">Posts</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
