import reactLogo from "../assets/images/react-logo.png";
import tailwindLogo from "../assets/images/tailwind-logo.png";

function Features() {
  return (
    <div className="pb-20 max-sm:mx-8 bg-gray-100">
      <div
        id="features"
        className="container mx-auto w-full pt-28 rounded-xl flex justify-center align-center max-sm:mx-0 max-sm:pt-44 max-sm:w-screen max-sm:flex-col max-sm:text-center"
      >
        <div className="flex flex-col justify-center align-items-center text-center w-2/3 max-sm:w-full">
          <p className="text-primary text-base font-bold tracking-wide">
            BUILT ONLY FROM THE BEST
          </p>
          <h1 className="text-black text-4xl font-bold pt-3">
            Technologies used for Chiller
          </h1>
          <p className="my-5 px-36">
            Chiller is currently still chilling-in-progress. However, this
            landing page was made with ReactJS and TailwindCSS.
          </p>
          <div className="px-40 text-left flex justify-between">
            <div className="flex gap-5 items-center mb-3">
              <img
                className="w-16 h-full border border-4 border-primary object-contain rounded-xl p-3 bg-white"
                src={reactLogo}
                alt="react"
              />
              <p className="text-black">ReactJS</p>
            </div>
            <div className="flex gap-5 items-center mb-3">
              <img
                className="w-16 h-full border border-4 border-primary object-contain rounded-xl p-3 bg-white"
                src={tailwindLogo}
                alt="tailwind"
              />
              <p>TailwindCSS</p>
            </div>
          </div>
          <p className="my-5 px-36 text-gray-400 underline">
            Do provide any feedback to make Chiller more chill for you.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;
