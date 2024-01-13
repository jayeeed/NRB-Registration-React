import img from "../../assets/form/personal.jpg";

// eslint-disable-next-line react/prop-types
const Welcome = ({ onNext }) => {
  return (
    <div className="flex mt-6 items-center max-[800px]:flex-col max-[910px]:px-4 bg-purple-50">
      {/* Image Row */}
      <div className="w-full">
        <img
          src={img}
          alt="Welcome Image"
          className="max-w-md h-auto mx-auto rounded-md shadow-md max-[480px]:max-w-[380px]
           max-[400px]:max-w-[320px] max-[360px]:max-w-[280px] max-[800px]:max-w-[620px] max-[650px]:max-w-[460px]"
        />
      </div>

      {/* Content Row */}
      <div className="w-full flex flex-col items-center mt-2 max-[800px]:my-6">
        <h1 className="font-semibold text-3xl mb-2">Welcome</h1>
        <p className="mb-4 font-base">
          Please fill in the following information...
        </p>
        <button
          className="text-white bg-purple-700 hover:bg-purple-800
        font-medium rounded-lg text-sm px-5 py-2.5 mt-4 mb-2"
          onClick={onNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Welcome;
