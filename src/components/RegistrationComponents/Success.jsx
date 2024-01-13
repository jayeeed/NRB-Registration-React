import { Link } from "react-router-dom";
import img from "../../assets/form/successful.jpg";

const Success = () => {
  return (
    <div className="mx-auto max-w-sm bg-purple-200 border border-gray-200 rounded-lg shadow">
      <a href="#">
        <img className="rounded-t-lg" src={img} alt="" />
      </a>
      <div className="p-5">
        <h5 className="mb-4 text-xl font-semibold tracking-tight text-gray-500">
          Registration Successful!
        </h5>

        <Link
          to="/profile"
          className="text-white bg-purple-700 hover:bg-purple-800
        font-medium rounded-lg text-sm px-5 py-2.5 mt-4 mb-2"
        >
          Go To Profile
        </Link>
      </div>
    </div>
  );
};

export default Success;
