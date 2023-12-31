import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Heading from "./Heading";
import { FaPhoneAlt } from "react-icons/fa";
import ContactMe from "./ContactMe";
import Animation from "./Animation";

function Contact() {
  return (
    <div className="mt-24 min-h-screen" id="contact">
      <Heading>Contact</Heading>
      <Animation>
        <div className="mt-12 flex flex-col justify-center px-4 sm:items-center">
          <label className="mt-4 flex min-w-[30%] items-center border-b-2 border-neutral-500 pb-2 pl-2 font-semibold">
            <span className="text-yellow">
              <FaLocationDot />
            </span>
            : Cairo, egypt
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
      </Animation>

      <Animation>
        <ContactMe />
      </Animation>

      <div className="text-l md:text-l px-10 py-3 font-semibold uppercase tracking-widest text-gray-400 md:px-20">
        &copy; Abdullah moemen
      </div>
    </div>
  );
}
export default Contact;
