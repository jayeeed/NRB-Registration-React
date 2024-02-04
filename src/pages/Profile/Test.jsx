import { useState } from "react";

function Test() {
  // Define the state variables for name, email, and phone
  const [name, setName] = useState("John Doe");
  const [email, setEmail] = useState("john.doe@example.com");
  const [phone, setPhone] = useState("123-456-7890");

  // Define the state variable for edit mode
  const [edit, setEdit] = useState(false);

  // Define the handler functions for changing the input values
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  // Define the handler function for toggling the edit mode
  const handleEditToggle = () => {
    setEdit(!edit);
  };

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <h1 className="text-2xl font-bold text-center mb-4">Personal Info</h1>
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <label className="text-gray-600 font-medium">Name</label>
          {edit ? (
            <input
              className="w-3/4 border border-gray-300 rounded px-2 py-1"
              type="text"
              value={name}
              onChange={handleNameChange}
            />
          ) : (
            <span className="w-3/4 text-gray-800">{name}</span>
          )}
        </div>
        <div className="flex items-center justify-between">
          <label className="text-gray-600 font-medium">Email</label>
          {edit ? (
            <input
              className="w-3/4 border border-gray-300 rounded px-2 py-1"
              type="email"
              value={email}
              onChange={handleEmailChange}
            />
          ) : (
            <span className="w-3/4 text-gray-800">{email}</span>
          )}
        </div>
        <div className="flex items-center justify-between">
          <label className="text-gray-600 font-medium">Phone</label>
          {edit ? (
            <input
              className="w-3/4 border border-gray-300 rounded px-2 py-1"
              type="tel"
              value={phone}
              onChange={handlePhoneChange}
            />
          ) : (
            <span className="w-3/4 text-gray-800">{phone}</span>
          )}
        </div>
        <div className="flex justify-end">
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold px-4 py-2 rounded"
            onClick={handleEditToggle}
          >
            {edit ? "Save" : "Edit"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Test;
