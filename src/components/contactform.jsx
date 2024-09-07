/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Swal from "sweetalert2";
// eslint-disable-next-line no-unused-vars
import withReactContent from "sweetalert2-react-content";
import axios from "axios";
const contactform = () => {
  const [result, setResult] = React.useState("");
  const [ip, setIP] = React.useState("");
  const getData = async () => {
    const res = await axios.get("https://api.ipify.org/?format=json");
    console.log(res.data);
    setIP(res.data.ip);
  };

  React.useEffect(() => {
    //passing getData method to the lifecycle method
    getData();
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("");
    const formData = new FormData(event.target);
    console.log(ip);

    if (!formData.get("name")) {
      return Swal.fire({
        title: "Error!",
        text: "Please enter your name.",
        icon: "error",
        confirmButtonText: "Sure",
      });
    }
    if (!formData.get("email")) {
      return Swal.fire({
        title: "Error!",
        text: "Please enter your email.",
        icon: "error",
        confirmButtonText: "Sure",
      });
    }

    if (!formData.get("message")) {
      return Swal.fire({
        title: "Error!",
        text: "Please enter your mewssage.",
        icon: "error",
        confirmButtonText: "Sure",
      });
    }

    formData.append("access_key", import.meta.env.VITE_API_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      Swal.fire({
        title: "Success!",
        text: "Your message has been sent successfully. I will get back to you as soon as possible.",
        icon: "success",
        confirmButtonText: "Cool",
        timer: 1500,
        timerProgressBar: true,
      });
      event.target.reset();
    } else {
      Swal.fire({
        title: "Error!",
        text: "unfortunately your message was not sent. Please try again.",
        icon: "error",
        confirmButtonText: "Sure",
      });
      setResult(data.message);
    }
  };
  return (
    <div className="bg-base-100">
      <section className="min-h-fit bg-base-100">
        <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <AnimationOnScroll animateOnce="true" animateIn="fadeInDown">
                <h2 className="special underline-offset-2 font-black text-4xl md:text-6xl lg:text-7xl leading-[1.1]   underline">
                  Contact
                </h2>
              </AnimationOnScroll>
              <br></br> <br></br>
              <p className="max-w-xl text-lg">
                Fill the form to reach out to me professionally. I will get back
                to you as soon as possible.
              </p>
              <div className="mt-8">
                <p className="max-w-xl text-lg">
                  In the meantime feel free to check out my social media
                  profiles.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-lg shadow-lg bg-neutral lg:col-span-3 lg:p-12">
              <form className="space-y-4" method="POST" onSubmit={onSubmit}>
                <input
                  type="hidden"
                  name="accessKey"
                  value="18213f87-ea06-4bcd-ad3f-64fcda95b6d8"
                ></input>
                <div>
                  <label className="sr-only" htmlFor="name">
                    Name
                  </label>
                  <AnimationOnScroll animateOnce="true" animateIn="fadeInDown">
                    <input
                      className="w-full p-3 text-sm rounded-lg textarea textarea-primary"
                      placeholder="Name"
                      type="text"
                      id="name"
                      name="name"
                    />
                  </AnimationOnScroll>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">
                      Email
                    </label>
                    <AnimationOnScroll
                      animateOnce="true"
                      animateIn="fadeInDown"
                      delay={200}
                    >
                      <input
                        className="w-full p-3 text-sm rounded-lg textarea textarea-accent"
                        placeholder="Email address"
                        type="email"
                        id="email"
                        name="email"
                      />
                    </AnimationOnScroll>
                  </div>
                  <input
                    className=""
                    placeholder={ip}
                    value={ip}
                    type="text"
                    id="text"
                    name="ip"
                    hidden="true"
                  />
                  <div>
                    <label className="sr-only" htmlFor="phone">
                      Phone
                    </label>
                    <AnimationOnScroll
                      animateOnce="true"
                      animateIn="fadeInDown"
                      delay={200}
                    >
                      <input
                        className="w-full p-3 text-sm rounded-lg textarea textarea-primary"
                        placeholder="Phone Number"
                        type="tel"
                        id="phone"
                        name="phone"
                      />
                    </AnimationOnScroll>
                  </div>
                </div>

                <div>
                  <label className="sr-only" htmlFor="message">
                    Message
                  </label>

                  <textarea
                    className="w-full p-3 text-sm rounded-lg textarea textarea-accent"
                    placeholder="Message"
                    rows="8"
                    id="message"
                    name="message"
                  ></textarea>
                </div>
                <input
                  type="hidden"
                  name="_gotcha"
                  style={{ display: "none" }}
                ></input>
                <div className="mt-4">
                  <button
                    type="submit"
                    className="inline-block w-full px-5 py-3 font-bold text-black transition duration-150 ease-in-out rounded-lg bg-primary hover:bg-opacity-75"
                  >
                    Send Enquiry
                  </button>
                </div>
              </form>
              <span>{result}</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default contactform;
