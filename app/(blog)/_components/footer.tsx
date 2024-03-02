import Link from "next/link";

const Footer = () => {
  return (
    <div className=" h-10 mt-10">
      <nav>
        <ul className="flex justify-center items-center space-x-4">
          <li>
            <Link href="/">Contacto</Link>
          </li>
          <li>
            <Link href="/">GitHub</Link>
          </li>
          <li>
            <Link href="/">LinkedIn</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Footer;
