import { FaFacebookF, FaGoogle } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

// eslint-disable-next-line react/prop-types
const SocialMedia = ({ value }) => {
  return (
    <>
      <p className="font-base mb-2 mt-4">Or {value} with social platforms</p>
      <div className="flex justify-center gap-1">
        <button
          type="button"
          className="text-white bg-[#3b5998] hover:bg-[#3b5998]/90 font-medium rounded-lg text-sm 
          px-2 py-2.5 text-center inline-flex items-center me-2 mb-2"
        >
          <FaFacebookF />
          <span className="ml-2">Facebook</span>
        </button>
        <button
          type="button"
          className="text-white bg-[#24292F] hover:bg-[#24292F]/90 font-medium rounded-lg text-sm
           px-2 py-2.5 text-center inline-flex items-center me-2 mb-2"
        >
          <FaGithub />
          <span className="ml-2">Github</span>
        </button>
        <button
          type="button"
          className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 font-medium rounded-lg text-sm
           px-2 py-2.5 text-center inline-flex items-center me-2 mb-2"
        >
          <FaGoogle />
          <span className="ml-2">Google</span>
        </button>
      </div>
    </>
  );
};

export default SocialMedia;
