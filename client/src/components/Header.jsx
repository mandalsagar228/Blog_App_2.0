import { Button, Navbar, TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const Header = () => {
  const path = useLocation().pathname;
  return (
    <>
      <Navbar className=" border-b-2 ">
        <Link
          to="/"
          className=" self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white</Navbar>"
        >
          <span className=" px-2 py-1 bg-gradient-to-r from-indigo-500 via bg-purple-500 to-pink-500 rounded text-white">
            Sagar&apos;s{" "}
          </span>
          Blog
        </Link>
        <form>
          <TextInput
            type="text"
            placeholder="Search..."
            rightIcon={AiOutlineSearch}
            className="hidden lg:inline"
          />
        </form>
        <Button className=" w-12 h-10 lg:hidden" color="gray">
          <AiOutlineSearch />
        </Button>
        <div className=" flex gap-2 md:order-2">
          <Button className=" w-12 h-10 hidden sm:inline " color="gray">
            <FaMoon />
          </Button>
          <Link to="/sign-in">
            <Button gradientDuoTone="purpleToBlue">sign In</Button>{" "}
          </Link>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link active={path === "/"} as={"div"}>
            <Link to="/">Home</Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/about"} as={"div"}>
            <Link to="/about">About</Link>
          </Navbar.Link>
          <Navbar.Link active={path === "/project"} as={"div"}>
            <Link to="/project">projects</Link>
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default Header;
