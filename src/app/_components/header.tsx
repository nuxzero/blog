import AsciiArt from "./ascii-art";
import Link from "next/link";

const Header = () => {
  return (
    <div className="text-center justify-center">
      <h2 className="text-center justify-center text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 flex items-center">
        <Link href="/" className="hover:underline">
          <AsciiArt fileName="coffee-mug" />
          nux
        </Link>
      </h2>
    </div>
  );
};

export default Header;
