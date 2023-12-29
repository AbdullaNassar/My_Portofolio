function Header() {
  return (
    <div className="text-white flex items-center justify-between bg-secondary px-10 py-3 md:px-20">
      <h2 className="text-xl font-semibold ">Abdullah </h2>
      <ul className="flex gap-4 md:gap-8">
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Projects</a>
        </li>
        <li>
          <a href="#">Contacts</a>
        </li>
      </ul>
    </div>
  );
}
export default Header;
