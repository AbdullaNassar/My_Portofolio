import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Heading from "./Heading";
import { FaPhoneAlt } from "react-icons/fa";
import contact2 from "../images/contact2.png";

function Contact() {
  return (
    <div className="mt-24 min-h-screen">
      <Heading>Contact</Heading>
      <div className="mt-12 flex flex-col justify-center px-4 sm:items-center">
        <label className="mt-4 flex min-w-[30%] items-center border-b-2 border-neutral-500 pb-2 pl-2 font-semibold">
          <span className="text-yellow">
            <FaLocationDot />
          </span>
          : Egypt
        </label>
        <label className="mt-4 flex min-w-[30%] items-center border-b-2 border-neutral-500 pb-2 pl-2 font-semibold">
          <span className="text-yellow">
            <MdEmail />
          </span>
          : abdallahmoemen44@gmail.com
        </label>
        <label className="mt-4 flex min-w-[30%] items-center border-b-2 border-neutral-500 pb-2 pl-2 font-semibold">
          <span className="text-yellow">
            <FaPhoneAlt />
          </span>
          : +201063698275
        </label>
      </div>

      <div className=" mt-20 flex flex-col justify-center gap-16 px-4 sm:px-24 md:flex-row">
        <div className="flex flex-col">
          <h2 className="text-3xl font-bold md:text-4xl">Got a Project in</h2>
          <span className="text-3xl font-bold text-yellow md:text-4xl">
            mind?
          </span>
          <img
            className="w-[50%] self-end"
            src={contact2}
            alt="Contact Picture"
          />
        </div>
        <form className="flex flex-col gap-2">
          <div className="flex flex-col gap-4 md:flex-row">
            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="name">
                Your name
              </label>
              <input
                className="bg-primaryLight min-h-10 rounded-md px-2 py-1 text-neutral-300 focus:ring-1 focus:ring-yellow focus:ring-offset-2"
                id="name"
                placeholder="Name"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-medium" htmlFor="email">
                Your Email
              </label>
              <input
                className="bg-primaryLight min-h-10 rounded-md px-2 py-1 text-neutral-300 focus:ring-1 focus:ring-yellow focus:ring-offset-2"
                id="email"
                type="email"
                placeholder="Email"
              />
            </div>
          </div>
          <div className="flex flex-grow flex-col gap-1">
            <label className="font-medium" htmlFor="message">
              Your Message
            </label>
            <textarea
              className="bg-primaryLight min-h-28  flex-grow rounded-md px-2 py-1 text-neutral-300 focus:ring-1 focus:ring-yellow focus:ring-offset-2"
              placeholder="Message"
            />
          </div>
          <button className="mb-8 mt-4 self-start rounded-full bg-yellow px-4 py-2 font-semibold">
            Send Message
          </button>
        </form>
      </div>
      <div className="text-l md:text-l px-10 py-3 font-semibold uppercase tracking-widest text-gray-400 md:px-20">
        &copy; Abdullah moemen
      </div>
    </div>
  );
}
export default Contact;
