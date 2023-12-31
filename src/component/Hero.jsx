import myPic from "../../puplic/Group.png";
import stars from "../images/stars.png";
function Hero() {
  return (
    <div className=" mx-auto mt-10 flex w-[80%] flex-grow flex-col items-center justify-center gap-4  lg:flex-row lg:justify-between">
      <div className="relative flex flex-col items-center justify-center">
        <img className="absolute w-32  md:w-60" src={stars} alt="stars" />
        <h1 className="mb-4 min-w-fit text-2xl font-bold leading-[1.2] text-white sm:text-3xl md:text-4xl ">
          Hello, I'm Abdullah Moemen
        </h1>
        <p className="text-l leading-[1.8] tracking-[5px] text-white opacity-75 sm:text-xl sm:tracking-[10px]">
          Front End Developer
        </p>
        {/* <button>Projects</button> */}
      </div>

      <div className="h-[20rem] md:h-[30rem]">
        {/* abdbadbda */}
        <img className="h-[100%]" src={myPic} alt="My Picture" />
      </div>
    </div>
  );
}
export default Hero;
