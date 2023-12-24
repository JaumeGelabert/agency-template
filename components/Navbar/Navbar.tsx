import Logo from "../Logo/Logo";
import NavbarCTA from "./NavbarCTA";
import NavbarLinks from "./NavbarLinks";

export default function Navbar() {
  return (
    <div className="flex flex-row justify-center items-center w-full py-4">
      <div className="max-w-[1500px] w-full">
        <nav className="grid grid-cols-2 sm:grid-cols-3 px-6 w-full">
          <div className="flex flex-row justify-start items-center">
            <Logo size="h-7 w-7" withText />
          </div>
          <div className="hidden sm:flex flex-row justify-center">
            <NavbarLinks />
          </div>
          <div className="flex flex-row justify-end items-center gap-2">
            <NavbarCTA />
          </div>
        </nav>
      </div>
    </div>
  );
}
