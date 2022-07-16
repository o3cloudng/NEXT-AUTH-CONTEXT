import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full py-16 text-white">
      <div className="w-[80%] mx-auto grid lg:grid-cols-3 py-20">
        <div className="lg:col-span-2">
          <h1 className="lg:text-4xl md:text-3xl text-2xl mx-auto md:mx-2">
            Want to be the first to be notified of our new posts?
          </h1>
          <p className="my-2 text-gray-500 mx-auto md:mx-2">
            Please, subscribe now using the form here and you are right there.
          </p>
        </div>
        <div>
          <div className="flex">
            <input className="w-full h-14 p-3 rounded-md text-black my-auto" type="email" placeholder="Enter Email" />

            <button className="flex bg-[#00df9a] py-4 px-5 md:py-4 md:px-8 mx-auto rounded-md m-4 w-[200px] text-black my-auto font-semibold ml-2 border border-[#00df9a] hover:bg-transparent hover:border hover:border-[#00df9a] hover:text-[#00df9a] hover:ease-in-out duration-500 text-sm md:text-md">
              Notify me
            </button>
          </div>
          <p className="my-2 text-gray-500">We care about your privacy and will not share your information with any third party.</p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
