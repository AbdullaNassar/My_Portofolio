import paint from "../images/paint.png";
import { FaGithub } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoGitCommitOutline } from "react-icons/io5";
function About() {
  return (
    <div className="h-screen">
      <h1 className="relative mx-auto mt-8 w-fit border-b-2 border-b-yellow text-center  font-bold uppercase tracking-[5px] opacity-70 md:text-4xl">
        <span className="block pb-2 ">About me</span>
        <div className=" absolute left-[50%] top-[44px] h-[10px] w-[10px] translate-x-[-50%] rounded-[50%] bg-yellow"></div>
        {/* <hr className="text-yellow" /> */}
      </h1>

      <div className="mt-8 flex h-[100%] flex-col justify-center gap-12 px-10 md:px-20 lg:mt-12 lg:flex-row">
        <div className="flex flex-col   font-semibold text-neutral-300 sm:text-xl">
          <span className="mb-4 leading-[1.6]">
            Hello There! My Name Is Abdullah Moemen. I am a front end developer,
            My focus is on delivering modern and responsive websites. Interested
            in performance and applying best practices.
          </span>

          <span className="mb-8 leading-[1.6]">
            Also, I'm Comptiteve Programmer, having a good foundation in data
            structure, algorithms, and problem-solving, solving more than +1000
            problems on{" "}
            <a
              className="text-yellow underline opacity-70"
              href="https://codeforces.com/profile/abdallah_moemen"
              target="_blank"
            >
              Codeforces
            </a>{" "}
            and{" "}
            <a
              className="text-yellow underline opacity-70"
              href="https://leetcode.com/abdullah_Nassar/"
              target="_blank"
            >
              Leetcode
            </a>{" "}
            which allows me to approach challenges with an problem solver
            mindset, always striving for efficient solutions.
          </span>
          <div>
            <h2 className="mb-4 text-yellow opacity-80">
              Connect With Me On My Socials!
            </h2>
            <div className="text-y flex gap-4 text-2xl">
              <a href="https://github.com/AbdullaNassar" target="_blank">
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/abdallah-moemen/"
                target="_blank"
              >
                <SiLinkedin />
              </a>
              <a
                href="https://www.facebook.com/abdallah.moemen.7/"
                target="_blank"
              >
                <FaSquareFacebook />
              </a>
            </div>
          </div>
        </div>

        <div className="w-[100%]">
          <img src={paint} alt="about me" />
        </div>
      </div>
    </div>
  );
}

export default About;
