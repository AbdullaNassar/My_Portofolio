import myPic from "../../puplic/Group.png";
function Hero() {
  return (
    <div className="mt-10 flex flex-grow flex-col items-center justify-center px-[10%]  md:px-[20%]  lg:flex-row lg:justify-between">
      <div>
        <h1 className="text-white mb-4 text-3xl font-bold leading-[1.2] md:text-5xl ">
          Hello, my name is Abdullah Moemen
        </h1>
        <p className="text-white leading-[1.8] opacity-75">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
          consectetur quos veniam numquam inventore repudiandae saepe voluptas,
          laborum ipsam ratione, eos dolor, vero doloribus itaque! Voluptate
          temporibus iste quidem ducimus.
        </p>
        <button>Projects</button>
      </div>

      <div className="">
        {/* abdbadbda */}
        <img className="" src={myPic} alt="aasaa" />
      </div>
    </div>
  );
}
export default Hero;
