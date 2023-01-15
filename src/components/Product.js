import sharing from "../assets/images/sharing.svg";
import anywhere from "../assets/images/anywhere.svg";
import information from "../assets/images/information.svg";

function Product() {
  return (
    <div className="pb-20 max-sm:w-screen">
      <div className="bg-gray-100 ">
        <div
          id="product"
          className="container mx-auto w-2/3 pt-28 rounded-xl flex justify-center align-center max-sm:py-8 max-sm:w-screen max-sm:flex-col max-sm:text-center"
        >
          <div className="w-1/3 mr-20 max-sm:w-full max-sm:mr-0 max-sm:px-0">
            <h1 className="text-5xl font-bold mb-4">
              Bring Your Team <span className="text-primary">Together</span>
            </h1>
            <p className="max-sm:text-sm">
              Chiller is all about the people - organised spaces,
              declutterisation, and a simple UI to make it all click. Group
              pages promotes internal knowledge transfer, while company wide
              channels allow for cross-departmental efforts.
            </p>
          </div>
          <img className="w-1/3 max-sm:hidden" src={sharing} alt="sharing" />
        </div>
        <div className="container mx-auto w-2/3 pt-28 rounded-xl flex justify-center align-center max-sm:py-8 max-sm:px-0 max-sm:w-screen max-sm:flex-col max-sm:text-center">
          <img className="w-1/3 max-sm:hidden" src={anywhere} alt="anywhere" />
          <div className="w-1/3 ml-20 max-sm:ml-0 max-sm:w-full">
            <h1 className="text-5xl font-bold mb-4">
              Work Seamlessly <span className="text-primary">Anywhere</span>
            </h1>
            <p className="max-sm:text-sm">
              The core concept of Chiller is your convenience. It doesn't matter
              if you're at home, in the office, or in the Swiss Alps; using your
              Mac, Galaxy Tablet, or iPhone - Chiller covers it all for you.
            </p>
          </div>
        </div>
        <div className="container mx-auto w-2/3 pt-28 pb-8 rounded-xl flex justify-center align-center max-sm:py-8 max-sm:px-0 max-sm:w-screen max-sm:flex-col max-sm:text-center">
          <div className="w-1/3 mr-20 max-sm:mr-0 max-sm:w-full">
            <h1 className="text-5xl font-bold mb-4">
              <span className="text-primary">All-in-One</span> Toolkit
            </h1>
            <p className="max-sm:text-sm">
              Shared files? Database? Presentation deck? Chiller brings about an
              extensive set of tools to aid you in your conquest towards
              success.
            </p>
          </div>
          <img
            className="w-1/3 max-sm:hidden"
            src={information}
            alt="information"
          />
        </div>
      </div>
    </div>
  );
}

export default Product;
