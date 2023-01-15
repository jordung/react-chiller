import hero from "../assets/images/hero-chat.svg";
import airbnb from "../assets/images/airbnb-logo.svg";
import uber from "../assets/images/uber-logo.svg";
import etsy from "../assets/images/etsy-logo.png";
import google from "../assets/images/google-logo.svg";

function Hero(props) {
  return (
    <div className="max-sm:pt-12 max-sm:w-screen max-sm:px-0 max-sm:mx-1 container mx-auto w-2/3 pt-28 rounded-xl flex flex-col justify-evenly align-center h-screen">
      <div className="flex max-sm:flex-col">
        <div className="w-1/2 pt-14 max-sm:w-full">
          <h1 className="text-8xl max-sm:text-6xl text-transparent font-bold mb-1 bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
            Chiller
          </h1>
          <p className="text-gray-600 font-bold text-2xl text-lg mb-5">
            Melt Better Together.
          </p>
          <p className="text-black text-lg max-sm:text-sm">
            Introducing the newest way to communicate, interact, and work.
            <br />
            <br />
            The only corporate messaging application that allows your team to
            melt together - chill out, and gel into the same goal.
          </p>
          <div className="mt-5">
            <button
              type="button"
              className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-70 focus:ring-1 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-10 py-4 text-center mr-2 mb-2 transition duration-300 hover:scale-105"
            >
              <span className="relative transition ease-in duration-150 rounded-md group-hover:opacity-70">
                Get Started
              </span>
            </button>
            <button
              type="button"
              className="text-black bg-white hover:opacity-70 border border-2 border-primary focus:ring-1 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-10 py-3.5 text-center mr-2 mb-2 transition duration-300 hover:scale-105"
            >
              <span className="relative transition ease-in duration-150 rounded-md group-hover:bg-opacity-0">
                Email Us
              </span>
            </button>
          </div>
          {/* <p className="mt-2 text-gray-400 opacity-80">
            This is a fictitious site.
          </p> */}
        </div>
        <div className="w-1/2 m-0 p-0 max-sm:pt-5 max-sm:w-full">
          <img src={hero} alt="hero" className="relative w-full object-cover" />
        </div>
      </div>
      <div className="pt-20 flex justify-center align-items-center max-sm:pt-5 max-sm:text-center 2xl:pt-44">
        <p className="text-gray-400 text-base font-bold tracking-wide">
          TRUSTED BY COMPANIES ALL OVER THE WORLD
        </p>
      </div>
      <div className="flex gap-10 -mt-5 justify-center align-items-center max-sm:mt-0 max-sm:pb-10 max-sm:gap-5">
        <img
          className="w-auto h-5 mt-3 opacity-50 hover:opacity-100 transition duration-250"
          src={uber}
          alt="uber"
        />
        <img
          className="w-auto h-6 mt-3 saturate-0 hover:saturate-100 transition duration-250"
          src={etsy}
          alt="etsy"
        />
        <img
          className="w-auto h-6 mt-3 saturate-0 hover:saturate-100 transition duration-250"
          src={airbnb}
          alt="airbnb"
        />
        <img
          className="w-auto h-6 mt-3 saturate-0 hover:saturate-100 transition duration-250"
          src={google}
          alt="google"
        />
      </div>
    </div>
  );
}

export default Hero;
