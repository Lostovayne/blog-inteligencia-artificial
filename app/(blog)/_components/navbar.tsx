import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { RiGithubFill, RiInstagramFill, RiLinkedinBoxFill } from "react-icons/ri";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between h-20 pr-2 lg:p-0 max-w-screen-xl mx-auto ">
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={130} height={50} className="lg:h-60 w-auto" />
      </Link>
      <div>
        <div className="space-x-2 items-center flex">
          <Button asChild variant={"ghost"} size={"icon"} className="cursor-pointer">
            <Link href="https://github.com/Emjey25">
              <RiGithubFill className="w-8 h-8 text-pink-600 hover:text-white" />
            </Link>
          </Button>
          <Button asChild variant={"ghost"} size={"icon"} className="cursor-pointer">
            <Link href={"https://www.linkedin.com/in/majocausildev25"}>
              <RiLinkedinBoxFill className="w-8 h-8 text-pink-600 hover:text-white" />
            </Link>
          </Button>
          <Button asChild variant={"ghost"} size={"icon"} className="cursor-pointer">
            <Link href={"https://www.instagram.com/mary_josephdev"}>
              <RiInstagramFill className="w-8 h-8 text-pink-600 hover:text-white" />
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
