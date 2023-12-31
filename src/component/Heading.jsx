function Heading({ children }) {
  return (
    <h1 className="text2xl relative mx-auto mt-8 w-fit border-b-2 border-b-yellow  text-center font-bold uppercase tracking-[5px] opacity-70 sm:text-2xl md:text-4xl">
      <span className="block pb-2 ">{children}</span>
      <div className=" absolute left-[50%] top-[28px] top-[36px] h-[10px] w-[10px] translate-x-[-50%] rounded-[50%] bg-yellow md:top-[44px]"></div>
      {/* <hr className="text-yellow" /> */}
    </h1>
  );
}
export default Heading;
