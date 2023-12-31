import contact2 from "../images/contact2.png";
function ContactMe() {
  return (
    <div className=" mt-20 flex flex-col justify-center gap-16 px-4 sm:px-24 md:flex-row">
      <div className="flex flex-col">
        <h2 className="text-3xl font-bold md:text-4xl">Feel free to</h2>
        <span className="mt-2 text-3xl font-bold text-yellow md:text-4xl">
          Contact me
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
              className="min-h-10 rounded-md bg-primaryLight px-2 py-1 text-neutral-300 focus:outline-none focus:ring-1 focus:ring-yellow focus:ring-offset-2"
              id="name"
              placeholder="Name"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-medium" htmlFor="email">
              Your Email
            </label>
            <input
              className="min-h-10 rounded-md bg-primaryLight px-2 py-1 text-neutral-300 focus:outline-none focus:ring-1 focus:ring-yellow focus:ring-offset-2"
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
            className="min-h-28 flex-grow rounded-md  bg-primaryLight px-2 py-1 text-neutral-300 focus:outline-none focus:ring-1 focus:ring-yellow focus:ring-offset-2"
            placeholder="Message"
          />
        </div>
        <button className="mb-8 mt-4 self-start rounded-full bg-yellow px-4 py-2 font-bold hover:bg-primaryDark">
          Send Message
        </button>
      </form>
    </div>
  );
}
export default ContactMe;
