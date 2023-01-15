function Pricing() {
  return (
    <div className="pb-20 max-sm:pb-0 max-sm:mx-0 max-sm:w-screen">
      <div
        id="pricing"
        className="container mx-auto w-full pt-28 max-sm:pt-4 rounded-xl flex justify-center align-center max-sm:w-screen max-sm:flex-col max-sm:text-center"
      >
        <div className="flex flex-col justify-center align-items-center text-center w-2/3 max-sm:w-full">
          <h1 className="text-primary text-5xl font-bold pt-3">Pricing</h1>
          <div className="flex justify-center my-12 max-sm:my-0">
            <section className="flex flex-col lg:flex-row items-start items-center lg:justify-center w-full w-full lg:px-10 py-8 gap-3">
              <article className="lg:w-custom w-4/5 mb-10 py-16 lg:-mt-6 text-black border border-1 border-gray-100 shadow px-3 rounded-lg text-center">
                <h5 className="font-bold text-gray-400">PERSONAL</h5>
                <h2 className="pb-4 flex justify-center font-bold border-b border-gray-300">
                  <span className="text-4xl"> FREE</span>
                </h2>
                <ul className="text-sm">
                  <li className="pt-4 pb-4 border-b border-gray-300">1 User</li>
                  <li className="pt-3 pb-4 border-b border-gray-300">
                    Basic Support
                  </li>
                  <li className="pt-4 pb-4 border-b border-gray-300">
                    1 GB of Storage
                  </li>
                </ul>
                <button className=" uppercase text-center text-sm mt-12 xl:px-16 px-12 sm:px-16 py-2 font-bold text-white rounded-md border bg-primary hover:opacity-80 hover:scale-105 transition duration-250">
                  Get Plan
                </button>
              </article>
              <article className="lg:w-custom w-4/5 mb-10 py-16 lg:-mt-6 text-black border border-1 border-gray-100 shadow px-3 rounded-lg text-center">
                <h5 className="font-bold text-3xl text-transparent font-bold mb-1 bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 ">
                  PRO
                </h5>
                <div className="font-bold pb-4 mt-2 border-b border-gray-400 flex flex-col justify-center">
                  <span className="text-6xl "> $15</span>
                  <span className="text-sm font-normal"> per user</span>
                </div>
                <ul className=" text-sm font-bold">
                  <li className="pt-4 pb-4 border-b border-gray-400">
                    5 Users
                  </li>
                  <li className="pt-4 pb-4 border-b border-gray-400">
                    Priority Support
                  </li>
                  <li className="pt-4 pb-4 border-b border-gray-400">
                    10 GB of Storage
                  </li>
                </ul>
                <button className=" uppercase text-center text-sm mt-12 xl:px-16 px-12 sm:px-16 py-2 font-bold text-white rounded-md border bg-gradient-to-r from-cyan-500 to-blue-500 hover:opacity-80 hover:scale-105 transition duration-250">
                  Get Plan
                </button>
              </article>
              <article className="lg:w-custom w-4/5 mb-10 py-16 lg:-mt-6 text-black border border-1 border-gray-100 shadow px-3 rounded-lg text-center">
                <h5 className="font-bold text-gray-400">ENTERPRISE</h5>
                <h2 className="pb-4 flex justify-center font-bold flex-col border-b border-gray-300">
                  <span className="text-4xl">$30</span>
                  <span className="text-sm font-normal"> per user</span>
                </h2>
                <ul className="text-sm">
                  <li className="pt-4 pb-4 border-b border-gray-300">
                    50 Users
                  </li>
                  <li className="pt-3 pb-4 border-b border-gray-300">
                    24/7 Support
                  </li>
                  <li className="pt-4 pb-4 border-b border-gray-300">
                    100 GB of Storage
                  </li>
                </ul>
                <button className=" uppercase text-center text-sm mt-12 xl:px-16 px-12 sm:px-16 py-2 font-bold text-white rounded-md border bg-primary hover:opacity-80 hover:scale-105 transition duration-250">
                  Get Plan
                </button>
              </article>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
