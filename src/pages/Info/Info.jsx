import { Form } from "@quillforms/renderer-core";
import "@quillforms/renderer-core/build-style/style.css";
import { registerCoreBlocks } from "@quillforms/react-renderer-utils";
import { company, ipsita_logo, job, personal } from "../../assets";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

registerCoreBlocks();

const Info = () => {
  const formObj = {
    blocks: [
      {
        name: "welcome-screen",
        id: "welcome",
        attributes: {
          label: "Welcome!",
          description: "Please fill in the following details...",
        },
      },

      {
        name: "group",
        id: "personal-info",
        attributes: {
          label: "Personal Information",
          attachment: {
            type: "image",
            url: personal,
          },
          layout: "float-left",
        },

        innerBlocks: [
          {
            name: "short-text",
            id: "full_name",
            attributes: {
              required: true,
              label: "Full Name",
            },
          },

          {
            name: "dropdown",
            id: "sex",
            attributes: {
              required: true,
              label: "Sex",
              choices: [
                { label: "Male", value: "male" },
                { label: "Female", value: "female" },
                { label: "Other", value: "other" },
              ],
            },
          },

          {
            name: "dropdown",
            id: "country",
            attributes: {
              required: true,
              label: "Country",
              choices: [
                { label: "Bangladesh", value: "Bangladesh" },
                { label: "UK", value: "UK" },
                { label: "US", value: "US" },
                { label: "Canada", value: "Canada" },
                { label: "Australia", value: "Australia" },
                { label: "Germany", value: "Germany" },
                { label: "France", value: "France" },
              ],
            },
          },

          {
            name: "short-text",
            id: "phone_personal",
            attributes: {
              required: true,
              label: "Phone Number",
            },
          },

          {
            name: "short-text",
            id: "address",
            attributes: {
              required: true,
              label: "Address",
            },
          },

          {
            name: "short-text",
            id: "nid_passport",
            attributes: {
              required: true,
              label: "NID / Passport",
            },
          },

          {
            name: "email",
            id: "contact_email",
            attributes: {
              required: true,
              label: "Contact Email",
            },
          },
        ],
      },

      {
        name: "group",
        id: "company-info",
        attributes: {
          label: "Company Information",
          attachment: {
            type: "image",
            url: company,
          },
          layout: "float-right",
        },

        innerBlocks: [
          {
            name: "short-text",
            id: "company_name",
            attributes: {
              required: true,
              label: "Company Name",
            },
          },

          {
            name: "short-text",
            id: "position_in_company",
            attributes: {
              required: true,
              label: "Position in the Company",
            },
          },

          {
            name: "dropdown",
            id: "industry_and_sector",
            attributes: {
              required: true,
              label: "Industry and Sector",
              choices: [
                { label: "Agro based Industry", value: "Agro based Industry" },
                {
                  label: "Archi./Engg./Construction",
                  value: "Archi./Engg./Construction",
                },
                {
                  label: "Automobile/Industrial Machine",
                  value: "Automobile/Industrial Machine",
                },
                {
                  label: "Bank/Fin. Institution",
                  value: "Bank/Fin. Institution",
                },
                {
                  label: "Wholesale/ Retail/ Export-Import",
                  value: "Wholesale/ Retail/ Export-Import",
                },
                {
                  label: "Electronics/Consumer Durables",
                  value: "Electronics/Consumer Durables",
                },
                { label: "Energy/Power/Fuel", value: "Energy/Power/Fuel" },
                { label: "Garments/Textile", value: "Garments/Textile" },
                { label: "Telecommunication", value: "Telecommunication" },
                { label: "Pharmaceuticals", value: "Pharmaceuticals" },
                {
                  label: "Information Technology",
                  value: "Information Technology",
                },
                {
                  label: "Logistics/Transportation",
                  value: "Logistics/Transportation",
                },
                { label: "Others", value: "Others" },
              ],
            },
          },

          {
            name: "dropdown",
            id: "company_size",
            attributes: {
              required: true,
              label: "Company Size",
              choices: [
                { label: "Self-employed", value: "Self-employed" },
                { label: "1-10 employees", value: "1-10 employees" },
                { label: "11-50 employees", value: "11-50 employees" },
                { label: "51-200 employees", value: "51-200 employees" },
                { label: "201-500 employees", value: "201-500 employees" },
                { label: "501-1000 employees", value: "501-1000 employees" },
                { label: "1001-5000 employees", value: "1001-5000 employees" },
                {
                  label: "5001-10,000 employees",
                  value: "5001-10,000 employees",
                },
                { label: "10,001+ employees", value: "10,001+ employees" },
              ],
            },
          },

          {
            name: "short-text",
            id: "phone_company",
            attributes: {
              required: true,
              label: "Company Contact Number",
            },
          },

          {
            name: "website",
            id: "company_website_url",
            attributes: {
              required: true,
              label: "Company Website URL",
            },
          },

          {
            name: "website",
            id: "social_media_profiles",
            attributes: {
              required: true,
              label: "Links to Company Social Media Profiles",
            },
          },
        ],
      },

      {
        name: "group",
        id: "job-info",
        attributes: {
          label: "Project and Job Details",
          attachment: {
            type: "image",
            url: job,
          },
          layout: "float-left",
        },

        innerBlocks: [
          {
            name: "short-text",
            id: "job_title",
            attributes: {
              required: false,
              label: "Job / Project Title",
            },
            defaultValue: null,
          },

          {
            name: "dropdown",
            id: "job_field",
            attributes: {
              required: false,
              label: "Job Field",
              choices: [
                { label: "Agro based Industry", value: "Agro based Industry" },
                {
                  label: "Archi./Engg./Construction",
                  value: "Archi./Engg./Construction",
                },
                {
                  label: "Automobile/Industrial Machine",
                  value: "Automobile/Industrial Machine",
                },
                {
                  label: "Bank/Fin. Institution",
                  value: "Bank/Fin. Institution",
                },
                {
                  label: "Wholesale/ Retail/ Export-Import",
                  value: "Wholesale/ Retail/ Export-Import",
                },
                {
                  label: "Electronics/Consumer Durables",
                  value: "Electronics/Consumer Durables",
                },
                { label: "Energy/Power/Fuel", value: "Energy/Power/Fuel" },
                { label: "Garments/Textile", value: "Garments/Textile" },
                { label: "Telecommunication", value: "Telecommunication" },
                { label: "Pharmaceuticals", value: "Pharmaceuticals" },
                {
                  label: "Information Technology",
                  value: "Information Technology",
                },
                {
                  label: "Logistics/Transportation",
                  value: "Logistics/Transportation",
                },
                { label: "Others", value: "Others" },
              ],
            },
            defaultValue: null,
          },

          {
            name: "long-text",
            id: "job_description",
            attributes: {
              required: false,
              label: "Job / Project Description (Brief Summary)",
            },
            defaultValue: null,
          },

          {
            name: "long-text",
            id: "required_skills_expertise",
            attributes: {
              required: false,
              label: "Required Skills and Expertise",
            },
            defaultValue: null,
          },

          {
            name: "dropdown",
            id: "job_type",
            attributes: {
              required: false,
              label: "Job Type",
              choices: [
                { label: "Full-Time", value: "full_time" },
                { label: "Part-Time", value: "part_time" },
                { label: "Freelance", value: "freelance" },
              ],
              defaultValue: null,
            },
          },

          {
            name: "dropdown",
            id: "job_location",
            attributes: {
              required: false,
              label: "Job Location",
              choices: [
                { label: "Remote", value: "remote" },
                { label: "On-Site", value: "on_site" },
                {
                  label: "Specific Location",
                  value: "specific_location",
                },
              ],
              defaultValue: null,
            },
          },

          {
            name: "date",
            id: "job_start_date",
            attributes: {
              required: false,
              format: "YYYYMMDD",
              separator: "-",
              label: "Job / Project Start Date",
            },
            defaultValue: null,
          },

          {
            name: "dropdown",
            id: "job_duration",
            attributes: {
              required: false,
              label: "Job / Project Duration",
              choices: [
                { label: "Contractual", value: "contractual" },
                { label: "Yearly", value: "yearly" },
                { label: "Permanent", value: "permanent" },
              ],
              defaultValue: null,
            },
          },

          {
            name: "short-text",
            id: "budge_range",
            attributes: {
              required: false,
              label: "Budget Range (Approx.) in USD",
              placeholder: "eg. 500 - 600",
            },
            defaultValue: null,
          },
        ],
      },
    ],
    theme: {
      font: "", // Specify your font
      backgroundColor: "#ffffff", // Set your desired background color
      backgroundImage: company, // Set the path to your background image
      logo: {
        type: "image",
        src: ipsita_logo, // Set the path to your logo
      },
    },
    messages: {
      "block.defaultThankYouScreen.label":
        "Thank you for filling out! \n\n You may go to your profile!",
    },
    settings: {
      // ... (your existing settings)
    },
  };

  const handleSubmit = async (data, { completeForm, setIsSubmitting }) => {
    // Extract only key-value pairs from the form data
    const postData = {};
    Object.keys(data).forEach((blockId) => {
      const block = data[blockId];
      Object.keys(block).forEach((fieldId) => {
        postData[fieldId] = block[fieldId].value;
      });
    });

    // Handle form submission logic here
    try {
      const token = localStorage.getItem("token"); // Replace with your actual bearer token
      const apiUrl = import.meta.env.VITE_API_URL + "/registration_job/";

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

      const responseData = await response.json();
      console.log("Submission successful:", responseData);
      setIsSubmitting(false);
      completeForm();
    } catch (error) {
      console.error("Error during submission:", error);
      setIsSubmitting(false);
    }

    console.log(postData);
  };

  return (
    <div className="mt-2" style={{ width: "100%", height: "100vh" }}>
      <Link to="/profile" className="flex items-center z-99">
        <FaHome />
        <span className="ml-2">Profile</span>
      </Link>
      <Form
        formId="registration-form"
        formObj={formObj}
        onSubmit={handleSubmit}
      />

      {/* <Form
        formId="registration-form"
        formObj={formObj}
        onSubmit={(data, { completeForm, setIsSubmitting }) => {
          // Log only the values submitted
          console.log("Submitted values:", data);

          // Mock submission logic (remove this in production)
          setTimeout(() => {
            setIsSubmitting(false);
            completeForm();
          }, 500);
        }}
      /> */}
    </div>
  );
};

export default Info;
