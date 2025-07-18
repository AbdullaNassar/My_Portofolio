import toast from "react-hot-toast";
import contact2 from "../images/contact2.png";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    if (name === "") {
      toast.error("Enter your name");
      return;
    }
    if (message === "") {
      toast.error("Enter your message");
      return;
    }
    if (name.length < 5) {
      toast.error("please enter at least 5 characters in your name");
      return;
    }

    if (message.length < 5) {
      toast.error("please enter at least 5 characters in your message");
      return;
    }

    emailjs
      .sendForm(
        "service_gw2hjyz", // Replace with your service ID
        "template_m9wwp5s", // Replace with your template ID
        form.current,
        "71f9iJdPdkBlwo1dY", // Replace with your public key
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          setName("");
          setEmail("");
          setMessage("");
        },
        () => {
          alert("Failed to send message. Try again.");
          toast.error("Failed to sebd message, Try again");
        },
      );
  }
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
      <form ref={form} className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="flex flex-col gap-1">
            <label className="font-medium" htmlFor="name">
              Your name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="min-h-10 rounded-md bg-primaryLight px-2 py-1 text-neutral-300 focus:outline-none focus:ring-1 focus:ring-yellow focus:ring-offset-2"
              id="name"
              name="name"
              placeholder="Name"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-medium" htmlFor="email">
              Your Email
            </label>
            <input
              required
              name="email"
              pattern="[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="min-h-28 flex-grow rounded-md  bg-primaryLight px-2 py-1 text-neutral-300 focus:outline-none focus:ring-1 focus:ring-yellow focus:ring-offset-2"
            placeholder="Message"
          />
        </div>
        <button className="mb-8  mt-4 self-center rounded-full bg-yellow px-4 py-2 text-center font-bold hover:bg-primaryDark sm:self-start">
          Send Message
        </button>
      </form>
    </div>
  );
}
export default ContactMe;
