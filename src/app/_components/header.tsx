import Link from "next/link";

const Header = () => {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight mb-20 mt-8 flex items-center">
      <Link href="/" className="hover:underline">
        Blog
      </Link>
      <img src="/assets/mug-icon.png" alt="Mug Icon" className="fill-red-50" />
    </h2>
  );
};

export default Header;
