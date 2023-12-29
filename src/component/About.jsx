import paint from "../images/paint.png";
// import { IoGitCommitOutline } from "react-icons/io5";
function About() {
  return (
    <div className="h-screen">
      <h1 className=" mx-auto w-fit text-center  font-bold uppercase tracking-[5px] opacity-70 md:text-4xl">
        About me
      </h1>

      <div className="flex h-[100%] flex-col justify-center gap-12 px-10 md:px-20 lg:mt-36 lg:flex-row">
        <div className="text-mostafa flex   flex-col font-semibold sm:text-xl">
          <span className="mb-4 leading-[1.6]">
            Hello There! My Name Is Abdullah Moemen. My focus is on delivering
            modern and responsive websites. Interested in performance and
            applying best practices.
          </span>

          <span className="mb-8 leading-[1.6]">
            Also, I'm Comptiteve Programmer, having a good foundation in data
            structure, algorithms, and problem-solving, solving more than +1000
            problems on{" "}
            <a
              className="text-neutral-300 underline"
              href="https://codeforces.com/profile/abdallah_moemen"
              target="_blank"
            >
              Codeforces
            </a>{" "}
            and{" "}
            <a
              className="text-neutral-300 underline"
              href="https://leetcode.com/abdullah_Nassar/"
              target="_blank"
            >
              Leetcode
            </a>{" "}
            which allows me to approach challenges with an problem solver
            mindset, always striving for efficient solutions.
          </span>

          <h2 className="text-neutral-100 opacity-80">
            Connect With Me On My Socials!
          </h2>
        </div>

        <div className="w-[100%]">
          <img src={paint} alt="about me" />
        </div>
      </div>
    </div>
  );
}

export default About;
