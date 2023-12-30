function Heading({ children }) {
  return (
    <h1 className="relative mx-auto mt-8 w-fit border-b-2 border-b-yellow text-center  font-bold uppercase tracking-[5px] opacity-70 md:text-4xl">
      <span className="block pb-2 ">{children}</span>
      <div className=" absolute left-[50%] top-[44px] h-[10px] w-[10px] translate-x-[-50%] rounded-[50%] bg-yellow"></div>
      {/* <hr className="text-yellow" /> */}
    </h1>
  );
}
export default Heading;
