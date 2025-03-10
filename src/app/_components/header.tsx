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
            src="mug-icon.png"
            alt="logo"
            width={140}
            height={140}
            className="filter-dark image-pixelated"
          />
          <Image
            src="black-mug2.png"
            alt="black-mug"
            width={140}
            height={140}
            className="filter-dark image-pixelated"
          />
          <Image
            src="darth-vader3.png"
            alt="logo"
            width={240}
            height={240}
            className="filter-dark image-pixelated"
          />
          <Image
            src="darth-vader4.png"
            alt="logo"
            width={240}
            height={240}
            className="filter-dark image-pixelated"
          />
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
    </div>
  );
};

export default Header;
