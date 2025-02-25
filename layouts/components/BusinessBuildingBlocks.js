"use client"; // For Next.js 13+ with App Router

import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import animationData from "../public/Animation.json"; // Move your Lottie file to the public folder

const BusinessBuildingBlocks = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <Lottie animationData={animationData} loop={true} className="w-96 h-96" />
    </div>
  );
};

export default BusinessBuildingBlocks;
