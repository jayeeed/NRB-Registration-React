import { useState } from "react";
import img from "../../assets/dummy.jpg";

const PersonalInfo = ({ userData }) => {
  const [edit, setEdit] = useState(false);

  const handleEditToggle = () => {
    setEdit(!edit);
  };

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8">
      <div className="mb-4 pb-2 text-center">
        <h2 className="text-xl font-semibold">Personal Information</h2>
      </div>
      <div role="tabpanel" className="tab-content p-10">
        {/* Personal Information Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 shadow-md rounded px-8 pt-6 pb-8 mb-4 bg-purple-50">
          {/* Personal Information Section */}
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8">
            <div className="mb-4 pb-2 text-center">
              <h2 className="text-xl font-semibold">Personal Information</h2>
            </div>
            <div className="flex justify-end">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 py-2 rounded"
                onClick={handleEditToggle}
              >
                {edit ? "Save" : "Edit"}
              </button>
            </div>

            <div className="grid gap-6 mb-4 md:grid-cols-2">
              <div className="border-b">
                <label
                  htmlFor="first_name"
                  className="block mb-1 text-sm font-medium text-gray-900"
                >
                  Full Name
                </label>
                {edit ? (
                  <input
                    className="w-3/4 border border-gray-300 rounded px-2 py-1"
                    type="text"
                    value={userData.full_name}
                    onChange={userData.full_name}
                  />
                ) : (
                  <span className="w-3/4 text-gray-800">
                    {userData.full_name}
                  </span>
                )}
              </div>

              <div className="border-b">
                <label
                  htmlFor="first_name"
                  className="block mb-1 text-sm font-medium text-gray-900"
                >
                  Sex
                </label>
                {edit ? (
                  <input
                    className="w-3/4 border border-gray-300 rounded px-2 py-1"
                    type="text"
                    value={userData.sex}
                    onChange={userData.sex}
                  />
                ) : (
                  <span className="w-3/4 text-gray-800">{userData.sex}</span>
                )}
              </div>
            </div>

            <div className="grid gap-6 mb-4 md:grid-cols-2">
              <div className="border-b">
                <label
                  htmlFor="first_name"
                  className="block mb-1 text-sm font-medium text-gray-900"
                >
                  Country
                </label>
                {edit ? (
                  <input
                    className="w-3/4 border border-gray-300 rounded px-2 py-1"
                    type="text"
                    value={userData.country}
                    onChange={userData.country}
                  />
                ) : (
                  <span className="w-3/4 text-gray-800">
                    {userData.country}
                  </span>
                )}
              </div>

              <div className="border-b">
                <label
                  htmlFor="first_name"
                  className="block mb-1 text-sm font-medium text-gray-900"
                >
                  Phone Number
                </label>
                {edit ? (
                  <input
                    className="w-3/4 border border-gray-300 rounded px-2 py-1"
                    type="text"
                    value={userData.phone_personal}
                    onChange={userData.phone_personal}
                  />
                ) : (
                  <span className="w-3/4 text-gray-800">
                    {userData.phone_personal}
                  </span>
                )}
              </div>
            </div>

            <div className="mb-4 border-b">
              <label
                htmlFor="first_name"
                className="block mb-1 text-sm font-medium text-gray-900"
              >
                Address
              </label>
              {edit ? (
                <input
                  className="w-3/4 border border-gray-300 rounded px-2 py-1"
                  type="text"
                  value={userData.address}
                  onChange={userData.address}
                />
              ) : (
                <span className="w-3/4 text-gray-800">{userData.address}</span>
              )}
            </div>

            <div className="mb-4 border-b">
              <label
                htmlFor="first_name"
                className="block mb-1 text-sm font-medium text-gray-900"
              >
                Contact Email
              </label>
              {edit ? (
                <input
                  className="w-3/4 border border-gray-300 rounded px-2 py-1"
                  type="text"
                  value={userData.contact_email}
                  onChange={userData.contact_email}
                />
              ) : (
                <span className="w-3/4 text-gray-800">
                  {userData.contact_email}
                </span>
              )}
            </div>
          </div>

          {/* Image Upload Section (on the right side) */}
          <div
            className="flex flex-col items-center justify-center bg-white
          shadow-md rounded"
          >
            {/* Fetch image from cPanel or any other server */}
            {userData.profile_pic ? (
              <img
                src={`${apiUrl}${userData.profile_pic}`} // Adjust the path as needed
                alt="Profile"
                className="w-40 h-40 rounded object-cover mb-4"
              />
            ) : (
              <img
                src={img}
                alt="Profile"
                className="w-40 h-40 rounded object-cover mb-4"
              />
            )}

            {/* Add your image upload component here */}
            <input type="file" className="border border-gray-300 p-2" />
            {/* Add styling for image upload here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
