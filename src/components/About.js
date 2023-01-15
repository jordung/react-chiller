function About() {
  return (
    <div className="pb-20 max-sm:mx-0 bg-gray-100 max-sm:w-screen">
      <div
        id="about"
        className="container mx-auto w-full pt-28 max-sm:pt-8 rounded-xl flex justify-center align-center max-sm:w-screen max-sm:flex-col max-sm:text-center"
      >
        <div className="flex flex-col justify-center align-items-center text-center w-1/2 max-sm:w-full max-sm:p-2">
          <p className="text-primary text-base font-bold tracking-wide">
            GET TO KNOW US BETTER
          </p>
          <h1 className="text-black text-5xl font-bold pt-3">
            Brain(freeze) of
            <span className="text-transparent font-bold mb-1 ml-3 bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500">
              Chiller
            </span>
          </h1>
          <p className="mt-5 w-full text-center">
            Chiller was founded in 2023.
          </p>
          <p className="mt-5 text-gray-500 text-left max-sm:text-sm">
            Stressed from work, together with the impracticalities of file
            management and messaging software that aren't very user-friendly...
            <br />
            <br />
            This sparked a journey into increasing the productivity of
            companies, with us settling all these <s>nerdy</s>
            <em>techy-stuff</em> so that you can focus on your business at hand.
            <br />
            <br />
            The team here at Chiller is always open to feedback in order to make
            this product more for <strong>you</strong>, and we strive only to
            introduce changes when it improves your experience, and not simply
            to further our own tech stack development.
            <br />
            <br />
            With Chiller, it's{" "}
            <u>
              <strong>always about you</strong>
            </u>
            .
          </p>
          <p className="mt-5 text-left text-xs">
            ©2023 Jordan. All rights reserved. This is a fictitious page and
            product... for now.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
