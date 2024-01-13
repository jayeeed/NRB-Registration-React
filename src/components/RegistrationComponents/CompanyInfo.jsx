/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import img from "../../assets/form/job.png";
import { FaLinkedin } from "react-icons/fa";

const CompanyInfo = ({ onNext, onPrev, formData, setFormData }) => {
  const [fetchedDesignations, setFetchedDesignations] = useState([]);
  const handleNext = () => {
    // Collect data from the form fields
    const company_name = document.getElementById("company_name").value;
    const position_in_company = document.getElementById(
      "position_in_company"
    ).value;
    const industry_and_sector = document.getElementById(
      "industry_and_sector"
    ).value;
    const company_size = document.getElementById("company_size").value;
    const phone_company = document.getElementById("phone_company").value;
    const company_website_url = document.getElementById(
      "company_website_url"
    ).value;
    const social_media_profiles = document.getElementById(
      "social_media_profiles"
    ).value;

    // Create an object with the company info data
    const companyInfoData = {
      company_name,
      position_in_company,
      industry_and_sector,
      company_size,
      phone_company,
      company_website_url,
      social_media_profiles,
    };

    // Merge the new data with the existing formData
    const newFormData = { ...formData, ...companyInfoData };
    console.log(newFormData);

    // Update the state with the new formData
    setFormData(newFormData);

    // Call onNext with the updated formData
    onNext(companyInfoData);
  };

  const company_sizeOptions = [
    "Self-employed",
    "1-10 employees",
    "11-50 employees",
    "51-200 employees",
    "201-500 employees",
    "501-1000 employees",
    "1001-5000 employees",
  ];

  const industry_and_sector = [
    "Agro based Industry",
    "Archi./Engg./Construction",
    "Automobile/Industrial Machine",
    "Bank/Fin. Institution",
    "Wholesale/ Retail/ Export-Import",
    "Electronics/Consumer Durables",
    "Energy/Power/Fuel",
    "Garments/Textile",
    "Telecommunication",
    "Pharmaceuticals",
    "Information Technology",
    "Logistics/Transportation",
    "Others",
  ];

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL;
        const response = await fetch(`${apiUrl}/designations/`);
        const apiData = await response.json();

        // Check if data has the 'designations' property
        if (apiData.designations) {
          setFetchedDesignations(apiData.designations);
        } else {
          console.error("Invalid data format:", apiData);
        }
      } catch (error) {
        console.error("Error fetching designation data:", error);
      }
    };

    // Call the fetch data function
    fetchData();
  }, []);

  return (
    <div className="flex mt-6 items-center max-[950px]:flex-col max-[910px]:px-4 bg-purple-50">
      {/* Image Row */}
      <div className="flex-1 max-[950px]:mb-4">
        <img
          src={img}
          alt="Welcome Image"
          className="max-w-md h-auto mx-auto rounded-md shadow-md max-[480px]:max-w-[380px]
           max-[400px]:max-w-[320px] max-[360px]:max-w-[280px] max-[800px]:max-w-[620px] max-[650px]:max-w-[460px]"
        />
      </div>

      {/* Content Row */}

      <form className="flex-1 mx-2 w-full max-[950px]:mb-4">
        <h2 className="text-2xl font-semibold mb-6">
          Give Information of your Company
        </h2>

        <div className="w-full mx-auto">
          <div className="flex flex-col mb-1">
            <label className="text-start text-sm font-bold text-gray-600 mb-1">
              Company Name
            </label>
            <input
              type="text"
              name="company_name"
              id="company_name"
              autoComplete="company_name"
              placeholder="Enter your Company Name"
              required
              className="border rounded-md bg-white px-3 py-2"
            />
          </div>
          <div className="flex flex-col mb-1">
            <label className="text-start text-sm font-bold text-gray-600 mb-1">
              Position in the Company
            </label>
            <select
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              id="position_in_company"
              name="position_in_company"
            >
              <option value="" disabled selected>
                Select a designation
              </option>
              {fetchedDesignations.map((designation, index) => (
                <option key={index} value={designation}>
                  {designation}
                </option>
              ))}
            </select>
          </div>
          <div className="grid grid-cols-2 gap-2 mb-1">
            <div>
              <label className="text-start block text-sm font-bold text-gray-600 mb-1">
                Industry and Sector
              </label>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                id="industry_and_sector"
                name="industry_and_sector"
              >
                <option value="" disabled selected>
                  Select your company sector
                </option>
                {industry_and_sector.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="text-start block text-sm font-bold text-gray-600 mb-1">
                Company Size
              </label>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                id="company_size"
                name="company_size"
              >
                <option value="" disabled selected>
                  Select your company size
                </option>
                {company_sizeOptions.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 mb-1">
            <div className="flex flex-col mb-1">
              <label className="text-start text-sm font-bold text-gray-600 mb-1">
                Company Contact Number
              </label>
              <input
                type="text"
                name="phone_company"
                id="phone_company"
                autoComplete="phone_company"
                placeholder="Enter your Company Contact Number"
                required
                className="border rounded-md bg-white px-3 py-2"
              />
            </div>
            <div className="flex flex-col mb-1">
              <label className="text-start text-sm font-bold text-gray-600 mb-1">
                Company Website URL
              </label>
              <input
                type="text"
                name="company_website_url"
                id="company_website_url"
                autoComplete="company_website_url"
                placeholder="Enter your Company Website URL"
                required
                className="border rounded-md bg-white px-3 py-2"
              />
            </div>
          </div>
          <div className="flex flex-col mb-1">
            <label className="text-start text-sm font-bold text-gray-600 mb-1">
              Links to Company Social Media Profiles
            </label>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md">
                  <FaLinkedin />
                </span>
                <input
                  type="text"
                  id="social_media_profiles"
                  className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 block flex-1 min-w-0 w-full text-sm p-2.5"
                  placeholder="Linkedin Link"
                />
              </div>
              {/* <div className="flex">
                <span className="inline-flex items-center px-3 text-sm text-gray-900 bg-gray-200 border border-e-0 border-gray-300 rounded-s-md">
                  <FaFacebookF />
                </span>
                <input
                  type="text"
                  id="facebookLink"
                  className="rounded-none rounded-e-lg bg-gray-50 border border-gray-300 text-gray-900 block flex-1 min-w-0 w-full text-sm p-2.5"
                  placeholder="Facebook Link"
                />
              </div> */}
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="grid grid-cols-2 gap-32 max-[400px]:gap-16">
          <button
            type="button"
            className="text-white bg-purple-700 hover:bg-purple-800
              font-medium rounded-lg text-sm w-[75px] py-2.5 mt-4 mb-2"
            onClick={onPrev}
          >
            Previous
          </button>
          <button
            type="button"
            className="text-white bg-purple-700 hover:bg-purple-800
              font-medium rounded-lg text-sm w-[75px] py-2.5 mt-4 mb-2"
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
};

export default CompanyInfo;
