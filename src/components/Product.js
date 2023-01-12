import sharing from "../assets/images/sharing.svg";
import anywhere from "../assets/images/anywhere.svg";
import information from "../assets/images/information.svg";

function Product() {
  return (
    <div className="pt-20 max-sm:mx-12">
      <div
        id="product"
        className="container mx-auto w-2/3 pt-28 rounded-xl flex justify-center align-center max-sm:w-screen max-sm:flex-col max-sm:text-center"
      >
        <div className="w-1/3 mr-20 max-sm:w-full">
          <h1 className="text-5xl font-bold mb-4">
            Bring Your Team <span className="text-primary">Together</span>
          </h1>
          <p>
            Chiller is all about the people - organised spaces,
            declutterisation, and a simple UI to make it all click. Group pages
            promotes internal knowledge transfer, while company wide channels
            allow for cross-departmental efforts.
          </p>
        </div>
        <img className="w-1/3 max-sm:w-full" src={sharing} alt="sharing" />
      </div>
      <div
        id="product"
        className="container mx-auto w-2/3 pt-28 rounded-xl flex justify-center align-center max-sm:w-screen max-sm:flex-col max-sm:text-center"
      >
        {" "}
        <img className="w-1/3" src={anywhere} alt="anywhere" />
        <div className="w-1/3 ml-20">
          <h1 className="text-5xl font-bold mb-4">
            Work Seamlessly <span className="text-primary">Anywhere</span>
          </h1>
          <p>
            The core concept of Chiller is your convenience. It doesn't matter
            if you're at home, in the office, or in the Swiss Alps; using your
            Mac, Galaxy Tablet, or iPhone - Chiller covers it all for you.
          </p>
        </div>
      </div>
      <div className="container mx-auto w-2/3 mt-28 rounded-xl flex justify-center align-center">
        <div className="w-1/3 mr-20">
          <h1 className="text-5xl font-bold mb-4">
            <span className="text-primary">All-in-One</span> Toolkit
          </h1>
          <p>
            Shared files? Database? Presentation deck? Chiller brings about an
            extensive set of tools to aid you in your conquest towards success.
          </p>
        </div>
        <img className="w-1/3" src={information} alt="information" />
      </div>
    </div>
  );
}

export default Product;
