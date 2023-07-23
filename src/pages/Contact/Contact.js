import React from 'react';

const Contact = () => {
  return (
    <div className="mt-5">
      <section className="">
        <div className="bg-white shadow-xl rounded-lg py-8 lg:py-16 px-16 w-3/4 mx-auto ">
          <div>
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 ">
              Contact Us
            </h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-700  sm:text-xl">
              Got a technical issue? Want to send feedback about a beta feature? Need details about
              our Business plan? Let us know.
            </p>
            <form action="#" className="space-y-8">
              <div>
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  className="input input-bordered w-full"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="subject" className="label">
                  <span className="label-text"> Subject</span>
                </label>

                <input
                  type="text"
                  id="subject"
                  className="input input-bordered w-full "
                  placeholder="Let us know how we can help you"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="label">
                  <span className="label-text"> Your message</span>
                </label>

                <textarea
                  id="message"
                  rows="6"
                  className="p-2.5 w-full textarea textarea-bordered"
                  placeholder="Leave a comment..."></textarea>
              </div>
              <button type="submit" className="w-full bg-primary p-2 rounded-lg text-white">
                Send message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
