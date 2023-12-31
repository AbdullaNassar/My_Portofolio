function Header() {
  return (
    <div className="flex items-center justify-between bg-secondary px-4 py-3 text-white sm:px-10 md:px-20">
      <h2 className="fade-in text-md font-semibold sm:text-xl md:text-2xl ">
        Abdullah{" "}
      </h2>
      <ul className="fade-in flex gap-4 text-sm font-medium transition-all sm:text-lg  md:gap-8">
        <li className="hover:text-yellowlight">
          <a href="#about">About</a>
        </li>
        <li className="hover:text-yellowlight">
          <a href="#projects">Projects</a>
        </li>
        <li className="hover:text-yellowlight">
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  );
}
export default Header;
