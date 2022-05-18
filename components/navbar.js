import Link from "next/link";
const Navbar = () => {
  
  return (
    <>
      <nav className="navbar p-12">
        <ul className="flex space-x-10 text-lg justify-center font-bold capitalize ">
          <li>
            <Link href="/">
              <a>home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>about</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>contact</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a>blog</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
