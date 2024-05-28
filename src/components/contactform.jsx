import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

const contactform = () => {
  return (
    <div className="bg-base-200">
      <section className="bg-base-200 min-h-screen">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
            <div className="lg:col-span-2 lg:py-12">
              <AnimationOnScroll animateIn="zoomInDown">
                <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl underline">
                  Contact
                </h2>
              </AnimationOnScroll>
              <br></br> <br></br>
              <AnimationOnScroll animateIn="zoomInLeft">
                <p className="max-w-xl text-lg">
                  Fill the form to reach out to me professionally. I will get
                  back to you as soon as possible.
                </p>
              </AnimationOnScroll>
              <div className="mt-8">
                <AnimationOnScroll animateIn="zoomInUp">
                  <p className="max-w-xl text-lg">
                    In the meantime feel free to check out my social media
                    profiles.
                  </p>
                </AnimationOnScroll>
              </div>
            </div>

            <div className="rounded-lg bg-neutral p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form action="#" className="space-y-4">
                <div>
                  <label className="sr-only" htmlFor="name">
                    Name
                  </label>
                  <AnimationOnScroll animateIn="fadeInDown">
                    <input
                      className="textarea textarea-secondary w-full rounded-lg  p-3 text-sm"
                      placeholder="Name"
                      type="text"
                      id="name"
                    />
                  </AnimationOnScroll>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label className="sr-only" htmlFor="email">
                      Email
                    </label>
                    <AnimationOnScroll animateIn="fadeInLeft">
                      <input
                        className="textarea textarea-secondary w-full rounded-lg  p-3 text-sm"
                        placeholder="Email address"
                        type="email"
                        id="email"
                      />
                    </AnimationOnScroll>
                  </div>

                  <div>
                    <label className="sr-only" htmlFor="phone">
                      Phone
                    </label>
                    <AnimationOnScroll animateIn="fadeInRight">
                      <input
                        className="textarea textarea-secondary w-full rounded-lg  p-3 text-sm"
                        placeholder="Phone Number"
                        type="tel"
                        id="phone"
                      />
                    </AnimationOnScroll>
                  </div>
                </div>

                <div>
                  <label className="sr-only" htmlFor="message">
                    Message
                  </label>
                  <AnimationOnScroll animateIn="fadeInUp">
                    <textarea
                      className=" textarea textarea-accent w-full rounded-lg  p-3 text-sm "
                      placeholder="Message"
                      rows="8"
                      id="message"
                    ></textarea>
                  </AnimationOnScroll>
                </div>

                <div className="mt-4">
                  <AnimationOnScroll animateIn="fadeInUpBig">
                    <button
                      type="submit"
                      className="inline-block w-full rounded-lg bg-primary px-5 py-3 font-medium text-white sm:w-auto"
                    >
                      Send Enquiry
                    </button>
                  </AnimationOnScroll>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default contactform;
