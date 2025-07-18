import { FaSquareFacebook } from "react-icons/fa6";
import myPic from "../../puplic/Group.png";
import stars from "../images/stars.png";
import { SiLinkedin } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
function Hero() {
  return (
    <div className=" mx-auto mt-10 flex w-[80%] flex-grow flex-col items-center justify-center gap-4  lg:flex-row lg:justify-between">
      <div className="relative flex flex-col items-center justify-center">
        <h1 className=" mb-4 min-w-fit text-xl font-bold leading-[1.2] text-white sm:text-3xl md:text-4xl ">
          Hello, I'm Abdullah Moemen
        </h1>
        <p className="text-l leading-[1.8] tracking-[5px] text-white opacity-75 sm:text-xl sm:tracking-[10px]">
          Full Stack Developer
        </p>
        <div className="mt-8 flex items-center  gap-8 text-lg">
          <div className="text-y flex gap-4 text-2xl">
            <a
              className="hover:-translate-y-0.5 hover:text-yellow"
              href="https://github.com/AbdullaNassar"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>
            <a
              className="hover:-translate-y-0.5 hover:text-yellow"
              href="https://www.linkedin.com/in/abdallah-moemen/"
              target="_blank"
              rel="noreferrer"
            >
              <SiLinkedin />
            </a>
          </div>
          <a
            href="https://drive.google.com/file/d/1YNp_LH306DI35xKCyo_Es0WLj77sI2Ue/view?usp=sharing"
            rel="noreferrer"
            target="_blank"
            className=" cursor-pointer border-2 border-yellow px-4 py-2 transition-all hover:bg-yellow "
          >
            Dawnload CV
          </a>
        </div>
      </div>

      <div className="fade-in-right h-[20rem] md:h-[30rem]">
        {/* abdbadbda */}
        <img className="h-[100%]" src={myPic} alt="My Picture" />
      </div>
    </div>
  );
}
export default Hero;
