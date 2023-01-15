function Enterprise() {
  return (
    <div className="pb-20 max-sm:mx-2 max-sm:w-screen">
      <div
        id="enterprise"
        className="container mx-auto w-full pt-28 rounded-xl flex justify-center align-center max-sm:w-full max-sm:flex-col max-sm:text-center max-sm:pt-4"
      >
        <div className="flex flex-col justify-center align-items-center text-center w-2/3 max-sm:px-2 max-sm:w-screen">
          <p className="text-primary text-base font-bold tracking-wide">
            GEAR UP FOR SCALE
          </p>
          <h1 className="text-black text-5xl font-bold pt-3">
            Chill Out with Chiller!
          </h1>
          <p className="py-3 max-sm:text-sm">
            Built with the latest stacks, Chiller scales up to support
            collaboration at the world's biggest companies.
          </p>
          <div className="flex flex-between align-items-center justify-center gap-10 p-5 max-sm:gap-4">
            <button className="border border-2 border-primary px-10 py-4 rounded-lg bg-primary text-white font-semibold text-sm max-xs:text-base hover:opacity-80 hover:scale-105 transition duration-250 max-sm:px-4">
              CHILLER FOR ENTERPRISE
            </button>
            <button className="border border-2 border-primary px-10 py-4 rounded-lg bg-white text-primary font-semibold text-sm max-xs:text-base hover:opacity-80 hover:scale-105 transition duration-250 max-sm:px-4">
              TALK TO SALES
            </button>
          </div>
          <div className="flex justify-around align-center w-full mt-8 max-sm:flex-col max-sm:items-center">
            <div className="w-44 text-left max-sm:pb-5 max-sm:text-center">
              <h1 className="text-primary font-bold text-6xl">73%</h1>
              <p className="text-sm text-black">
                of users say Chiller has improved workflow
              </p>
            </div>

            <div className="w-44 text-left max-sm:pb-5 max-sm:text-center">
              <h1 className="text-primary font-bold text-6xl">80%</h1>
              <p className="text-sm text-black">
                feel more connected with their teams
              </p>
            </div>

            <div className="w-44 text-left max-sm:text-center">
              <h1 className="text-primary font-bold text-6xl">96%</h1>
              <p className="text-sm text-black">
                feel their ability to work remotely has improved
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Enterprise;
