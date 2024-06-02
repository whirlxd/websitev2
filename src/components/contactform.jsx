import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const contactform = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("");
    const formData = new FormData(event.target);

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
    <div className="bg-base-200">
      <section className="bg-base-200 min-h-screen">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <AnimationOnScroll animateOnce="true" animateIn="zoomInDown">
                <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl underline">
                  Contact
                </h2>
              </AnimationOnScroll>
              <br></br> <br></br>
              <AnimationOnScroll animateOnce="true" animateIn="zoomInLeft">
                <p className="max-w-xl text-lg">
                  Fill the form to reach out to me professionally. I will get
                  back to you as soon as possible.
                </p>
              </AnimationOnScroll>
              <div className="mt-8">
                <AnimationOnScroll animateOnce="true" animateIn="zoomInUp">
                  <p className="max-w-xl text-lg">
                    In the meantime feel free to check out my social media
                    profiles.
                  </p>
                </AnimationOnScroll>
              </div>
            </div>

            <div className="rounded-lg bg-neutral p-8 shadow-lg lg:col-span-3 lg:p-12">
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
                      className="textarea textarea-secondary w-full rounded-lg  p-3 text-sm"
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
                      animateIn="fadeInLeft"
                    >
                      <input
                        className="textarea textarea-secondary w-full rounded-lg  p-3 text-sm"
                        placeholder="Email address"
                        type="email"
                        id="email"
                        name="email"
                      />
                    </AnimationOnScroll>
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="phone">
                      Phone
                    </label>
                    <AnimationOnScroll
                      animateOnce="true"
                      animateIn="fadeInRight"
                    >
                      <input
                        className="textarea textarea-secondary w-full rounded-lg  p-3 text-sm"
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
                  <AnimationOnScroll animateOnce="true" animateIn="fadeInUp">
                    <textarea
                      className=" textarea textarea-accent w-full rounded-lg  p-3 text-sm "
                      placeholder="Message"
                      rows="8"
                      id="message"
                      name="message"
                    ></textarea>
                  </AnimationOnScroll>
                </div>
                <input
                  type="hidden"
                  name="_gotcha"
                  style={{ display: "none" }}
                ></input>
                <div className="mt-4">
                  <AnimationOnScroll
                    animateOnce="true"
                    animateIn="fadeInUpBig"
                    offset={90}
                  >
                    <button
                      type="submit"
                      className="inline-block w-full rounded-lg bg-primary px-5 py-3 font-medium text-white sm:w-auto"
                    >
                      Send Enquiry
                    </button>
                  </AnimationOnScroll>
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
