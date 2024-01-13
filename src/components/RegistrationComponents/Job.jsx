import { useState } from "react";
import img from "../../assets/form/job.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

// eslint-disable-next-line react/prop-types
const Job = ({ onNext, formData, onPrev, setFormData }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  const job_field = [
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

  const handleNext = async () => {
    // Collect data from the form fields
    const job_title = document.getElementById("job_title").value;
    const job_field = document.getElementById("job_field").value;
    const job_description = document.getElementById("job_description").value;
    const required_skills_expertise = document.getElementById(
      "required_skills_expertise"
    ).value;
    const job_type = document.getElementById("job_type").value;
    const job_location = document.getElementById("job_location").value;
    const job_duration = document.getElementById("job_duration").value;
    const budget_range = document.getElementById("budget_range").value;

    // Create an object with the job/project data
    const jobData = {
      job_title,
      job_field,
      job_description,
      required_skills_expertise,
      job_type,
      job_location,
      job_start_date: selectedDate,
      job_duration,
      budget_range,
    };

    // Extract values from the event object

    // Merge the new data with the existing formData
    const newFormData = { ...formData, ...jobData };
    console.log(newFormData);

    const postData = {
      full_name: newFormData.full_name,
      sex: newFormData.sex,
      country: newFormData.country,
      phone_personal: newFormData.phone_personal,
      contact_email: newFormData.contact_email,
      nid_passport: newFormData.nid_passport,
      address: newFormData.address,
      company_name: newFormData.company_name,
      position_in_company: newFormData.position_in_company,
      industry_and_sector: newFormData.industry_and_sector,
      company_size: newFormData.company_size,
      phone_company: newFormData.phone_company,
      company_website_url: newFormData.company_website_url,
      social_media_profiles: newFormData.social_media_profiles,
      job_title: newFormData.job_title,
      job_field: newFormData.job_field,
      job_description: newFormData.job_description,
      required_skills_expertise: newFormData.required_skills_expertise,
      job_type: newFormData.job_type,
      job_location: newFormData.job_location,
      // job_start_date: selectedDate.newFormData.job_start_date,
      job_duration: newFormData.job_duration,
      budget_range: newFormData.budget_range,
    };

    console.log("gojamil:", postData);

    // Update the state with the new formData
    setFormData(postData);

    // API endpoint and token
    const apiUrl = import.meta.env.VITE_API_URL + "/registration_job/";
    const token = localStorage.getItem("token");

    try {
      // Make the API call
      const response = await fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(postData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Continue to the next step
      onNext(jobData);
    } catch (error) {
      console.error("Error during API call:", error);
    }
  };

  return (
    <div className="flex mt-6 items-center max-[950px]:flex-col max-[910px]:px-4 bg-purple-50">
      {/* Content Row */}

      <form className="flex-1 mx-2 w-full max-[950px]:mb-4">
        <h2 className="text-2xl font-semibold mb-6">
          Give your Project and Job informations
        </h2>

        <div className="w-full mx-auto">
          <div className="flex flex-col mb-1">
            <label className="text-start text-sm font-bold text-gray-600 mb-1">
              Job/Project Title
            </label>
            <input
              type="job_title"
              name="job_title"
              id="job_title"
              autoComplete="job_title"
              placeholder="Enter your Project/Job Title"
              required
              className="border rounded-md bg-white px-3 py-2"
            />
          </div>
          <div className="flex flex-col mb-1">
            <label className="text-start text-sm font-bold text-gray-600 mb-1">
              Job/Project Field
            </label>
            <select
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              id="job_field"
              name="job_field"
            >
              <option value="" disabled selected>
                Select your job field
              </option>
              {job_field.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col mb-1">
            <label className="text-start text-sm font-bold text-gray-600 mb-1">
              Job/Project description (Brief Summary)
            </label>
            <textarea
              type="text"
              id="job_description"
              name="job_description"
              autoComplete="job_description"
              placeholder="Job description....."
              required
              className="border rounded-md bg-white px-3 py-2 h-20"
            />
          </div>
          <div className="flex flex-col mb-1">
            <label className="text-start text-sm font-bold text-gray-600 mb-1">
              Required Skills and Expertise
            </label>
            <textarea
              type="text"
              id="required_skills_expertise"
              name="required_skills_expertise"
              autoComplete="required_skills_expertise"
              placeholder="required_skills_expertise..."
              required
              className="border rounded-md bg-white px-3 py-2 h-16"
            />
          </div>
          <div className="grid grid-cols-2 gap-2 mb-1">
            <div>
              <label className="text-start block text-sm font-bold text-gray-600 mb-1">
                Job Type
              </label>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                id="job_type"
                name="job_type"
              >
                <option value="" disabled selected>
                  Select your job type
                </option>
                <option value="full-time">Full Time</option>
                <option value="part-time">Part Time</option>
                <option value="freelance">Freelance</option>
              </select>
            </div>
            <div>
              <label className="text-start block text-sm font-bold text-gray-600 mb-1">
                Job Location
              </label>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                id="job_location"
                name="job_location"
              >
                <option value="" disabled selected>
                  Select your job location
                </option>
                <option value="remote">Remote</option>
                <option value="onsite">Onsite</option>
                <option value="specific_location">Specific Location</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 mb-1">
            <div className="flex flex-col mb-1">
              <label className="text-start text-sm font-bold text-gray-600 mb-1">
                Job/Project Starting Date
              </label>
              <DatePicker
                className="border rounded-md bg-white px-3 py-2 w-full"
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                dateFormat="dd/MM/yyyy"
                placeholderText="Select a date"
              />
            </div>
            <div className="flex flex-col mb-1">
              <label className="text-start text-sm font-bold text-gray-600 mb-1">
                Job/Project duration
              </label>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                id="job_duration"
                name="job_duration"
              >
                <option value="contractual">Contractual</option>
                <option value="yearly">Yearly</option>
                <option value="permanent">Permanent</option>
              </select>
            </div>
          </div>
          <div className="flex flex-col mb-1">
            <label className="text-start text-sm font-bold text-gray-600 mb-1">
              Budget Range (Approx) in USD
            </label>
            <input
              type="text"
              name="budget_range"
              id="budget_range"
              autoComplete="budget_range"
              placeholder="Example: 500 USD-600 USD"
              required
              className="border rounded-md bg-white px-3 py-2"
            />
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
        font-medium rounded-lg text-sm px-5 py-2.5 mt-4 mb-2"
            onClick={handleNext}
          >
            Submit
          </button>
        </div>
      </form>
      {/* Image Row */}
      <div className="flex-1 max-[950px]:mb-4">
        <img
          src={img}
          alt="Welcome Image"
          className="max-w-md h-auto mx-auto rounded-md shadow-md max-[480px]:max-w-[380px]
           max-[400px]:max-w-[320px] max-[360px]:max-w-[280px] max-[800px]:max-w-[620px] max-[650px]:max-w-[460px]"
        />
      </div>
    </div>
  );
};

export default Job;
