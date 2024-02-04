import { useState, useEffect } from "react";
import img from "../../assets/dummy.jpg";

const UserDataComponent = () => {
  const [userData, setUserData] = useState(null);
  const [jobData, setJobData] = useState(null);
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");

        // Fetch user data
        const userResponse = await fetch(`${apiUrl}/registration/`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!userResponse.ok) {
          throw new Error("Network response for user data was not ok");
        }

        const userData = await userResponse.json();
        setUserData(userData.response);

        // Log the user data
        console.log("User Data:", userData.response);

        // Fetch job data
        const jobResponse = await fetch(`${apiUrl}/jobs/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!jobResponse.ok) {
          throw new Error("Network response for job data was not ok");
        }

        const jobData = await jobResponse.json();
        setJobData(jobData);

        // Log the job data
        console.log("Job Data:", jobData);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="mx-auto p-4">
      {userData && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 shadow-md rounded px-8 pt-6 pb-8 mb-4 bg-purple-50">
          {/* Personal Information Section */}
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8">
            <div className="mb-4 pb-2 text-center">
              <h2 className="text-xl font-semibold">Personal Information</h2>
            </div>

            <div className="grid gap-6 mb-4 md:grid-cols-2">
              <div className="border-b">
                <label
                  htmlFor="first_name"
                  className="block mb-1 text-sm font-medium text-gray-900"
                >
                  Full Name
                </label>
                <span className="text-gray-700">{userData.full_name}</span>
              </div>

              <div className="border-b">
                <label
                  htmlFor="first_name"
                  className="block mb-1 text-sm font-medium text-gray-900"
                >
                  Sex
                </label>
                <span className="text-gray-700">{userData.sex}</span>
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
                <span className="text-gray-700">{userData.country}</span>
              </div>

              <div className="border-b">
                <label
                  htmlFor="first_name"
                  className="block mb-1 text-sm font-medium text-gray-900"
                >
                  Phone Number
                </label>
                <span className="text-gray-700">{userData.phone_personal}</span>
              </div>
            </div>

            <div className="mb-4 border-b">
              <label
                htmlFor="first_name"
                className="block mb-1 text-sm font-medium text-gray-900"
              >
                Address
              </label>
              <span className="text-gray-700">{userData.address}</span>
            </div>

            <div className="mb-4 border-b">
              <label
                htmlFor="first_name"
                className="block mb-1 text-sm font-medium text-gray-900"
              >
                Contact Email
              </label>
              <span className="text-gray-700">{userData.contact_email}</span>
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
      )}

      {/* Company Information Section */}
      {userData && (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4 pb-2 text-center">
            <h2 className="text-xl font-semibold">Company Information</h2>
          </div>

          <div className="grid gap-6 mb-4 md:grid-cols-2">
            <div className="border-b">
              <label
                htmlFor="first_name"
                className="block mb-1 text-sm font-medium text-gray-900"
              >
                Company Name
              </label>
              <span className="text-gray-700">{userData.company_name}</span>
            </div>

            <div className="border-b">
              <label
                htmlFor="first_name"
                className="block mb-1 text-sm font-medium text-gray-900"
              >
                Position in company
              </label>
              <span className="text-gray-700">
                {userData.position_in_company}
              </span>
            </div>
          </div>

          <div className="grid gap-6 mb-4 md:grid-cols-2">
            <div className="border-b">
              <label
                htmlFor="first_name"
                className="block mb-1 text-sm font-medium text-gray-900"
              >
                Company Size
              </label>
              <span className="text-gray-700">{userData.company_size}</span>
            </div>
            <div className="border-b">
              <label
                htmlFor="first_name"
                className="block mb-1 text-sm font-medium text-gray-900"
              >
                Industry and Sector
              </label>
              <span className="text-gray-700">
                {userData.industry_and_sector}
              </span>
            </div>
          </div>

          <div className="mb-4 border-b">
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Company Contact No.
            </label>
            <span className="text-gray-700">{userData.phone_company}</span>
          </div>

          <div className="mb-4 border-b">
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Company Website URL
            </label>
            <span className="text-gray-700">
              <a href={userData.company_website_url}>
                {userData.company_website_url}
              </a>
            </span>
          </div>
          <div className="mb-4 border-b">
            <label
              htmlFor="first_name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Social Media Profiles
            </label>
            <span className="text-gray-700">
              <a href={userData.social_media_profiles}>
                {userData.social_media_profiles}
              </a>
            </span>
          </div>
        </div>
      )}

      {/* Job Information Section */}
      {jobData && (
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4 pb-2 text-center">
            <h2 className="text-xl font-semibold">Job Information</h2>
          </div>

          {/* Render all jobs in the jobData array */}
          {jobData.map((job) => (
            <div key={job.id} className="mb-4 border-b">
              <label
                htmlFor="job_title"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Job Title
              </label>
              <span className="text-gray-700">{job.job_title}</span>

              <label
                htmlFor="job_description"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Job Description
              </label>
              <span className="text-gray-700">{job.job_description}</span>

              <label
                htmlFor="job_description"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Required Skills
              </label>
              <span className="text-gray-700">
                {job.required_skills_expertise}
              </span>

              <label
                htmlFor="job_description"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Job Field
              </label>
              <span className="text-gray-700">{job.job_field}</span>

              <label
                htmlFor="job_description"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Job Type
              </label>
              <span className="text-gray-700">{job.job_type}</span>

              <label
                htmlFor="job_description"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Job Location
              </label>
              <span className="text-gray-700">{job.job_location}</span>

              <label
                htmlFor="job_description"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Job Starting Date
              </label>
              <span className="text-gray-700">{job.job_start_date}</span>

              <label
                htmlFor="job_description"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Job Duration
              </label>
              <span className="text-gray-700">{job.job_duration}</span>

              <label
                htmlFor="job_description"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Budget Range
              </label>
              <span className="text-gray-700">{job.budget_range}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserDataComponent;
