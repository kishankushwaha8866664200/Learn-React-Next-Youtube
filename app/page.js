"use client";
import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
const page = () => {
  const [userData, setUserData] = useState("");

  const getData = async () => {
    const res = await axios.get("https://picsum.photos/v2/list");
    console.log(res.data);
    setUserData(JSON.stringify(res.data));
  };

  return (
    <div>
      <button
        onClick={getData}
        className="bg-green-200 rounded p-4 border-0 font-white">
        Show Toast
      </button>
      <ToastContainer />
      {userData}
    </div>
  );
};

export default page;
