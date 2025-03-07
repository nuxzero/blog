import Image from "next/image";
import AsciiArt from "./ascii-art";
import Link from "next/link";

const Header = () => {
  return (
    <div className="text-center justify-center">
      <h2 className="text-center justify-center text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 flex items-center">
        <Link href="/" className="items-center">
          <Image
            src="mug-icon.png"
            alt="logo"
            width={140}
            height={140}
            className="filter-dark image-pixelated"
          />
          {/* <AsciiArt fileName="coffee-mug" /> */}
          <span>nux&nbsp;&nbsp;</span>
        </Link>
      </h2>
    </div>
  );
};

export default Header;
