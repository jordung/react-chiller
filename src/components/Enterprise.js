function Enterprise() {
  return (
    <div className="pt-20 max-sm:mx-12">
      <div
        id="enterprise"
        className="container mx-auto w-full pt-12 rounded-xl flex justify-center align-center max-sm:w-screen max-sm:flex-col max-sm:text-center"
      >
        <div className="flex flex-col justify-center align-items-center text-center w-2/3">
          <p className="text-primary text-base font-bold tracking-wide">
            GEAR UP FOR SCALE
          </p>
          <h1 className="text-black text-5xl font-bold pt-3">
            Chill Out with Chiller!
          </h1>
          <p className="py-3">
            Built with the latest stacks, Chiller scales up to support
            collaboration at the world's biggest companies.
          </p>
          <div className="flex flex-between align-items-center justify-center gap-10 p-5">
            <button className="border border-2 border-primary px-10 py-4 rounded-lg bg-primary text-white font-semibold text-sm hover:opacity-80 hover:scale-105 transition duration-250">
              CHILLER FOR ENTERPRISE
            </button>
            <button className="border border-2 border-primary px-10 py-4 rounded-lg bg-white text-primary font-semibold text-sm hover:opacity-80 hover:scale-105 transition duration-250">
              TALK TO SALES
            </button>
          </div>
          <div className="flex justify-around align-center w-full mt-8">
            <div className="w-44 text-left">
              <h1 className="text-primary font-bold text-6xl">73%</h1>
              <p className="text-sm text-left">
                of users say Chiller has improved workflow
              </p>
            </div>

            <div className="w-44 text-left">
              <h1 className="text-primary font-bold text-6xl">80%</h1>
              <p className="text-sm text-left">
                feel more connected with their teams
              </p>
            </div>

            <div className="w-44 text-left">
              <h1 className="text-primary font-bold text-6xl">96%</h1>
              <p className="text-sm text-left">
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
