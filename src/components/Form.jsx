import React, { useEffect, useState } from "react";
import UserTable from "./UserTable";

const Form = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    role: "",
    password: "",
  });

  const [userData, setUserData] = useState(() => {
    const storedUserData = localStorage.getItem("user");
    return storedUserData ? JSON.parse(storedUserData) : [];
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedUserData = [...userData, formData];
    setUserData(updatedUserData);
    setFormData({
      email: "",
      name: "",
      role: "",
      password: "",
    });
    alert("Form submitted successfully");
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(userData));
  }, [userData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-lg">Login Form</h1>
        <form
          className="flex flex-col space-y-5 bg-white p-8 rounded-lg shadow-lg w-full max-w-md"
          onSubmit={handleSubmit}
        >
          <input
            className="bg-[#D9D9D9]
 border border-gray-300 outline-none rounded-lg p-2 placeholder:text-black focus:bg-white focus:border-blue-500"
            name="email"
            type="email"
            placeholder="Enter Email"
            required
            onChange={handleChange}
            value={formData.email}
          />
          <input
            className="bg-[#D9D9D9] border border-gray-300 outline-none rounded-lg p-2 placeholder:text-black focus:bg-white focus:border-blue-500"
            name="name"
            type="text"
            placeholder="Enter Name"
            required
            onChange={handleChange}
            value={formData.name}
          />
          <input
            className="bg-[#D9D9D9] border border-gray-300 outline-none rounded-lg p-2 placeholder:text-black focus:bg-white focus:border-blue-500"
            name="role"
            type="text"
            placeholder="Enter Role"
            required
            onChange={handleChange}
            value={formData.role}
          />
          <input
            className="bg-[#D9D9D9] border border-gray-300 outline-none rounded-lg p-2 placeholder:text-black focus:bg-white focus:border-blue-500"
            name="password"
            type="password"
            placeholder="Enter Password"
            required
            onChange={handleChange}
            value={formData.password}
          />
          <div className="flex justify-end">
            <button
              className="text-black bg-[#22F3E3]
 hover:bg-cyan-200 rounded-lg px-4 py-2 w-40 "
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <div>
        <UserTable userData={userData} setUserData={setUserData} />
      </div>
    </>
  );
};

export default Form;
