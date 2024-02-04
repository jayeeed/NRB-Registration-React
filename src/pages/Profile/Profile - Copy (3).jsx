import { useState, useEffect } from "react";
import JobInfo from "../../components/ProfileComponents/JobInfo";
import CompanyInfo from "../../components/ProfileComponents/CompanyInfo";
import PersonalInfo from "../../components/ProfileComponents/PersonalInfo";

const UserDataComponent = () => {
  const [userData, setUserData] = useState(null);
  const [jobData, setJobData] = useState(null);
  const [activeTab, setActiveTab] = useState("personal");
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
    <>
      <div className="mx-auto p-4">
        {/* Render tabs for navigation */}
        <div role="tablist" className="tabs tabs-bordered tabs-lifted tabs-lg">
          <button
            onClick={() => setActiveTab("personal")}
            className={`tab ${activeTab === "personal" && "active"}`}
          >
            Personal Info
          </button>
          <button
            onClick={() => setActiveTab("company")}
            className={`tab ${activeTab === "company" && "active"}`}
          >
            Company Info
          </button>
          <button
            onClick={() => setActiveTab("job")}
            className={`tab ${activeTab === "job" && "active"}`}
          >
            Job Info
          </button>
        </div>
        {/* Render appropriate component based on the active tab */}
        {activeTab === "personal" && userData && (
          <PersonalInfo userData={userData} />
        )}
        {activeTab === "company" && userData && (
          <CompanyInfo userData={userData} />
        )}
        {activeTab === "job" && jobData && <JobInfo jobData={jobData} />}
      </div>
    </>
  );
};

export default UserDataComponent;
