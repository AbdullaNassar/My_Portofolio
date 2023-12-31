import paint from "../images/paint.png";
import { FaGithub } from "react-icons/fa";
import { SiLinkedin } from "react-icons/si";
import { FaSquareFacebook } from "react-icons/fa6";
import { IoBookOutline, IoGitCommitOutline } from "react-icons/io5";
import Heading from "./Heading";
import Animation from "./Animation";
function About() {
  return (
    <div className="min-h-screen" id="about">
      <Animation>
        <Heading>About me</Heading>

        <div className="mt-8 flex h-[100%] flex-col justify-center gap-12 px-10 md:px-20 lg:mt-12 lg:flex-row-reverse">
          <div className="w-[100%]">
            <img src={paint} alt="about me" />
          </div>

          <div className="flex flex-col  font-semibold text-neutral-300 sm:text-xl">
            <span className="mb-4 leading-[1.6]">
              I am a front end developer, My focus is on delivering modern and
              responsive websites. Interested in performance and applying best
              practices.
            </span>

            <span className="mb-8 leading-[1.6]">
              Also, I'm Comptiteve Programmer, having a good foundation in data
              structure, algorithms, and problem-solving, solving more than
              +1000 problems on{" "}
              <a
                className="text-yellow underline opacity-70 hover:text-yellow3"
                href="https://codeforces.com/profile/abdallah_moemen"
                target="_blank"
                rel="noreferrer"
              >
                Codeforces
              </a>{" "}
              and{" "}
              <a
                className="text-yellow underline opacity-70 hover:text-yellow3"
                href="https://leetcode.com/abdullah_Nassar/"
                target="_blank"
                rel="noreferrer"
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
                <a
                  className="hover:-translate-y-0.5 hover:text-yellow"
                  href="https://www.facebook.com/abdallah.moemen.7/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaSquareFacebook />
                </a>
              </div>
            </div>
            <Animation>
              <div className="mb-8 mt-20 grid grid-cols-edu gap-x-6 gap-y-4 text-white">
                <span className="rounded-lg bg-primary2 px-4 py-3 text-yellow">
                  <IoBookOutline />
                </span>
                <h2 className="text-lg font-semibold capitalize md:text-3xl">
                  education
                </h2>

                <div className="mt-4 h-2 w-2 justify-self-center rounded-[50%] bg-yellow"></div>
                <div className="flex flex-col gap-2">
                  <h3>El-shrouk Academy</h3>
                  <span className="font-extralight text-yellow">2019-2023</span>
                  <p className="font-thin text-neutral-300 ">
                    Bachelor's degree in Computer Science
                  </p>
                </div>
              </div>
            </Animation>
          </div>
        </div>
      </Animation>
    </div>
  );
}

export default About;
