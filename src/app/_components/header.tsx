import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div>
      <div className="text-center justify-center tracking-tight md:tracking-tighter leading-tight mb-8 mt-8 flex items-center">
        <Link href="/" className="justify-center">
          <Image
            src="/death-star2.png"
            alt="logo"
            width={140}
            height={140}
            className="filter-dark image-pixelated"
          />
          <h1 className="font-size-2xl font-bold mt-6">BLACK BLOG</h1>
          <p className="mt-1">An ordinary blog.</p>
        </Link>
      </div>
      <div className="flex items-center justify-center space-x-8">
        <Link href="/" className="hover:underline">
          Posts
        </Link>
        <Link href="/projects" className="hover:underline">
          Projects
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>
      </div>
    </div>
  );
};

export default Header;
